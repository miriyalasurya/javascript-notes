//PROMISE 1
const promiseOne = new Promise(function (resolve, reject) {
    //Do some Async task
    //DB calls, Cryptography, network
    setTimeout(function () {
        console.log('Async task is completed');
        resolve();
    }, 1000)
});
promiseOne.then(function () {
    console.log("Promise Consumed");
})

//PROMISE 2
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async Task 2');
        resolve()
    }, 1000)
}).then(function () {
    console.log('Async 2 Resolved');
})

//PROMISE 3
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "surya", email: "surya@hotmail.com" })
    }, 1000)
})
promiseThree.then(function (user) {
    console.log(user);
})

//PROMISE 4
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ username: "Surya", email: "surya@hotmail.com" });
        } else {
            reject('ERROR: Something Went Wrong');
        }
    }, 2000)
})
promiseFour
    .then((user) => {
        console.log(user);
        return user.username;
    })
    .then((username) => {
        console.log(username);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(() => console.log("The promise is either resolved or rejected")
    )

//PROMISE 5
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ username: "surya", email: "surya@hotmail.com" });
        } else {
            reject("ERROR: SOMETHING WENT WRONG NIGGA");
        }
    }, 1000)
})
async function consumePromiseFive() {
    try {
        const response = await promiseFive;   //PromiseFive is an object so promiseFive() shouldn't be used
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json(); // this takes time hence used await here
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error)
    )