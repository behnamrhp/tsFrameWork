import { AxiosPromise, AxiosResponse } from 'axios';

type HasId = {
    id ?: number;
    name ?: string;
}
interface ModelAttributes<T> {
    set(update : T) : void;
    get<k extends keyof T>(key : k) : T[k];
    getAll():T
}

interface Sync<T> {
    fetch(id : number) : AxiosPromise;
    save(data : T) : AxiosPromise;
}

interface ModelEvents {
    on(eventName: string, callback: () =>{}): void;
    trigger(eventName : string):void;
}

export class Model<T extends HasId> {

    constructor(
        private attributes : ModelAttributes<T>,
        private event      : ModelEvents,
        private sync       : Sync<T>
    ){}

    get on() {
        return this.event.on;
    }

    get trigger(){
        return this.event.trigger
    }
    
    get get(){
        return this.attributes.get
    }

    set(update: T){
        this.attributes.set(update);
        this.trigger('change');
    }

    fetch(){
        const id = this.get('id');

        if(typeof id !== 'number'){
            throw new Error('Cannot fetch without an id')
        }

        this.sync.fetch(id).then(
            (response : AxiosResponse): void => {
                this.set(response.data);
            }
        )
    }

    save =(): void => {
        this.sync.save(this.attributes.getAll()).then(
            (response : AxiosResponse) => {
                this.trigger('save')
            })
            .catch(() => {
                this.trigger('error');
            });
    }

}