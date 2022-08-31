

console.log("Started to learn node.js");

setTimeout(()=>{
    console.log("Have to recap javascript")
}, 1000);

console.log("Forgetting react also");


//nested asynchronous (callback hell)
setTimeout(()=>{
    const user = {id : 1};
    setTimeout(()=>{
        const products = [{},{},{}];
        setTimeout(()=>{
            const prices = []
        },1000)
    },500)
},1000)