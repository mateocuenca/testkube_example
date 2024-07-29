const pactum = require('pactum');

describe('Escenario de ejemplo', () => {

    test('Prueba con datos validos', async () => {
        await pactum.spec()
            .get('http://node-service.default.svc.cluster.local:3200')
            .expectStatus(200);
    });
})