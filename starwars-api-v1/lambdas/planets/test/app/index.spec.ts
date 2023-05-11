import createEvent from '@serverless/event-mocks';
import { getPlanetsById, getPlanets} from '../../src';

describe('Integracion del Lambda para Planetas (StarWars)', () => {

    test(`/Planets -> Retorna un OK si trajo correctamente el listado de planetas.`, async () => {
        const event = createEvent(
            "aws:apiGateway",
            {
                path: '/planets',
                body: {},
                httpMethod: 'GET'
            } as any
        );
        const result = await getPlanets(event);
        expect(result.statusCode).toBe(200);
    });

    test(`/Planets/{id} -> Retorna un OK si trajo el planeta por su ID`, async () => {
        const event = createEvent(
            "aws:apiGateway",
            {
                path: '/planet',
                params: { id : 1 },
                body: {},
                httpMethod: 'GET'
            } as any
        );
        const result = await getPlanetsById(event);
        expect(result.statusCode).toBe(200);
    });
    
    
})