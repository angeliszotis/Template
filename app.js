import {Observable} from "./observable.js";
export const app = {

    testNotify(text){
        console.log('app ini test observer '+ text);
        app.testVar=prompt('Enter a number between 1 and 10:');
        return '';

    },
    testObserver:new Observable()
}
