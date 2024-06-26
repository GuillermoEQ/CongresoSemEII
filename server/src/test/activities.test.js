// server/src/test/activities.test.js

// Usa una importación dinámica para cargar chai
import('chai').then(chai => {
    const { expect } = chai;
    const request = require('supertest');
    const { app } = require('../app'); // Ajusta la ruta según la estructura de tu proyecto
    const { Activitie } = require('../models/Activities'); // Ajusta la ruta según la estructura de tu proyecto

    // Datos de ejemplo para las actividades
    const sampleActivities = [
        {
            title: 'Activity 1',
            content: 'Activity Content 1',
            lecturer: 'Lecturer 1',
            start: 9.00,
            end: 11.00,
            day: 1.00
        },
        {
            title: 'Activity 2',
            content: 'Activity Content 2',
            lecturer: 'Lecturer 2',
            start: 10.00,
            end: 12.00,
            day: 2.00
        },
        {
            title: 'Activity 3',
            content: 'Activity Content 3',
            lecturer: 'Lecturer 3',
            start: 13.00,
            end: 15.00,
            day: 3.00
        }
    ];

    describe('Activities API tests', () => {
        beforeEach(async () => {
            // Antes de cada prueba, limpiar la tabla de actividades
            await Activitie.destroy({ where: {} });
            // Crear nuevas actividades de ejemplo en la base de datos
            await Activitie.bulkCreate(sampleActivities);
        });

        it('GET /activities should return all activities', async () => {
            const response = await request(app).get('/activities');
            const { body, status } = response;

            expect(status).to.equal(200);
            expect(body).to.be.an('array');
            expect(body).to.have.lengthOf(sampleActivities.length);

            // Verificar que todas las actividades creadas estén presentes
            sampleActivities.forEach((expectedActivity, index) => {
                const actualActivity = body[index];
                expect(actualActivity.title).to.equal(expectedActivity.title);
                expect(actualActivity.content).to.equal(expectedActivity.content);
                expect(actualActivity.lecturer).to.equal(expectedActivity.lecturer);
                expect(actualActivity.start).to.equal(expectedActivity.start);
                expect(actualActivity.end).to.equal(expectedActivity.end);
                expect(actualActivity.day).to.equal(expectedActivity.day);
            });
        });

        it('POST /activities should create a new activity', async () => {
            const newActivityData = {
                title: 'New Activity',
                content: 'New Activity Content',
                lecturer: 'New Lecturer',
                start: 14.00,
                end: 16.00,
                day: 4.00
            };

            const response = await request(app)
                .post('/activities')
                .send(newActivityData);
            
            const { body, status } = response;

            expect(status).to.equal(201);
            expect(body).to.be.an('object');
            expect(body.title).to.equal(newActivityData.title);
            expect(body.content).to.equal(newActivityData.content);
            expect(body.lecturer).to.equal(newActivityData.lecturer);
            expect(body.start).to.equal(newActivityData.start);
            expect(body.end).to.equal(newActivityData.end);
            expect(body.day).to.equal(newActivityData.day);

            // Verificar que la actividad se haya creado correctamente en la base de datos
            const createdActivity = await Activitie.findOne({ where: { title: newActivityData.title } });
            expect(createdActivity).to.exist;
            expect(createdActivity.title).to.equal(newActivityData.title);
            expect(createdActivity.content).to.equal(newActivityData.content);
            expect(createdActivity.lecturer).to.equal(newActivityData.lecturer);
            expect(createdActivity.start).to.equal(newActivityData.start);
            expect(createdActivity.end).to.equal(newActivityData.end);
            expect(createdActivity.day).to.equal(newActivityData.day);
        });
    });
}).catch(err => {
    console.error('Error loading chai dynamically:', err);
    process.exit(1); // Salir con código de error en caso de falla
});
