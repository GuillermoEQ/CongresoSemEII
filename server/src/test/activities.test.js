(async () => {
    const { expect } = await import('chai');
    const sequelize = require('../config/db.config');
    const Activitie = require('../models/Activities');
  
    describe('Activitie Model', () => {
  
      before(async () => {
        await sequelize.sync({ force: true });
      });
  
      after(async () => {
        await sequelize.drop();
      });
  
      it('Debería crear una actividad válida', async () => {
        const activitieData = {
          title: 'Test Activity',
          content: 'This is a test activity',
          location: 'Test Location',
          activitiy_type: 'Test Type',
          start: 10.00,
          end: 12.00,
          quota: 50
        };
  
        const activitie = await Activitie.create(activitieData);
  
        expect(activitie.id).to.be.a('number');
        expect(activitie.title).to.equal('Test Activity');
        expect(activitie.content).to.equal('This is a test activity');
        expect(activitie.location).to.equal('Test Location');
        expect(activitie.activitiy_type).to.equal('Test Type');
        expect(activitie.start).to.equal(10.00);
        expect(activitie.end).to.equal(12.00);
        expect(activitie.quota).to.equal(50);
      });
  
      it('No debería crear una actividad sin todos los campos requeridos', async () => {
        try {
          await Activitie.create({
            title: 'Incomplete Activity'
            // Faltan otros campos requeridos
          });
        } catch (error) {
          expect(error).to.be.an('error');
          expect(error.name).to.equal('SequelizeValidationError');
        }
      });
    });
  })();
  