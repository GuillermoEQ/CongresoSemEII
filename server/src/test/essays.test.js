(async () => {
  const { expect } = await import('chai');
  const sequelize = (await import('../config/db.config')).default;
  const Essay = (await import('../models/Essays.js')).default;
  const Students = (await import('../models/Students.js')).default;

  describe('Essay Model', () => {

    before(async () => {
      // Sync all models to the database
      await sequelize.sync({ force: true });
    });

    after(async () => {
      // Drop all tables
      await sequelize.drop();
    });

    it('should create a valid essay', async () => {
      // Create a student first to satisfy the foreign key constraint
      const student = await Students.create({
        name: 'paulo',
        surname: 'bru',
        email: 'paulobru@gmail.com'
      });

      const essayData = {
        student_id: student.id,
        title: 'Sample Essay',
        content: 'This is the content of the essay.',
        status: 'submitted',
        summary_date: 20230801,
        complete_date: 20230810
      };

      const essay = await Essay.create(essayData);

      expect(essay.id).to.be.a('number');  // Primary key id is a number
      expect(essay.student_id).to.equal(student.id);
      expect(essay.title).to.equal('Sample Essay');
      expect(essay.content).to.equal('This is the content of the essay.');
      expect(essay.status).to.equal('submitted');
      expect(essay.summary_date).to.equal(20230801);
      expect(essay.complete_date).to.equal(20230810);
    });

    it('should not create an essay without required fields', async () => {
      try {
        await Essay.create({
          // Missing required fields like title, content, etc.
          student_id: 1
        });
      } catch (error) {
        expect(error).to.be.an('error');
        expect(error.name).to.equal('SequelizeValidationError');
      }
    });

    it('should not create an essay with a non-existent student_id', async () => {
      const essayData = {
        student_id: 9999, // Assuming this student_id does not exist
        title: 'Invalid Essay',
        content: 'This essay should fail.',
        status: 'submitted',
        summary_date: 20230801,
        complete_date: 20230810
      };

      try {
        await Essay.create(essayData);
      } catch (error) {
        expect(error).to.be.an('error');
        expect(error.name).to.equal('SequelizeForeignKeyConstraintError');
      }
    });
  });
})();
