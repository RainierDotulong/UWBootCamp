// the most recent way to handle asynchronous code is javascript are the async/await keywords, added in es6.  If you have a method that is promise enabled, you can tell the program to wait for exuction to complete, thereby forcing your code to run synchrounously.  For example, here is the diceRoll promise from before, rolling 2 dice:

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

// promiseRoll20().then(roll=>{
//     console.log(roll)
//     return promiseRoll20()
// }).then(roll=>{
//     console.log(roll)
// }).catch(err=>{
//     console.log(err);
// })


//and the same function, using modern async/await syntax:

//note: the await keyword can only be used inside of an async function:

const asyncRoll = async ()=>{
    const first = await promiseRoll20();
    const second = await promiseRoll20();
    console.log(`First roll: ${first}`)
    console.log(`Second roll: ${second}`)
}

// asyncRoll()

//while this works fine, we are not handling errors. we should use a try/catch block for that, like so:

const asyncRollTryCatch = async ()=>{
    try{
        const first = await promiseRoll20();
        const second = await promiseRoll20();
        console.log(`First roll: ${first}`)
        console.log(`Second roll: ${second}`)
    } catch(err){
        console.log(err);
    }
}

asyncRollTryCatch()
