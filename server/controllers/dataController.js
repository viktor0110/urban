const dataController = require('express').Router();
const { isAdmin } = require('../middlewares/guards');
const { getAll, deleteById, addTattoo } = require('../services/tattoosService');
const { parseError } = require('../utils/parseError');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, "../src/assets/images/tattoos");
    },
    filename: function(req, file, callback) {
        const originalName = file.originalname;
        const typeOfFile = originalName.split('.')[1];

        const uploadedFile = "IMG0003" +`${(Math.random()* 10000000).toFixed(0).toString().slice(0,9)}.${typeOfFile}`;

        
        callback(null, file.filename = uploadedFile);
        
    }
})
const uploads = multer({storage: storage});

dataController.get('/tattoos', async (req, res) => {
    res.json(await getAll());
});

dataController.post('/upload', isAdmin() ,uploads.array("files"),async (req, res) => {

    const imageUrl = '../' + req.files[0].destination + '/' + req.files[0].filename;

    const tattoo = await addTattoo(imageUrl);

    console.log(`file "${req.files[0].filename}" received`);
    res.json({ status: "files received"}).end();
});

dataController.delete('/tattoos/:id', isAdmin(), async (req, res) => {
    try {
        await deleteById(req.params.id);
        console.log(`tattoo with id: ${req.params.id} has been deleted.`);
        res.status(204).end();
    } catch(error) {
        const message = parseError(error);
        res.status(400).json({ message });
    }
});

module.exports = dataController;