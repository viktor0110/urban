const Tattoos = require('../models/tattoo');

async function getAll() {
    return Tattoos.find({}).sort('imageUrl');
}

async function deleteById(id) {
    return Tattoos.findByIdAndDelete(id);
}


module.exports = {
    getAll,
    deleteById,
}