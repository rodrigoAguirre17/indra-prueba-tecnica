export interface IPlanetsDAO{
    getPlanets() : Promise<Planeta[]>;
    getPlanetsById(id: number): Promise<Planeta>;
    createPlanet(planeta: Planeta) : Promise<string>;
    getPlanetsES() : Promise<PlanetaDB[]>;
}

export type Planet = {
    climate: string,
    created: string,
    diameter: string,
    edited: string,
    films: string[],
    gravity: string,
    name: string,
    orbital_period: string,
    population: string,
    residents: string[],
    rotation_period: string,
    surface_water: string,
    terrain: string,
    url: string
}
export type Planeta = {
    clima: string,
    creado: string,
    diametro: string,
    editado: string,
    peliculas: string[],
    gravedad: string,
    nombre: string,
    periodo_orbital: string,
    poblacion: string,
    residentes: string[],
    periodo_rotacion: string,
    superficie_agua: string,
    terreno: string,
    url:string
}

export type PlanetaDB = {
    clima: string,
    creado: string,
    diametro: string,
    editado: string,
    peliculas: string[],
    gravedad: string,
    nombre: string,
    periodo_orbital: string,
    poblacion: string,
    residentes: string[],
    periodo_rotacion: string,
    superficie_agua: string,
    terreno: string,
    url: string,
    planetaId: string
}