import componentModel from '../models/componentModle.js'
import categoryModel from '../models/categoryModel.js'
import asyncHandler from "express-async-handler"
import fs from 'fs'


const component_add = asyncHandler(async (req, res) => {
    // console.log(req.body);
    const component = new componentModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        subCategory: req.body.subCategory,
        image: req.file.filename,
    })
    await component.save();
    const subCategoriesId = [req.body.category]
    if (req.body.subCategory) subCategoriesId.push(req.body.subCategory)
    await categoryModel.updateMany({ _id: { $in: subCategoriesId } }, { $inc: { count: 1 } });
    res.status(201).send({
        success: true,
        message: "Component added successfully"
    })
});

const component_list = asyncHandler(async (req, res) => {
    const component = await componentModel.find({}).populate([{ path: 'category', select: 'name -_id' }, { path: 'subCategory', select: 'name -_id' }]);
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

        const subCategoriesId = [component.category]
        if (component.subCategory) subCategoriesId.push(component.subCategory)
        await categoryModel.updateMany({ _id: { $in: subCategoriesId } }, { $inc: { count: -1 } });
        
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