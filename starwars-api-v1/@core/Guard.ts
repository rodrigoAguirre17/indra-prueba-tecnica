import {Guard} from './controller/container-controller'

export function ValidateMethod(methods : string[]) : Guard{
    return async (event : any) => {
        const method = event.httpMethod;
        let initialObj = {
            pass: true,
            status: 200,
            data: null
        }
        const findMethod = methods.some(element => element.toUpperCase() === method);
        if(!findMethod){
            initialObj.pass = false;
            initialObj.status = 501;
            initialObj.data = {
                error: {
                    code: "NOT_IMPLEMENTED",
                    httpStatus: 501,
                    message: "Método no implementado",
                    details: ""
                },
                payload: null
            };
        }
        return initialObj;
    }
}