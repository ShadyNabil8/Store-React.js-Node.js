import express from 'express';
import categoryController from '../controllers/categoryController.js'

const router = express.Router()


router.get('/list', categoryController.category_list)
router.post('/add', categoryController.category_add)

export default router 