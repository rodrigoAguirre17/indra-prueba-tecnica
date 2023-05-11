export abstract class BaseController {
  // or even private

  protected abstract executeImpl (): Promise<void | any>;
  protected request: any;

  public execute (request: any): void {
    this.request = request;
    
    this.executeImpl();
  }

  public static jsonResponse (code: number, message: string): JsonResponse {
    return { code, message }
  }

  public ok<T> (dto?: T) {
    if (!!dto) {
      return BaseController.jsonResponse(200, JSON.stringify(dto));
    } else {
      return BaseController.jsonResponse(200, 'Ok');
    }
  }

  public created (message?: string): JsonResponse {
    return BaseController.jsonResponse(201, message ? message : 'Created');
  }

  public clientError (message?: string): JsonResponse {
    return BaseController.jsonResponse(400, message ? message : 'Unauthorized');
  }

  public unauthorized (message?: string): JsonResponse {
    return BaseController.jsonResponse(401, message ? message : 'Unauthorized');
  }

  public paymentRequired (message?: string): JsonResponse {
    return BaseController.jsonResponse(402, message ? message : 'Payment required');
  }

  public forbidden (message?: string): JsonResponse {
    return BaseController.jsonResponse(403, message ? message : 'Forbidden');
  }

  public notFound (message?: string): JsonResponse {
    return BaseController.jsonResponse(404, message ? message : 'Not found');
  }

  public conflict (message?: string): JsonResponse {
    return BaseController.jsonResponse(409, message ? message : 'Conflict');
  }

  public tooMany (message?: string): JsonResponse {
    return BaseController.jsonResponse(429, message ? message : 'Too many requests');
  }

  public todo (): JsonResponse {
    return BaseController.jsonResponse(400, 'TODO');
  }

  public fail (message: Error | string) {
    console.log(message);
    return BaseController.jsonResponse(500, message ? message.toString() : 'An Error ocurred')
  }
}

export interface JsonResponse {
  code: number;
  message: string;
}