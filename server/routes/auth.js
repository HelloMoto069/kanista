const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model('User')
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../keys')
const reqSignIn = require('../middleware/reqSignIn')





router.post('/signup', (req, res) => {

    const { name, email, password } = req.body
    if (!email || !password || !name) {
        
        return res.status(422).json({ error: "Sab Bhar Bhai, Naam, e-Mail, Password" })
    }

    User.findOne({ email: email })
        .then((savedUser) => {
            if (savedUser) {
                return res.status(422).json({ error: "Bro, Ye e-Mail Pehle Se Use Hai" })
            }

            const user = new User({
                email ,
                password ,
                name 
            })

            user.save()
                .then(user => {
                    res.json({ message: "Sab Thik Hai Bhai..!!!" })
                })

                .catch(err => {
                    console.log(err)
                })

        })

        .catch(err => {
            console.log(err)
        })

})

router.post('/signin', (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(422).json({ error: 'Bhai Email Password Dono Daal..!!!' })
    }
    User.findOne({ email: email })
        .then(savedUser => {
            if (!savedUser) {
                return res.status(422).json({ email: 'Email ya Password Galat Hai Bhai..!!! Hack to nhi kr rha na kisi aur ka' })
            }
            else if (password === savedUser.password) {
                // return res.json({ message: 'Welcome to Kanista..!!!' })
                const token = jwt.sign({_id:savedUser._id}, JWT_SECRET)
                res.json({token})
            }
            else {
                return res.status(422).json({ email: 'Email ya Password Galat Hai Bhai..!!! Hack to nhi kr rha na kisi aur ka' })
            }
        })
        .catch(err=>{
            console.log(err)
        })
})

module.exports = router