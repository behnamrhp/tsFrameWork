type Callback = () => void;

export class Events {
    event: { [key : string]: Callback[]} = {};

    on(eventName: string, callback: Callback){
        const handlers = this.event[eventName] || [];
        handlers.push(callback);
        this.event[eventName] = handlers;
    }

    trigger(eventName: string){
        const handlers = this.event[eventName];
        if(!handlers) return;

        handlers.forEach(handler => {
            handler();
        })
    }
}