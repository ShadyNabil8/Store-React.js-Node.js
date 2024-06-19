import { log } from 'console';
import componentModel from '../models/componentModle.js'
import asyncHandler from "express-async-handler"

import fs from 'fs'

const add_component = asyncHandler(async (req, res) => {
    const component = new componentModel({
        name: req.body.name,
        price: req.body.price,
        image: req.file.filename,
        category: req.body.category,
    })

    await component.save();
    res.status(201).send({
        success: true,
        message: "component added successfully"
    })
});

export { add_component }