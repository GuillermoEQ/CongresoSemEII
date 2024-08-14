(async () => {
    const { expect } = await import('chai');
    const sequelize = require('../config/db.config');
    const Register = require('../models/Registers');
    const Activitie = require('../models/Activities');
    const User = require('../models/Users');
  
    describe('Register Model', () => {
  
      before(async () => {
        await sequelize.sync({ force: true }); // Sincronizar los modelos con la base de datos
      });
  
      after(async () => {
        await sequelize.drop(); // Eliminar la base de datos después de las pruebas
      });
  
      it('Debería crear un registro válido', async () => {
        // Crear una actividad y un usuario como datos necesarios para el registro
        const activitie = await Activitie.create({
          title: 'Test Activity',
          content: 'Activity Content',
          location: 'Test Location',
          activitiy_type: 'Test Type',
          start: 9.00,
          end: 11.00,
          quota: 100
        });
  
        const user = await User.create({
          name: 'Congreso',
          surname: 'App',
          email: 'congreso@gmail.com',
          password: '123456',
          tipo: 'admin'
        });
  
        // Crear el registro
        const registerData = {
          date: new Date(),
          activity_id: activitie.id, // Relación con la actividad
          user_id: user.id            // Relación con el usuario
        };
  
        const register = await Register.create(registerData);
  
        // Verificar los valores del registro
        expect(register.id).to.be.a('number');
        expect(register.date).to.be.a('date');
        expect(register.activity_id).to.equal(activitie.id);
        expect(register.user_id).to.equal(user.id);
      });
  
      it('No debería crear un registro sin todos los campos requeridos', async () => {
        try {
          await Register.create({
            date: new Date(),
            // Faltan las claves foráneas "activity_id" y "user_id"
          });
        } catch (error) {
          expect(error).to.be.an('error');
          expect(error.name).to.equal('SequelizeValidationError');
        }
      });
  
    });
  })();
  