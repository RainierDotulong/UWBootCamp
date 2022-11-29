require("dotenv").config();
const sequelize = require('./config/connection');

const Kitten = require("./models/kitten.js")
const Octopus = require("./models/octopus.js")


sequelize.sync({force:false}).then(() => {
        //CREATE
        // Kitten.create({
        //     name:"Amazon",
        //     color:"Calico",
        //     nickname:"Zon"
        // }).then(data=>{
        //     console.log(data);
        // })
        // Octopus.create({
        //     name:"Amazon",
        // }).then(data=>{
        //     console.log(data);
        // })

        
        //READ
        Kitten.findAll().then(data=>{
            console.log(data)
        })
        Kitten.findByPk(2).then(data=>{
            console.log(data)
        })

        //UPDATE
        Kitten.update({
            name:"dotCom",
            color:"black",
            nickName:"commie"
        },{
            where:{
                id:3
            }
        })
        //DELETE
        Kitten.destroy({
            where:{
                id:2
            }
        }).then(data=>{
            console.log(data)
        })

  });
  