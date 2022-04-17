import { UserProps } from "./User";

export class Attributes<T> {
    constructor(private data : T){}

    get = <k extends keyof T>(propName: k): T[k] =>  {
        return this.data[propName]
    }

    set = (update : T) => {
        this.data = {...this.data, ...update};
    }

    getAll() : T{
        return this.data;
    }
}
