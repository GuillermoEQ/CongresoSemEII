(async () => {
    const { expect } = await import('chai');
    const sequelize = require('../config/db.config');
    const Social_Medias = require('../models/Social_Medias');
    const Users = require('../models/Users');
  
    describe('Social_Medias Model', () => {
  
      before(async () => {
        await sequelize.sync({ force: true });
      });
  
      after(async () => {
        await sequelize.drop();
      });
  
      it('Debería crear una red social válida', async () => {
        const userData = {
          name: 'Juan',
          surname: 'Jhon',
          email: 'juan.juan@example.com',
          password: 'securepassword',
          tipo: 'admin'
        };
  
        const user = await Users.create(userData);
  
        const socialMediaData = {
          user_id: user.id,
          platform: 'Twitter',
          link: 'https://twitter.com/juan'
        };
  
        const socialMedia = await Social_Medias.create(socialMediaData);
  
        expect(socialMedia.id).to.be.a('numero');
        expect(socialMedia.user_id).to.equal(user.id);
        expect(socialMedia.platform).to.equal('Twitter');
        expect(socialMedia.link).to.equal('https://twitter.com/juan');
      });
  
      it('No debería crear una red social sin todos los campos requeridos', async () => {
        try {
          await Social_Medias.create({
            platform: 'Facebook'
            // Falta el campo link y user_id
          });
        } catch (error) {
          expect(error).to.be.an('error');
          expect(error.name).to.equal('SequelizeValidationError');
        }
      });
  
      it('No debería crear una red social con un user_id inexistente', async () => {
        try {
          await Social_Medias.create({
            user_id: 999,  // ID de usuario inexistente
            platform: 'LinkedIn',
            link: 'https://linkedin.com/in/juan'
          });
        } catch (error) {
          expect(error).to.be.an('error');
          expect(error.name).to.equal('SequelizeForeignKeyConstraintError');
        }
      });
    });
  })();
  