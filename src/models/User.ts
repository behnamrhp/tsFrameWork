import { AxiosResponse } from 'axios';
import { Attributes } from './Attributes';
import { Events } from './Events';
import { Sync } from './Sync';
import { Model } from './model';
import { Collection } from './collection';

export interface UserProps {
    id   ?: number;
    name ?: string;
    age  ?: number;
}

const rootUrl = 'http://localhost:3000/users';


export class User extends Model<UserProps> {
    
    static buildUser(attrs : UserProps): User {
        return new User(
            new Attributes<UserProps>(attrs),
            new Events(),
            new Sync<UserProps>(rootUrl)
        )
    }
   
    static buildUserCollection(){
        return new Collection<User, UserProps>(
            rootUrl,
            (json: UserProps) => User.buildUser(json)
            );
    }

    setRandomAge(): void {
        const age = Math.round(Math.random()*100);
        this.set({age});
    }

    
}