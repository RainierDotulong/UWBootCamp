const express = require('express');
const router = express.Router();
const Kitten = require('../models/kitten');

router.get("/",async (req,res)=>{
    try {
        const kittens = await Kitten.findAll()
        res.status(200).json(kittens)
    } catch (err) {
        res.status(500).json({
            msg:"internal server error"
        })
    }
})

// router.post("/",(req,res)=>{
//     Kitten.create({
//         name:req.body.name,
//         color:req.body.color,
//         isCute:req.body.isCute,
//         nickname:req.body.nickname
//     }).then(newKitten=>{
//         res.status(201).json(newKitten)
//     }).catch(err=>{
//         res.status(500).json({
//             msg:"internal server error"
//         })
//     })
// })
router.post("/",async (req,res)=>{
    try{
        const newKitten = await Kitten.create({
            name:req.body.name,
            color:req.body.color,
            isCute:req.body.isCute,
            nickname:req.body.nickname
        })
        res.status(201).json(newKitten)
    }catch(err){
        console.log(err)
        res.status(500).json({
            msg:"internal server error",
            err
        })
    }
})

router.get("/:id",(req,res)=>{
    Kitten.findByPk(req.params.id).then(kitten=>{
        if(!kitten){
            return res.status(404).json({msg:"no such kitten!"})
        }
        res.json(kitten)
    }).catch(err=>{
        res.status(500).json({
            msg:"internal server error"
        })
    })
})
router.put("/:id",(req,res)=>{
    Kitten.update({
            name:req.body.name,
            color:req.body.color,
            isCute:req.body.isCute,
            nickname:req.body.nickname
    },
        {
        where:{
            id:req.params.id
        }
        }).then(kitten=>{
            if(!kitten[0]){
                return res.status(404).json({msg:"no such kitten or no change made!"})
            }
        res.json(kitten)
    }).catch(err=>{
        res.status(500).json({
            msg:"internal server error"
        })
    })
})
router.delete("/:id",(req,res)=>{
    Kitten.destroy({
        where:{
            id:req.params.id
        }
        }).then(kitten=>{
            if(!kitten){
                return res.status(404).json({msg:"no such kitten!"})
            }
        res.json(kitten)
    }).catch(err=>{
        res.status(500).json({
            msg:"internal server error"
        })
    })
})

module.exports = router;