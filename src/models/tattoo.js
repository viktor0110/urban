const { Schema, model, Types } = require('mongoose');

const tattooSchema = new Schema({
    name: { type: String, required: true},
    date: { type: String, required: true},
    imageUrl: { type: String, required: true},
});

const tattoo = model('Tattoo', tattooSchema);

module.exports = tattoo;