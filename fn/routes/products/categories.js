const express = require('express');
const ProductPropetries = require('../../models/ProductPropetries');
const { categoryValidationRules, validate } = require('../../middleware/validator');

const { Categories } = ProductPropetries;

const router = express.Router();

router.post('/', categoryValidationRules(), validate, async (req, res) => {
    const { category, images } = req.body;
    try {
        const newCategory = new Categories({
            category,
            images,
        });
        await newCategory.save();
        res.status(200).send(newCategory);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.get('/', async (req, res) => {
    const { category } = req.query;
    let categories;
    try {
        if (category) {
            categories = await Categories.find({ category });
        } else {
            categories = await Categories.find();
        }

        if (!categories) {
            throw { message: 'Category is not found' };
        }
        res.status(200).send(categories);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const category = await Categories.findById(id);
        if (!category) {
            throw { message: 'Can not find category with such an ID' };
        }
        res.status(200).send(category);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;
