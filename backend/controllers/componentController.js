import { log } from 'console';
import componentModel from '../models/componentModle.js'
import asyncHandler from "express-async-handler"

import fs from 'fs'

const add_component = asyncHandler(async (req, res) => {
    console.log('here');
    const component = new componentModel({
        name: req.body.name,
        price: req.body.price,
        image: `${req.file.filename}`,
        MajorCategory: req.body.MajorCategory,
        MinorCategory: req.body.MinorCategory
    })

    await component.save();
    res.status(201).json({
        success: true,
        message: "component added successfully"
    })
});

export { add_component }