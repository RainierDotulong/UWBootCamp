const fs=require('fs');

//1. callbacks

//callback functions are functions passed to another function as arguments.  Typically these are used to handle asynchronous actions.  Examples of methods that require a call back function include setInterval, addEventListener, and fs.writeFile, but you can create your own callbacks as well.


//function that takes in some data and a callbackt to execute, then executes callback with the data
// const myFirstCb = (input, cbFunc) => {
//     cbFunc(input)
// }

// myFirstCb("potato", data => {
//     console.log(data)
// })

// myFirstCb([1, 2, 3], data => {
//     console.log(data.map(num => num * 2))
// })


//this one does the same thing, but after a 2 second delay
// const delayedCallback = (input, cb) => {
//     setTimeout(() => {
//         cb(input)
//     }, 2000);
// }

// delayedCallback("joe", data => {
//     console.log(`welcome, ${data}`)
// })

// delayedCallback([1,2,3], data => {
//     console.log(data.map(num=>num*3))
// })

//Built in node functions that utilize callbacks, like fs, always take in two parameters: first the error, if it exists, then the data. 

//function that, if successful, returns a random number from 1-100. 
// const myNodeStyleCb = cb=>{
//     const coinFlip = Math.floor(Math.random()*2);
//     if(!coinFlip){
//         cb(new Error("you lost the flip!"),null)
//     } else {
//         cb(null,Math.floor(Math.random()*100)+1)
//     }
// }

// myNodeStyleCb((err,data)=>{
//     if(err){
//         throw err
//     } else {
//         console.log(`Your lucky number is ${data}`)
//     }
// })

//callbacks are difficult to run in sequence, and easily reuslt in deeply nested code, or what we call "Callback Hell".  For example, using readFile and writeFile
fs.writeFile("callbackLog.txt",`First random number: ${Math.floor(Math.random()*10)}\n`,(err,data)=>{
    if(err){
        throw err
    } else {
        fs.readFile("callbackLog.txt","utf-8",(err,data)=>{
            if(err){
                throw err;
            }
            else {
                console.log("First loop:")
                console.log(data);   
                console.log("==========")
                fs.writeFile("callbackLog.txt",`${data}Second random number: ${Math.floor(Math.random()*10)}\n`,(err,data)=>{
                    if(err){
                        throw err
                    } else {
                        fs.readFile("callbackLog.txt","utf-8",(err,data)=>{
                            if(err){
                                throw err;
                            }
                            else {
                                console.log("Second loop:")
                                console.log(data);   
                                console.log("==========")
                                fs.writeFile("callbackLog.txt",`${data}Third random number: ${Math.floor(Math.random()*10)}\n`,(err,data)=>{
                                    if(err){
                                        throw err
                                    } else {
                                        fs.readFile("callbackLog.txt","utf-8",(err,data)=>{
                                            if(err){
                                                throw err;
                                            }
                                            else {
                                                console.log("Third loop:")
                                                console.log(data);   
                                                console.log("==========")
                                                fs.writeFile("callbackLog.txt",`${data}Fourth random number: ${Math.floor(Math.random()*10)}\n`,(err,data)=>{
                                                    if(err){
                                                        throw err
                                                    } else {
                                                        fs.readFile("callbackLog.txt","utf-8",(err,data)=>{
                                                            if(err){
                                                                throw err;
                                                            }
                                                            else {
                                                                console.log("Fourth loop:")
                                                                console.log(data);   
                                                                console.log("==========")
                                                                fs.writeFile("callbackLog.txt",`${data}Fifth random number: ${Math.floor(Math.random()*10)}\n`,(err,data)=>{
                                                                    if(err){
                                                                        throw err
                                                                    } else {
                                                                        fs.readFile("callbackLog.txt","utf-8",(err,data)=>{
                                                                            if(err){
                                                                                throw err;
                                                                            }
                                                                            else {
                                                                                console.log("Fifth loop:")
                                                                                console.log(data);   
                                                                                console.log("==========")
                                
                                                                            }
                                                                        })
                                                                    }
                                                                })
                                                            }
                                                        })
                                                    }
                                                })
                                            }
                                        })
                                    }
                                }) 
                            }
                        })
                    }
                })
            }
        })
    }
})
