const express = require("express");
const path = require("path")
const app = express();

const pets = require("./pets.json")

app.use(express.static("public"))

app.get("/",(req,res)=>{
    // res.send("<h1>Welcome to my site! Isnt it grand?</h1>")
    res.sendFile(path.join(__dirname,"./index.html"))
})

app.get("/pets",(req,res)=>{
    res.json(pets)
})

app.post("/pets",(req,res)=>{
    res.send("you made a post request!")
})

app.get("/pets/:petName",(req,res)=>{
    console.log(req);
    // res.json(req.params)
    let thisPet;
    pets.forEach(pet=>{
        if(pet.name.toLowerCase()===req.params.petName.toLowerCase()){
            thisPet = pet;
        }
    })
    res.json(thisPet)
})

app.listen(3000,()=>{
    console.log("listenin to port " + 3000)
})

