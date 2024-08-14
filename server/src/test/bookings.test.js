(async () => {
    const { expect } = await import('chai');
    const sequelize = require('../config/db.config');
    const Booking = require('../models/Bookings');
    const Accommodation = require('../models/Accommodations');
    const User = require('../models/Users');
  
    describe('Booking Model', () => {
  
      before(async () => {
        await sequelize.sync({ force: true }); // Sincronizar los modelos con la base de datos
      });
  
      after(async () => {
        await sequelize.drop(); // Eliminar la base de datos después de las pruebas
      });
  
      it('Debería crear una reserva válida', async () => {
        // Crear una acomodación y un usuario como datos necesarios para la reserva
        const accommodation = await Accommodation.create({
          name: 'Reyunos Hotel',
          address: 'San Rafael, Mendoza',
          price_per_night: 200,
          available_rooms: 50
        });
  
        const user = await User.create({
          name: 'Congreso',
          surname: 'App',
          email: 'congreso@gmail.com',
          password: '123456',
          tipo: 'guest'
        });
  
        // Crear la reserva
        const bookingData = {
          user_id: user.id, // Relación con el usuario
          accommodation_id: accommodation.id, // Relación con la acomodación
          start_day: new Date('2024-09-01'),
          finish_day: new Date('2024-09-05'),
          plazas_reservadas: 2
        };
  
        const booking = await Booking.create(bookingData);
  
        // Verificar los valores de la reserva
        expect(booking.id).to.be.a('number');
        expect(booking.user_id).to.equal(user.id);
        expect(booking.accommodation_id).to.equal(accommodation.id);
        expect(booking.start_day).to.be.a('date');
        expect(booking.finish_day).to.be.a('date');
        expect(booking.plazas_reservadas).to.equal(2);
      });
  
      it('No debería crear una reserva sin todos los campos requeridos', async () => {
        try {
          await Booking.create({
            start_day: new Date('2024-09-01'),
            finish_day: new Date('2024-09-05')
            // Faltan las claves foráneas "user_id" y "accommodation_id"
          });
        } catch (error) {
          expect(error).to.be.an('error');
          expect(error.name).to.equal('SequelizeValidationError');
        }
      });
  
    });
  })();
  