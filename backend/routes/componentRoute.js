import express from 'express';
import { add_component } from '../controllers/componentController.js'
import upload from '../config/storage.js';

const router = express.Router()


router.post('/add', upload.single('image'), add_component)

export default router 