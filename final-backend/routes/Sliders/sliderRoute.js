import express from 'express';
import slidersCtrl from '../../controllers/Sliders/slider.controller.js';
import { authenticateToken } from '../../middleware/auth.js';
import upload from '../../middleware/upload.js';

const sliderRoute = express.Router();

const imageUpload = upload.single('image');

sliderRoute.get('/', slidersCtrl.getAllSliders);
sliderRoute.get('/:id', slidersCtrl.getSingleSlider);
sliderRoute.post('/create', imageUpload, slidersCtrl.createSlider);
sliderRoute.patch('/update/:id', imageUpload, slidersCtrl.updateSlider);
sliderRoute.delete('/delete/:id', slidersCtrl.deleteSlider);

export default sliderRoute;