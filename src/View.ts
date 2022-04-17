import { Model } from './models/model';

export abstract class View <T extends Model<k>, k>{
    regions : { [key: string] : Element } = {};

    constructor(public parent : Element, public model: T ){
        this.bindModel();
    }

    abstract template()  : string

    regionsMap(): { [key : string] : string }{
        return {}
    }

    eventsMap() : { [key : string] : () => void} {
        return {}
    };

    bindModel(){
        this.model.on('change', (): any => {
            this.render();
        }); 
    }
  
    onButtonClick():void {
        console.log('hi');
    }

    bindEvents(fragment : DocumentFragment){
        const eventsmap = this.eventsMap();

        for( let eventKey in eventsmap) {
            const [eventName , selector] = eventKey.split(':');

            fragment.querySelectorAll(selector).forEach(el => {
                el.addEventListener(eventName, eventsmap[eventKey])
            })

        }
    }

    mapRegions(fragment: DocumentFragment){
        const regionsMap = this.regionsMap();

        for(let key in regionsMap){
            const selector = regionsMap[key];
            const element  = fragment.querySelector(selector);
            if(!element) return;
            this.regions[key] = element;
        }
    }

    render():void {
        this.parent.innerHTML = '';
        const templateElement = document.createElement('template');
        templateElement.innerHTML = this.template();
        this.bindEvents(templateElement.content);
        this.mapRegions(templateElement.content);    

        this.parent.append(templateElement.content);
        console.log(this);
    }

 

}