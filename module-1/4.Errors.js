// async function getData(){
//     undefined.find()
// }

// getData();
// console.log("Data!")


async function getData(){
   try {
    undefined.find();
   } catch (error) {
    errorHandler(error);
    console.log(error)
   }
}
getData();

function errorHandler(error){
    const {name, message, stack} = error;
    console.log(name);
    console.log(message);
    console.log(stack);

    // logger.error({
    //     name,
    //     message,
    //     stack,
    // })

    // console.log("Internal Server Error!")
}
console.log("Data!")


 
