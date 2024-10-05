import {Observable} from "./observable.js";
import {Observer} from "./observer.js";

// const observer1   = new Observer('observer1');
// const observer2   = new Observer('observer2');
const observable= new Observable();


let elem = document.querySelector("p");
let sq = elem.getBoundingClientRect();

const customUpdateFunction1 = (name, data) => {
    console.log(`${name} received data with custom function: ${data}`);
};

const customUpdateFunction2 = (name, data) => {
    alert(`${name} received an alert with data: ${data}`);
};

const observer1 = new Observer('Observer 1', customUpdateFunction1);
const observer2 = new Observer('Observer 2', customUpdateFunction2);

observable.subscribe(observer1)
observable.subscribe(observer2)
document.addEventListener('mousemove', function(event) {
    let mouseY= event.clientY;
    let elemBottom=sq.bottom
    if( mouseY >= elemBottom + 100 ) {
        observable.notify('kronk');
    }
});
setTimeout(() => {
    observable.unsubscribe(observer1)
    console.log('unsubscribe')
},10000)