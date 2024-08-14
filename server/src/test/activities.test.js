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
      const activityData = {
        title: 'Industria 4.0',
        content: 'IA',
        location: 'Room 101',
        activitiy_type: 'Charla',
        start: 9.00,
        end: 17.00,
        quota: 30
      };

      const activity = await Activitie.create(activityData);

      expect(activity.id).to.be.a('numero');
      expect(activity.title).to.equal('AI');
      expect(activity.content).to.equal('inteligencia artificial');
      expect(activity.location).to.equal('Room 101');
      expect(activity.activitiy_type).to.equal('Charla');
      expect(activity.start).to.equal('9.00');
      expect(activity.end).to.equal('17.00');
      expect(activity.quota).to.equal('30');
    });

    it('No debería crear una actividad sin todos los campos requeridos', async () => {
      try {
        await Activitie.create({
          title: 'Seminar on ML',
          // Falta content, location, activitiy_type, start, end y quota
        });
      } catch (error) {
        expect(error).to.be.an('error');
        expect(error.name).to.equal('SequelizeValidationError');
      }
    });

    it('No debería crear una actividad con valores de tiempo no válidos', async () => {
      try {
        await Activitie.create({
          title: 'Conferencia',
          content: 'Conferencia de IA.',
          location: 'Auditorio',
          activitiy_type: 'Conferenia',
          start: 18.00,
          end: 16.00,  // End time is before start time
          quota: 50
        });
      } catch (error) {
        expect(error).to.be.an('error');
        expect(error.name).to.equal('SequelizeValidationError');
      }
    });

    it('Debería actualizar la ubicación de una actividad', async () => {
      const activity = await Activitie.create({
        title: 'Hackaton',
        content: 'competicion 24/7.',
        location: 'Main Hall',
        activitiy_type: 'Competicion',
        start: 10.00,
        end: 10.00,
        quota: 100
      });

      activity.location = 'Room 202';
      await activity.save();

      const updatedActivity = await Activitie.findByPk(activity.id);
      expect(updatedActivity.location).to.equal('Room 202');
    });
  });
})();
