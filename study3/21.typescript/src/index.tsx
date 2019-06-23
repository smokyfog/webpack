import * as _ from "lodash";

class Greeter {
    greeting : string;
    constructor(message : string) {
        this.greeting = message;
    }
    greet() {
        return _.join(["hello,", ' ', this.greeting])
        // return "hello, " + this.greeting;
    }
}

let greeter = new    Greeter("world");

let button = document.createElement("button");
// button.textContent = "say hello";
// button.onclick = function() {
    alert(greeter.greet())
// }

document.body.appendChild(button)