export enum TopicRequest{
    TEMPERATURE,
    USAGE,
    ALARM_FIRE,
    LEVEL_CO2
}

export abstract class RouterTopic{

    private static _routes : Record<TopicRequest, (event : any, ctx : any) => Promise<void>> = {} as any;

    private static find(event : any){
        const {A, ST} = event.payload;
        if(A === 2 || (A === 1 && ST === 1)){
            return TopicRequest.USAGE;
        }else if(A === 1 && (ST === 2 || ST === 3)){
            return TopicRequest.TEMPERATURE;
        }else if(A === 1 && (ST === 4)){
            return TopicRequest.LEVEL_CO2;
        }else if(A === 1 && (ST === 6 || ST === 7)){
            return TopicRequest.ALARM_FIRE;
        }
    }

    static add(topic : TopicRequest, fn : (event : any, ctx : any) => Promise<void>){
        this._routes[topic] = fn;
    }

    static async process(event : any, ctx : any){
        const body = JSON.parse(event);
        const topicType = this.find(body);
        if(this._routes[topicType]){
            await this._routes[topicType](body, ctx);
        }
    }

}