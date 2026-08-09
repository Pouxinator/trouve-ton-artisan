const { Category, Specialty } = require("../models");

exports.getAllCategories = async (req, res) => {

    try {

        const categories = await Category.findAll({
            include: Specialty
        });

        res.json(categories);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};