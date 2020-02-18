const express = require('express');
const ProductPropetries = require('../../models/ProductPropetries');
const { catalogValidationRules, validate } = require('../../middleware/validator');

const { Catalogs } = ProductPropetries;

const router = express.Router();

router.post('/', catalogValidationRules(), validate, async (req, res) => {
    const { catalog, images } = req.body;
    try {
        const newCatalog = new Catalogs({
            catalog,
            images,
        });
        await newCatalog.save();
        res.status(200).send(newCatalog);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.get('/', async (req, res) => {
    const { catalog } = req.query;
    let catalogs;
    try {
        if (catalog) {
            catalogs = await Catalogs.find({ catalog }).populate('categories');
        } else {
            catalogs = await Catalogs.find().populate('categories');
        }

        if (!catalogs) {
            throw { message: 'Catalog not found' };
        }
        res.status(200).send(catalogs);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const catalog = await Catalogs.findById(id);
        if (!catalog) {
            throw { message: 'Can not find catalog with such an ID' };
        }
        res.status(200).send(catalog);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;
