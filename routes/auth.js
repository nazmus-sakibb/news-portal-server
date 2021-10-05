const router = require('express').Router();
const User = require('../models/User');


// REGISTER
router.post('/register', async (req, res) => {
    try {
        const newUser = new User({
            username: req.user.username,
            email: req.user.email,
            password: req.user.password
        });

        const user = await newUser.save();
        res.status(200).json(user); 
    } catch(err) {
        res.status(500).json(err);
    }
})


// LOGIN