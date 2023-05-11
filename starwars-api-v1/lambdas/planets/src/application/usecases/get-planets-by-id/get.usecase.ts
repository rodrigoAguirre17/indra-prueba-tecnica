import { IUseCase } from "@core/UseCase";
import { ReasonPhrases } from 'http-status-codes'
import { inject, injectable } from "inversify";
import { Planet, Planeta, IPlanetsDAO } from "../../ports/database/planets";
import {Types} from '../../../infrastructure/ioc/types';
import { Request } from "../../../../../../@core/controller";


@injectable()
export class GetPlanetsByIdUseCase implements IUseCase<any, any>{

    constructor(
        @inject(Types.planetsDAO) private _planetDAO : IPlanetsDAO,
    ){}
    
    async execute(req: Request<any>) {
        try {
            const {params} = req

            const response = await this._planetDAO.getPlanetsById(params.id);

            return { status: ReasonPhrases.OK.toLowerCase(), details: response }
        } catch (error) {
            throw (error)
        }
    }

}