import axios, {AxiosPromise} from 'axios';

interface hasId { 
    id?: number
}
export class Sync<T extends hasId> {

    constructor(public rootUrl: string){};

     fetch(id : number): AxiosPromise{
        return axios.get(`${this.rootUrl}/${id}`);
     }
 
      save(data: T): AxiosPromise{
         const id = data.id;
 
         if(id) {
             //put
            return axios.put(`${this.rootUrl}/${id}`, data);
         }else{
             //post
            return axios.post(`${this.rootUrl}`, data);
         }
 
     }
}