const express = require('express');
const router = express.Router();
const {User,Project} = require('../models');

router.get("/",(req,res)=>{
    Project.findAll({
        include:[User]
    }).then(data=>{
        const hbsData = data.map(proj=>proj.toJSON())
        res.render("homepage",{
            projects:hbsData,
            logged_in:req.session.logged_in
        })
    })
})

router.get("/project/:id",(req,res)=>{
    Project.findByPk(req.params.id).then(projData=>{
        const hbsData = projData.toJSON();
        hbsData.logged_in=req.session.logged_in
        res.render("singleProj",hbsData)
    })
})

router.get("/login",(req,res)=>{
    if(req.session.logged_in){
        res.redirect("/profile")
    }
    res.render("login",{logged_in:false})
})

router.get("/profile",(req,res)=>{
    if(!req.session.logged_in) {
        res.redirect("/login")
    }
    User.findByPk(req.session.user_id,{
        include:[Project]
    }).then(userData=>{
        const hbsData = userData.toJSON();
        console.log(hbsData)
        hbsData.logged_in=true;
        res.render("profile",hbsData)
    })
})

module.exports = router;