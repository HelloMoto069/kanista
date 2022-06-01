const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const reqSignIn = require('../middleware/reqSignIn')



router.post('/createpost',reqSignIn, (req,res)=>{
    const {title, body} = req.body 
    if (!title || !body){
        return res.status(422).json({error: 'Bhai Ayese Kon Post Karta Hai..!!!'})
    }
    console.log(req.user)
    res.send("Post Ho Gaya..!!!")

    // const post = new Post({
    //     title,
    //     body,
    //     posted
    // })
})



module.exports = router