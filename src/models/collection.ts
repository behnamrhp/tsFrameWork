import axios from "axios";
import { Events } from "./Events";
import { AxiosResponse } from 'axios';


export class Collection<T, k> {
    model   : T[] = [];
    event  : Events = new Events();
    
    constructor(
        public rootUrl: string,
        public deserialize : (json : k) => T
        ){
        
    };

    get on(){
        return this.event.on;
    }

    get trigger(){
        return this.event.trigger;
    }

    fetch  ():void {
        axios.get(this.rootUrl).then((response : AxiosResponse) => {
            response.data.forEach((value: k) => {
                this.model.push(this.deserialize(value))
            });
            
            this.trigger('change');

        })
        
    }

}