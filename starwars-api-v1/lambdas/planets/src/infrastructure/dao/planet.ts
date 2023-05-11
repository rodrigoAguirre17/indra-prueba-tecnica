import { injectable } from "inversify";
import { IPlanetsDAO, Planet, Planeta, PlanetaDB } from "../../application/ports/database/planets";
import { DynamoDB} from "aws-sdk"
import { v4 as uuid } from 'uuid';
import fetch from 'cross-fetch';


@injectable()
export class PlanetsDAO implements IPlanetsDAO{

    private static dbClient = new DynamoDB.DocumentClient();
    
    async getPlanets(): Promise<Planeta[]> {
        const result: any           = await fetch(`${process.env.endpoint}/planets`);
        const jsonObj: any          = await result.json();
        const planets: Planeta[] = jsonObj.results.map((planet: Planet)=> this.transformPlanet(planet));

        return planets;
    }

    async getPlanetsById(id: number): Promise<Planeta> {
        const result: any        = await fetch(`${process.env.endpoint}/planets/${id}/`);
        const jsonObj: any       = await result.json();
        const planeta: Planeta = this.transformPlanet(jsonObj);

        return planeta;
    }

    async createPlanet(planeta: Planeta): Promise<string> {
        return new Promise<string>(async (resolve, reject)=>{
            try {
                let planeta_item : any = planeta;
                planeta_item.planetaId = uuid()
                const params = {
                    TableName: process.env.PLANET_TABLE,
                    Item: planeta_item,
                    ReturnValue: 'ALL_OLD'
                };

                await PlanetsDAO.dbClient.put(params).promise();

                resolve('Planeta creado exitosamente.')
            } catch (error) {
                reject('No se pudo crear el planeta, debido al error: ' + error)
            }
            
        })
    }

    async getPlanetsES(): Promise<PlanetaDB[]> {
        return new Promise<PlanetaDB[]>(async (resolve, reject) => {
            try {

                const params = {
                    TableName: process.env.PLANET_TABLE
                }

                const result = await PlanetsDAO.dbClient.scan(params).promise();

                const response: PlanetaDB[] = result.Items as PlanetaDB[];
                
                resolve(response)
            } catch (error) {
                reject('Ocurrio un error al consultar la información: ' + error)
            }
        })
    }

    transformPlanet(planet : Planet) : Planeta {
        return {
            clima: planet.climate,
            creado: planet.created,
            diametro: planet.diameter,
            editado: planet.edited,
            gravedad: planet.gravity,
            nombre : planet.name,
            peliculas        : planet.films,
            periodo_orbital  : planet.orbital_period,
            periodo_rotacion : planet.rotation_period,
            poblacion        : planet.population,
            residentes : planet.residents,
            superficie_agua: planet.surface_water,
            terreno: planet.terrain,
            url: planet.url
        }
    }

    
}
