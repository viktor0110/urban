const dataController = require('express').Router();
const Tattoos = require('../models/tattoo');

dataController.get('/', async (req, res) => {
    res.json(await Tattoos.find().sort('imageUrl').lean());
});

module.exports = dataController;