(async () => {
    const { expect } = await import('chai');
    const sequelize = require('../config/db.config');
    const AccommodationType = require('../models/Accommodations_type');
  
    describe('AccommodationType Model', () => {
      
      before(async () => {
        await sequelize.sync({ force: true }); // Sincronizar el modelo con la base de datos
      });
  
      after(async () => {
        await sequelize.drop(); // Eliminar la base de datos después de las pruebas
      });
  
      it('Debería crear un tipo de alojamiento válido', async () => {
        const accommodationTypeData = {
          type: 'Hotel',
          description: 'A place offering accommodation and meals to travelers'
        };
  
        const accommodationType = await AccommodationType.create(accommodationTypeData);
  
        expect(accommodationType.id).to.be.a('number');  // El id debe ser un número autoincremental
        expect(accommodationType.type).to.equal('Hotel');
        expect(accommodationType.description).to.equal('A place offering accommodation and meals to travelers');
      });
  
      it('No debería crear un tipo de alojamiento sin el campo requerido "type"', async () => {
        try {
          await AccommodationType.create({
            description: 'A description without a type' // Falta el campo "type"
          });
        } catch (error) {
          expect(error).to.be.an('error');
          expect(error.name).to.equal('SequelizeValidationError');
        }
      });
  
    });
  })();
  