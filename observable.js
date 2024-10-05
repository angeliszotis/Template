export class Observable {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(members => members !== observer);
    }

    notify(data) {
        this.observers.forEach(observer => observer.update(data));
    }
}