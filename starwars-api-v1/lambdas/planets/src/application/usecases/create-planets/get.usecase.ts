import { IUseCase } from "@core/UseCase";
import { ReasonPhrases } from 'http-status-codes'
import { inject, injectable } from "inversify";
import { IPlanetsDAO } from "../../ports/database/planets";
import {Types} from '../../../infrastructure/ioc/types';
import { Request } from "../../../../../../@core/controller";
import { Planeta as PlanetaReq } from "./get.input"


@injectable()
export class CreatePlanetsUseCase implements IUseCase<any, any>{

    constructor(
        @inject(Types.planetsDAO) private _planetDAO : IPlanetsDAO,
    ){}
    
    async execute(req: Request<PlanetaReq>) {
        try {
            const {input} = req
            const response = await this._planetDAO.createPlanet(input);

            return { status: ReasonPhrases.OK.toLowerCase(), details: response }
        } catch (error) {
            throw (error)
        }
    }

}