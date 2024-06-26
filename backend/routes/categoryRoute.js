import express from 'express';
import categoryController from '../controllers/categoryController.js'

const router = express.Router()


router.get('/list', categoryController.category_list)

export default router 