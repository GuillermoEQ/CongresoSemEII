(async () => {
    const { expect } = await import('chai');
    const sequelize = require('../config/database');
    const Lecturer = require('../models/Lecturers');
    const Users = require('../models/Users');
  
    describe('Lecturer Model', () => {
  
      before(async () => {
        await sequelize.sync({ force: true });
      });
  
      after(async () => {
        await sequelize.drop();
      });
  
      it('Debería crear un docente válido', async () => {
        const userData = {
          name: 'Alicia',
          surname: 'Lopez',
          email: 'alicia.lopez@example.com',
          password: 'securepassword',
          tipo: 'lecturer'
        };
  
        const user = await Users.create(userData);
  
        const lecturerData = {
          user_id: user.id,
          title: 'PhD',
          institution: 'Universidad',
          position: 'Profesor',
          biography: 'Experto.',
          photo: 'alicia_lopez_foto.jpg',
          status: 'active'
        };
  
        const lecturer = await Lecturer.create(lecturerData);
  
        expect(lecturer.id).to.be.a('number');
        expect(lecturer.user_id).to.equal(user.id);
        expect(lecturer.title).to.equal('PhD');
        expect(lecturer.institution).to.equal('Universidad');
        expect(lecturer.position).to.equal('Profesor');
        expect(lecturer.biography).to.equal('Experta.');
        expect(lecturer.photo).to.equal('alicia_lopez_photo.jpg');
        expect(lecturer.status).to.equal('active');
      });
  
      it('No debería crear un docente sin todos los campos requeridos', async () => {
        try {
          await Lecturer.create({
            user_id: '123e4567-e89b-12d3-a456-426614174000',
            title: 'MSc',
            // Faltan institution, position, y status
          });
        } catch (error) {
          expect(error).to.be.an('error');
          expect(error.name).to.equal('SequelizeValidationError');
        }
      });
  
      it('No debería crear un docente con un user_id inexistente', async () => {
        try {
          await Lecturer.create({
            user_id: '123e4567-e89b-12d3-a456-426614174000', // UUID inexistente
            title: 'PhD',
            institution: 'Universdad otra',
            position: 'Disertante',
            status: 'active'
          });
        } catch (error) {
          expect(error).to.be.an('error');
          expect(error.name).to.equal('SequelizeForeignKeyConstraintError');
        }
      });
  
      it('Debería actualizar el estado de un docente', async () => {
        const user = await Users.create({
          name: 'Bob',
          surname: 'Cru',
          email: 'bob.cru@example.com',
          password: 'securepassword',
          tipo: 'disertante'
        });
  
        const lecturer = await Lecturer.create({
          user_id: user.id,
          title: 'PhD',
          institution: 'Instituto',
          position: 'Asistente',
          biography: 'Especialista.',
          status: 'inactive'
        });
  
        lecturer.status = 'active';
        await lecturer.save();
  
        const updatedLecturer = await Lecturer.findByPk(lecturer.id);
        expect(updatedLecturer.status).to.equal('active');
      });
    });
  })();
  