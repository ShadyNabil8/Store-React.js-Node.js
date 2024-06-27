import categoryModel from '../models/categoryModel.js'
import asyncHandler from "express-async-handler"

const category_list = asyncHandler(async (req, res) => {
    const category = await categoryModel.find({});
    res.status(200).send({
        success: true,
        data: category
    })
});
const category_add = asyncHandler(async (req, res) => {
    const { name, subCategory } = req.body;

    // Check if the main category with the given name already exists
    const existingCategory = await categoryModel.findOne({ name });
    if (existingCategory) {
        res.status(400).send({
            sucess: false,
            message: 'Main category name already exists'
        })
        return
    }

    // Process sub-categories
    const subCategoryIds = [];
    for (const sub of subCategory) {
        let existingSubCat = await categoryModel.findOne({ name: sub });
        
        // If the sub-category does not exist, create a new one
        if (!existingSubCat) {
            const newSubCategory = new categoryModel({
                name: sub,
                sub: []
            });
            existingSubCat = await newSubCategory.save();
        }
        // Store the sub-category ID
        subCategoryIds.push(existingSubCat._id);
    }

    // Create and save the main category with the sub-category IDs
    const newCategory = new categoryModel({
        name,
        sub: subCategoryIds
    });

    const savedCategory = await newCategory.save();

    res.status(200).send({
        success: true,
        message: 'Category added successfully',
    })
});


export default { category_list, category_add }