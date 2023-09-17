const dataController = require('express').Router();
const Tattoos = require('../models/tattoo');



dataController.get('/tattoos', async (req, res) => {
    res.json(await Tattoos.find().sort('imageUrl').lean());
});

dataController.post('/upload',
 async (req, res) => {

});

module.exports = dataController;