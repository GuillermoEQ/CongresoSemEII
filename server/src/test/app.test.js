(async () => {
  const { expect } = await import('chai');
  const chaiHttp = (await import('chai-http')).default;
  const app = require('../app'); // Asegúrate de que esta ruta sea correcta

  const chai = require('chai');
  chai.use(chaiHttp);

  describe('API Tests', () => {

    it('Debería responder a la solicitud GET /', (done) => {
      chai.request(app)
        .get('/')
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });

    // Agrega más pruebas aquí

  });
})();
