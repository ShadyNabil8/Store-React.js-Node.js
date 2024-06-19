import express from 'express';
import componentController from '../controllers/componentController.js'
import upload from '../config/storage.js';

const router = express.Router()


router.post('/add', upload.single('image'), componentController.component_add)
router.get('/list', componentController.component_list)
router.post('/delete', componentController.component_delete)

export default router 