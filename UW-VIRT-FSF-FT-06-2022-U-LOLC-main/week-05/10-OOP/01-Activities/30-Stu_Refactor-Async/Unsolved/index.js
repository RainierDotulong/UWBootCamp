const axios = require("axios");
const inquirer = require("inquirer");
const fs = require("fs");


inquirer.prompt([
    {
        type:"input",
        name:"user",
        message:"who is this?"
    }
]).then(ans=>{
    axios.get(`https://manateejokesapi.herokuapp.com/manatees/random`).then(res=>{
        fs.readFile("log.json","utf-8",(err,data)=>{
            if(err){
                throw err;
            }
            const jokeArr = JSON.parse(data);
            const newItem = {
                user:ans.user,
                setup:res.data.setup,
                punchline:res.data.punchline
            }
            jokeArr.push(newItem);
            console.log(jokeArr);
            fs.writeFile("log.json",JSON.stringify(jokeArr,null,4),(err,data)=>{
                if(err){
                    throw err;
                }
                console.log("complete!")
            })
        })
    }).catch(err=>{
        console.log(err)
    })
}).catch(err=>{
    console.log(err);
})