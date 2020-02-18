const express = require('express');
const Colors = require('../../models/Color');
const { colorValidationRules, validate } = require('../../middleware/validator');

const router = express.Router();

router.post('/', colorValidationRules(), validate, async (req, res) => {
    const { color, images } = req.body;
    try {
        const newColor = new Colors({
            color,
            images,
        });
        await newColor.save();
        res.status(200).send(newColor);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.get('/', async (req, res) => {
    const { color } = req.query;
    let colors;
    try {
        if (color) {
            colors = await Colors.find({ color });
        } else {
            colors = await Colors.find();
        }

        if (!colors) {
            throw { message: 'Color is not found' };
        }
        res.status(200).send(colors);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const color = await Colors.findById(id);
        if (!color) {
            throw { message: 'Can not find color with such an ID' };
        }
        res.status(200).send(color);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;
