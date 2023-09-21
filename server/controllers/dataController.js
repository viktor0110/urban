const dataController = require('express').Router();
const { isAdmin } = require('../middlewares/guards');
const { getAll, deleteById, addTattoo } = require('../services/tattoosService');
const { parseError } = require('../utils/parseError');


dataController.get('/tattoos', async (req, res) => {
    res.json(await getAll());
});

const fileTransfer = require('../services/multer');
const uploads = fileTransfer();

dataController.post('/upload', isAdmin(), uploads.array("files"),async (req, res) => {
    const imageUrl = '../' + req.files[0].destination + '/' + req.files[0].filename;
    const tattoo = await addTattoo(imageUrl);
    let user = JSON.parse(req.headers.user);
    console.log(`User with email: ${user.email} has added a new photo(file "${req.files[0].filename}")`);
    res.json({ status: "files received"}).end();
});

dataController.delete('/tattoos/:id', isAdmin(), async (req, res) => {
    try {
        
        const id = req.params.id;
        await deleteById(id);
        console.log(`image with id: ${id} has been deleted from user with email: ${JSON.parse(req.headers.user).email}.`);
        res.status(204).end();
    } catch(error) {
        const message = parseError(error);
        res.status(400).json({ message });
    }
});

module.exports = dataController;