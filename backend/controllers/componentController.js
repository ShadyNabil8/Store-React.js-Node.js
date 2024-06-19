import componentModel from '../models/componentModle.js'
import asyncHandler from "express-async-handler"
import fs from 'fs'


const component_add = asyncHandler(async (req, res) => {
    const component = new componentModel({
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        image: req.file.filename,
    })
    await component.save();
    res.status(201).send({
        success: true,
        message: "component added successfully"
    })
});

const component_list = asyncHandler(async (req, res) => {
    const component = await componentModel.find({});
    res.status(200).send({
        success: true,
        data: component
    })
});

const component_delete = asyncHandler(async (req, res, next) => {
    const component = await componentModel.findById(req.body.id)
    if (component) {
        fs.unlinkSync(`./uploads/${component.image}`)
        await componentModel.findOneAndDelete(req.body.id);
    }
    else {
        const error = new Error('Component not found');
        error.status = 404; // Not Found
        return next(error);
    }
    res.status(200).send({
        success: true,
        data: component
    })
});

export default { component_add, component_list, component_delete }