// pending state

// resolved state

// rejected state

// creating promise
const myPromise = new Promise((resolve, reject) => {

    // const user = null;
    const user = { id: 1 };

    if (!user) {
        reject("Something went wrong");
    } else {
        setTimeout(() => {
            // resolve("Successfully got data");
            resolve({ name: 'John' });
        }, 1000);
    }

});

const userIds = [1, 2, 3, 4, 5];
let userData = [];

//multiple asynchronous prblm
// for (let i = 0; i < userIds.length; i++) {
//     const userId = userIds[i];
//     console.log(userId)
//     myPromise.then(res => {
//         userData.push(res);
//     })
// }
// console.log(userData)

//mutiple asynchronus prblm solution
for (let i = 0; i < userIds.length; i++) {
    const userId = userIds[i];
    console.log(userId)
    userData.push(myPromise)
}

Promise.all(userData).then(res=>{
    console.log(res);
})
// console.log(res);
console.log(userData)


//promise consume
myPromise
    .then(res => console.log("found in then : ", res))
    .catch(err => console.log("found in catch : ", err))

console.log("done");



