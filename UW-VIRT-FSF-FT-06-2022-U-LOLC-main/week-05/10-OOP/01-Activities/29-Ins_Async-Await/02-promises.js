//to solve some of the problems with callbacks, promises were added to javaScript.  Promises are a constructed object that, on creation, requires a single parameter: a function that takes in two parameters: a resolve function to exectue if no errors exist, and a reject function to run if an error is thrown. for example: 
// const myPromise = new Promise((resolve,reject)=>{
//     const coinFlip = Math.floor(Math.random()*2);
//     if(!coinFlip){
//         reject(new Error("you lost the flip!"))
//     } else {
//         resolve(`Congrats! you won the flip!`)
//     }
// })

//each instance of the promise constructor includes a .then() methhod, which will take a function to execute if the promise resloves, and a .catch() method, which will take a function to execute if the promise rejects. This makes it easier to handle errors.

// myPromise.then(data=>{
//     console.log(data)
// }).catch(err=>{
//     console.log(err);
// })

//additionally, a common pattern is to return a promise object, which will allow you to chain promise enabled functions together, like this:

const promiseRoll20 = ()=>{
    return new Promise((resolve,reject)=>{
        const diceRoll = Math.floor(Math.random()*20)+1;
        if(diceRoll===1){
            reject(new Error("oof a natural 1! Womp womp womp"))
        } else {
            resolve(diceRoll)
        }
    })
}

// promiseRoll20().then(data=>{
//    console.log(`First roll result: ${data}`)
//     return promiseRoll20();
// }).then(data=>{
//    console.log(`Second roll result: ${data}`)
//     return promiseRoll20();
// }).then(data=>{
//    console.log(`Third roll result: ${data}`)
//     return promiseRoll20();
// }).then(data=>{
//    console.log(`Fourth roll result: ${data}`)
//     return promiseRoll20();
// }).then(data=>{
//    console.log(`Fifth roll result: ${data}`)
//     console.log("all rolls completed!")
// }).catch(err=>{
//     console.log("uh oh!")
//     console.log(err)
// })

//node how the single .catch() catches all errors!

//converting functions to promise enabled functions is difficult, but node includes a built in utility called promisify, to convert a function that uses a node style callback (ie, one that takes in error and data in that order), to a promise enaabled one.  Using fs as an example: 

const fs = require("fs");
const util = require("util")

const appendFilePromise = util.promisify(fs.appendFile);
const writeFilePromise = util.promisify(fs.writeFile);
const readFilePromise = util.promisify(fs.readFile);

writeFilePromise("diceLog.txt","").then(data=>{
    return promiseRoll20()
}).then(data=>{
    console.log(`First roll: ${data}`);
    return appendFilePromise("diceLog.txt",`First roll: ${data}\n`)
}).then(data=>{
    return promiseRoll20();
}).then(data=>{
    console.log(`Second roll: ${data}`)
    return appendFilePromise("diceLog.txt",`Second roll: ${data}\n`)
}).then(data=>{
    return promiseRoll20();
}).then(data=>{
    console.log(`Third roll: ${data}`)
    return appendFilePromise("diceLog.txt",`Third roll: ${data}\n`)
}).then(data=>{
    return promiseRoll20();
}).then(data=>{
    console.log(`Fourth roll: ${data}`)
    return appendFilePromise("diceLog.txt",`Fourth roll: ${data}\n`)
}).then(data=>{
    return promiseRoll20();
}).then(data=>{
    console.log(`Fifth roll: ${data}`)
    return appendFilePromise("diceLog.txt",`Fifth roll: ${data}\n`)
}).catch(err=>{
    console.log("all errors here!")
    console.log(err)
})
