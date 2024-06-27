import componentModel from '../models/componentModle.js'
import categoryModel from '../models/categoryModel.js'
import asyncHandler from "express-async-handler"
import fs from 'fs'


const component_add = asyncHandler(async (req, res) => {
    const category = await categoryModel.findOne({ name: req.body.category });
    if (!category) {
        const newCategory = new categoryModel({
            name: req.body.category
        })
        await newCategory.save();
    }
    const component = new componentModel({
        name: req.body.name,
        price: req.body.price,
        category: category._id,
        subCategory: subCategory._id,
        image: req.file.filename,
    })
    await component.save();
    res.status(201).send({
        success: true,
        message: "Component added successfully"
    })
});

const component_list = asyncHandler(async (req, res) => {
    const component = await componentModel.find({}).populate({ path: 'category', select: 'name -_id' });
    res.status(200).send({
        success: true,
        data: component
    })
});

const component_delete = asyncHandler(async (req, res, next) => {
    const component = await componentModel.findById(req.body.id);
    if (component) {
        const imagePath = `./uploads/${component.image}`;

        // Check if the image exists before deleting
        if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath);
        } else {
            console.warn(`Image not found at path: ${imagePath}`);
        }

        await componentModel.findOneAndDelete({ _id: req.body.id });

        res.status(200).send({
            success: true,
            data: component
        });
    } else {
        const error = new Error('Component not found');
        error.status = 404; // Not Found
        return next(error);
    }
});

export default { component_add, component_list, component_delete }