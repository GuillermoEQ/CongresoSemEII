(async () => {
  const { expect } = await import('chai');
  const sequelize = (await import('../config/db.config')).default;
  const Attendance = (await import('../models/Attendances.js')).default;
  const Activitie = (await import('../models/Activities.js')).default;
  const Register = (await import('../models/Registers.js')).default;

  describe('Attendance Model', () => {

    before(async () => {
      // Sync all models to the database
      await sequelize.sync({ force: true });
    });

    after(async () => {
      // Drop all tables
      await sequelize.drop();
    });

    it('should create a valid attendance', async () => {
      // Create necessary foreign key entries
      const activity = await Activitie.create({
        name: 'Sample Activity',
        description: 'This is a sample activity.'
      });

      const register = await Register.create({
        name: 'Sample Register',
        description: 'This is a sample register.'
      });

      const attendanceData = {
        register_id: register.id,
        activity_id: activity.id
      };

      const attendance = await Attendance.create(attendanceData);

      expect(attendance.id).to.be.a('number');
      expect(attendance.mark_attendance).to.be.a('date');
      expect(attendance.register_id).to.equal(register.id);
      expect(attendance.activity_id).to.equal(activity.id);
    });

    it('should not create an attendance without required fields', async () => {
      try {
        await Attendance.create({});
      } catch (error) {
        expect(error).to.be.an('error');
        expect(error.name).to.equal('SequelizeValidationError');
      }
    });

    it('should not create an attendance with non-existent foreign keys', async () => {
      const attendanceData = {
        register_id: 9999, // Assuming this register_id does not exist
        activity_id: 9999  // Assuming this activity_id does not exist
      };

      try {
        await Attendance.create(attendanceData);
      } catch (error) {
        expect(error).to.be.an('error');
        expect(error.name).to.equal('SequelizeForeignKeyConstraintError');
      }
    });
  });
})();
