import 'reflect-metadata';
import {APIGatewayEvent, APIGatewayProxyResult} from 'aws-lambda';
import {ContainerController, InputProcess} from '../../../@core/controller';
import { StatusCodes } from 'http-status-codes'
import { Types, Container } from './infrastructure/ioc';

export const getPlanets = async function(event : APIGatewayEvent): Promise<APIGatewayProxyResult>{
    const container = new ContainerController()
                        .setInputMethod(InputProcess.BODY)
                        .setStatus(StatusCodes.OK)
                        .setContainerIoC(
                            Container,
                            Types.getPlanets
                        )
    return await container.call(event);
}

export const getPlanetsById = async function(event : APIGatewayEvent): Promise<APIGatewayProxyResult>{
    const container = new ContainerController()
                        .setInputMethod(InputProcess.REQUEST)
                        .setStatus(StatusCodes.OK)
                        .setContainerIoC(
                            Container,
                            Types.getPlanetsById
                        )
    return await container.call(event);
}

export const createPlanets = async function(event : APIGatewayEvent): Promise<APIGatewayProxyResult>{
    const container = new ContainerController()
                        .setInputMethod(InputProcess.BODY)
                        .setStatus(StatusCodes.OK)
                        .setContainerIoC(
                            Container,
                            Types.createPlanets
                        )
    return await container.call(event);
}

export const getPlanetsEs = async function(event : APIGatewayEvent): Promise<APIGatewayProxyResult>{
    const container = new ContainerController()
                        .setInputMethod(InputProcess.BODY)
                        .setStatus(StatusCodes.OK)
                        .setContainerIoC(
                            Container,
                            Types.getPlanetsES
                        )
    return await container.call(event);
}