myProgram = new Promise(  (resolve, reject) => {
    success = 10; 
    if ( success % 2 == 0) {
        resolve("Even!");
    } else {
        reject("Odd.");
    }
});

// myProgram
//     .then((message) => {
//         console.log(message);
//     })
//     .catch((error) => {
//         console.error(error);
//     });

// async : is used to declare a function as asynchronous when you declare a function as a async function 
// await : is used to wait for a Promise to resolve or reject to get its result before proceeding further in the code. 
// it can only be used inside an async function.
// async function checkNumber() {
    // try {
        // const message = await myProgram;
//         console.log(message);
//     } catch (error) {
//         console.error(error);
//     }
// }

// checkNumber();

// function waitOneSecond() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("One second has passed");
//         }, 1000);
//     });
// }
// async function DoTask() {
//     const result = await waitOneSecond();
//     console.log(result);
// }
// DoTask();

// function waitTwoSeconds() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Two seconds have passed");
//         }, 2000);
//     });
// }

// async function ConnectMongo() {
//     try {
//         const mongoose = require('mongoose');
//         await mongoose.connect('mongodb://localhost:27017/mydatabase', {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });
//         console.log("Connected to MongoDB successfully!");
//     } catch (error) {
//         console.error("Error connecting to MongoDB:", error);
//     }
// }
// ConnectMongo();

function checkNumber(){
    return new Promise((resolve, reject) => {
        const number = 15;
        if (number % 2 === 0) {
            resolve("The number is even.");
        } else {
            reject("The number is odd.");
        }
    });
}
async function evaluateNumber() {
    try {
        const message = await checkNumber();
        console.log(message);
    } catch (error) {
        console.error(error);
    }
}
evaluateNumber();