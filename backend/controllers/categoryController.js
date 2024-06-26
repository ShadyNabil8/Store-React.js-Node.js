import categoryModel from '../models/categoryModel.js'
import asyncHandler from "express-async-handler"

const category_list = asyncHandler(async (req, res) => {
    const category = await categoryModel.find({}).select('name -_id');
    res.status(200).send({
        success: true,
        data: category
    })
});


export default { category_list }