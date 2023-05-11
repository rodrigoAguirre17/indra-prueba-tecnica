import { IUseCase } from "../../../../../@core/UseCase";
import { Container } from "inversify";
import { IPlanetsDAO } from "../../application/ports/database/planets";
import { GetPlanetsUseCase } from "../../application/usecases/get-planets/get.usecase";
import { GetPlanetsByIdUseCase } from "../../application/usecases/get-planets-by-id/get.usecase";
import { CreatePlanetsUseCase } from "../../application/usecases/create-planets/get.usecase";
import { GetPlanetsESUseCase } from "../../application/usecases/get-planets-es/get.usecase";
import { PlanetsDAO } from "../dao/planet";
import { Types } from "./types";

const container = new Container();
container.bind<IPlanetsDAO>(Types.planetsDAO).to(PlanetsDAO);
container.bind<IUseCase<any, any>>(Types.getPlanets).to(GetPlanetsUseCase);
container.bind<IUseCase<any, any>>(Types.getPlanetsById).to(GetPlanetsByIdUseCase);
container.bind<IUseCase<any, any>>(Types.createPlanets).to(CreatePlanetsUseCase);
container.bind<IUseCase<any, any>>(Types.getPlanetsES).to(GetPlanetsESUseCase);

export { container as Container };