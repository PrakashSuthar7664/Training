const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

// eventEmitter.on("greet", () => {
//   console.log("Hello");
// });

// eventEmitter.emit('greet')

// eventEmitter.once("greet", () => {
//     console.log("Hello once");
// });

// eventEmitter.emit("greet")
// eventEmitter.emit("greet")

// function greet() {
//   console.log("hello");
// }

// eventEmitter.on('greet' , greet) ;
// eventEmitter.removeListener('greet' , greet)
// eventEmitter.emit('greet')

eventEmitter.on("greet", () => console.log("helloWorld"));
eventEmitter.on("greet", () => console.log("helloWorld"));
eventEmitter.on("greet", () => console.log("helloWorld"));
eventEmitter.on("greet", () => console.log("helloWorld"));
eventEmitter.on("greet", () => console.log("helloWorld"));
eventEmitter.on("bye", () => console.log("byee"));

// eventEmitter.removeAllListeners("greet");

// eventEmitter.emit("greet");
// eventEmitter.emit("bye");
console.log(eventEmitter.listenerCount('greet')) //5 

    
