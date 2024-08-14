(async () => {
    const { expect } = await import('chai');
    const sequelize = require('../config/db.config');
    const User = require('../models/Users');
  
    describe('User Model', () => {
  
      before(async () => {
        await sequelize.sync({ force: true });
      });
  
      after(async () => {
        await sequelize.drop();
      });
  
      it('Debería crear un usuario válido', async () => {
        const userData = {
          name: 'Congreso',
          surname: 'App',
          email: 'congreso@gmail.com',
          password: '123456',
          tipo: 'admin'
        };
  
        const user = await User.create(userData);
  
        expect(user.id).to.be.a('string');  // UUID es un string
        expect(user.name).to.equal('Congreso');
        expect(user.surname).to.equal('App');
        expect(user.email).to.equal('congreso@example.com');
        expect(user.password).to.equal('123456');
        expect(user.tipo).to.equal('admin');
      });
  
      it('No debería crear un usuario sin todos los campos requeridos', async () => {
        try {
          await User.create({
            name: 'Incomplete',
            // Faltan otros campos requeridos como email y password
          });
        } catch (error) {
          expect(error).to.be.an('error');
          expect(error.name).to.equal('SequelizeValidationError');
        }
      });
  
      it('No debería crear un usuario con un email duplicado', async () => {
        const userData = {
          name: 'Jane',
          surname: 'Doe',
          email: 'jane.doe@example.com',
          password: 'securepassword',
          tipo: 'user'
        };
  
        await User.create(userData);
  
        try {
          await User.create(userData); // Intento de crear otro usuario con el mismo email
        } catch (error) {
          expect(error).to.be.an('error');
          expect(error.name).to.equal('SequelizeUniqueConstraintError');
        }
      });
    });
  })();
  