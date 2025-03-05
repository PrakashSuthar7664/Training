const { AsyncLocalStorage, AsyncResource } = require("async_hooks");
const asyncLocalStorage = new AsyncLocalStorage();
// asyncLocalStorage.disable()
// const store = { id: 1 };
const store = new Map() ; 
// const store = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);

// asyncLocalStorage.enterWith(store);

// console.log(asyncLocalStorage.getStore());

// asyncLocalStorage.run(store , ()=>{
//    asyncLocalStorage.getStore().set('user', 'Alice') ;
//    console.log(asyncLocalStorage.getStore().get('user'))
// })


// const resource = new AsyncResource('ExampleTask') ; 


// class MyasyncTask extends AsyncResource {
//     constructor(){
//         super("MyasyncTask") ;
//     }

//     runTask(c){
//         this.runInAsyncScope(c)
//     }
// }

// const task = new MyasyncTask() ; 
// task.runTask(()=>{
//     console.log('Running inside async context');
// })

// resource.runInAsyncScope(()=>{
//     console.log("Async Working");
    
// })
// function logMessage() {
//     console.log('Async function bound ho gaya');
// }
// let boudFunction = resource.bind(logMessage)
// console.log(boudFunction());


// resource.emitDestroy(); // Resource cleanup ke liye useful hai
// console.log(resource.asyncId());

// console.log(resource.triggerAsyncId());





