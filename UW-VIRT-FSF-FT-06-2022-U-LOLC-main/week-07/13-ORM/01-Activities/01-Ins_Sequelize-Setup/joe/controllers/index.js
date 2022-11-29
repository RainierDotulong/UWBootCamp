const express = require('express');
const router = express.Router();
const kittenRoutes = require("./kittenController")

router.get("/",(req,res)=>{
    res.send("routing!")
})

router.use("/api/kittens",kittenRoutes)

module.exports = router;