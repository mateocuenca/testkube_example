const pactum = require('pactum');

describe('Escenario de ejemplo', () => {

    test('Prueba con datos validos', async () => {
        await pactum.spec()
            .get('http://node-service:3200')
            .expectStatus(200);
    });
})