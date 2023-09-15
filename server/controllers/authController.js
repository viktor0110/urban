const { register } = require('../services/userService');

const authController = require('express').Router();

authController.post('/register', async (req, res) => {

    try {

       const token = await register(req.body.username, req.body.password);
       res.json(token);
    } catch(error) {
        res.status(400).json({
            message: error.message
        })
    }

});

module.exports = authController;
