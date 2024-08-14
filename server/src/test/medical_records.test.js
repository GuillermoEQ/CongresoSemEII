(async () => {
    const { expect } = await import('chai');
    const sequelize = require('../config/database');
    const Medical_Records = require('../models/Medical_Records');
    const Users = require('../models/Users');
  
    describe('Medical_Records Model', () => {
  
      before(async () => {
        await sequelize.sync({ force: true });
      });
  
      after(async () => {
        await sequelize.drop();
      });
  
      it('Debería crear un registro médico válido', async () => {
        const userData = {
          name: 'Juan',
          surname: 'John',
          email: 'juan.juan@example.com',
          password: 'securepassword',
          tipo: 'user'
        };
  
        const user = await Users.create(userData);
  
        const medicalRecordData = {
          user_id: user.id,
          allergies: 'Polen',
          dietary_restrictions: 'Vegetariano',
          medications: 'Ibuprofeno',
          chronic_diseases: 'Asma',
          emergency_contact: 'Juan Juan',
          emergency_contact_phone: '123-456-7890',
          observations: 'N/A'
        };
  
        const medicalRecord = await Medical_Records.create(medicalRecordData);
  
        expect(medicalRecord.id).to.be.a('numero');
        expect(medicalRecord.user_id).to.equal(user.id);
        expect(medicalRecord.allergies).to.equal('Polen');
        expect(medicalRecord.dietary_restrictions).to.equal('Vegetariano');
        expect(medicalRecord.medications).to.equal('Ibuprofeno');
        expect(medicalRecord.chronic_diseases).to.equal('Asma');
        expect(medicalRecord.emergency_contact).to.equal('Juan Juan');
        expect(medicalRecord.emergency_contact_phone).to.equal('123-456-7890');
        expect(medicalRecord.observations).to.equal('N/A');
      });
  
      it('No debería crear un registro médico sin user_id', async () => {
        try {
          await Medical_Records.create({
            allergies: 'Polen',
            dietary_restrictions: 'Vegetariano',
            medications: 'Ibuprofeno',
            chronic_diseases: 'Asma',
            emergency_contact: 'Juan Juan',
            emergency_contact_phone: '123-456-7890'
            // Falta el campo user_id
          });
        } catch (error) {
          expect(error).to.be.an('error');
          expect(error.name).to.equal('SequelizeValidationError');
        }
      });
  
      it('No debería crear un registro médico con un user_id inexistente', async () => {
        try {
          await Medical_Records.create({
            user_id: '123e4567-e89b-12d3-a456-426614174000', // UUID inexistente
            allergies: 'Polen',
            dietary_restrictions: 'Vegetariano',
            medications: 'Ibuprofeno',
            chronic_diseases: 'Asma',
            emergency_contact: 'Juan Juan',
            emergency_contact_phone: '123-456-7890'
          });
        } catch (error) {
          expect(error).to.be.an('error');
          expect(error.name).to.equal('SequelizeForeignKeyConstraintError');
        }
      });
  
      it('Debería actualizar las observaciones de un registro médico', async () => {
        const user = await Users.create({
          name: 'Juan',
          surname: 'John',
          email: 'juan.juan@example.com',
          password: 'securepassword',
          tipo: 'user'
        });
  
        const medicalRecord = await Medical_Records.create({
          user_id: user.id,
          allergies: 'None',
          dietary_restrictions: 'None',
          medications: 'None',
          chronic_diseases: 'None',
          emergency_contact: 'Jose Jose',
          emergency_contact_phone: '098-765-4321',
          observations: 'Observaciones Inicales'
        });
  
        medicalRecord.observations = 'Observaciones actualizadas';
        await medicalRecord.save();
  
        const updatedRecord = await Medical_Records.findByPk(medicalRecord.id);
        expect(updatedRecord.observations).to.equal('Observacions actualizadas');
      });
    });
  })();
  