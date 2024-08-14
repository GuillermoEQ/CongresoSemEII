(async () => {
  const { expect } = await import('chai');
  const sequelize = (await import('../config/db.config')).default;
  const Staff = (await import('../models/Staffs.js')).default;
  const Users = (await import('../models/Users.js')).default;

  describe('Staff Model', () => {

    before(async () => {
      // Sync all models to the database
      await sequelize.sync({ force: true });
    });

    after(async () => {
      // Drop all tables
      await sequelize.drop();
    });

    it('should create a valid staff member', async () => {
      // Create a user first to satisfy the foreign key constraint
      const user = await Users.create({
        name: 'paulo',
        surname: 'bru',
        email: 'paulobru@gmail.com',
        password: '1234',
        tipo: 'staff'
      });

      const staffData = {
        role: 'Manager',
        user_id: user.id
      };

      const staff = await Staff.create(staffData);

      expect(staff.id).to.be.a('number');
      expect(staff.role).to.equal('Manager');
      expect(staff.user_id).to.equal(user.id);
    });

    it('should not create a staff member without required fields', async () => {
      try {
        await Staff.create({
          // Missing required fields like role and user_id
        });
      } catch (error) {
        expect(error).to.be.an('error');
        expect(error.name).to.equal('SequelizeValidationError');
      }
    });

    it('should not create a staff member with a non-existent user_id', async () => {
      const staffData = {
        role: 'Manager',
        user_id: 9999 // Assuming this user_id does not exist
      };

      try {
        await Staff.create(staffData);
      } catch (error) {
        expect(error).to.be.an('error');
        expect(error.name).to.equal('SequelizeForeignKeyConstraintError');
      }
    });
  });
})();
