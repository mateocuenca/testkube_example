const pactum = require('pactum');

describe('EScenario de Ejemplo', () => {

    test('Prueba con datos validos', async () => {
        await pactum.spec()
            .get('http://node-service.default.svc.cluster.local:3200')
            .expectStatus(200);
    });
})