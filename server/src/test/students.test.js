(async () => {
    const { expect } = await import('chai');
    const sequelize = require('../config/db.config');
    const Student = require('../models/Students');
  
    describe('Student Model', () => {
  
      before(async () => {
        await sequelize.sync({ force: true });
      });
  
      after(async () => {
        await sequelize.drop();
      });
  
      it('Debería crear un estudiante válido', async () => {
        const studentData = {
          // No es necesario definir el `id` ya que es autoincremental
        };
  
        const student = await Student.create(studentData);
  
        expect(student.id).to.be.a('number');  // `id` debe ser un número
      });
  
      it('Debería incrementar el `id` automáticamente', async () => {
        const firstStudent = await Student.create({});
        const secondStudent = await Student.create({});
  
        expect(secondStudent.id).to.be.greaterThan(firstStudent.id);
      });
    });
  })();
  