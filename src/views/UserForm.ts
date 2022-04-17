import { View } from '../View';
import { User, UserProps } from './../models/User';

export class UserForm extends View<User, UserProps> {
   

    eventsMap() : {[ key : string ] : () => void }{
        return {
            'click:.set-name': this.setName,
            'click:.set-age' : this.setAge,
            'click:.save'    : this.saveClick
        }
    }

    regionsMap(): {[key : string] : string}  {
        return {
            save : '.save',
            set_name : '.set-age'
        }
    }

    saveClick = () => {
        console.log(this.model);
        this.model.save();
    }

    setName = (): void => {
        const input = this.parent.querySelector('input');
        const name  = input!.value;
        if(name){
            this.model.set( {name} );
        }
    }

    setAge = () : void => {
        this.model.setRandomAge()
    }

    template(): string{
        return `
            <div>
                <h1>User Details</h1>
                <div>UserName : ${this.model.get('name')}</div>
                <div>age : ${this.model.get('age')}</div>
                <input placeholder="${this.model.get('name')}" />
                <button class="set-name">set new name</button>
                <button class="set-age">set random age</button>
                <button class="save">save</button>
            </div>
        `
    }

    
   
}