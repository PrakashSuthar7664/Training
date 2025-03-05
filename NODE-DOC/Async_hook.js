const asyncHook = require("async_hooks");
// console.log(asyncHook);

const hook = asyncHook.createHook({
    init(asyncId ,type,triggerAsyncId , resource) {
        console.log(`INIT: ${asyncId}, Type: ${type}, Trigger: ${triggerAsyncId}`);
    } ,
    before(asyncId) {
        console.log(`BEFORE: ${asyncId}`);
    },
    after(asyncId){
        console.log(`AFTER: ${asyncId}`);
    },
    destroy(asyncId) {
        console.log(`DESTROY: ${asyncId}`);
    } ,
    // promiseResolve(asyncId) {}
})

// hook.enable();
// hook.disable();

console.log("Exucation async ID : ", asyncHook.executionAsyncId());
setTimeout(() => {
  console.log("inside the SetTimeOut : ", asyncHook.executionAsyncId());
}, 1000);

console.log("Exucation async ID of Parent : ", asyncHook.triggerAsyncId());

setTimeout(() => {
  console.log("inside the SetTimeOut : ", asyncHook.triggerAsyncId());
}, 1000);


