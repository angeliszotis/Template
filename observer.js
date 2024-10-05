export class Observer {
    constructor(name, updateFunction) {
        this.name = name;
        this.updateFunction = updateFunction; // Custom update function
    }
    update(data) {
        // Call the custom update function with the provided data
        this.updateFunction(this.name, data);
    }
}