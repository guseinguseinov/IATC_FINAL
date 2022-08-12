import express from 'express';
import mongoose from 'mongoose';
import { config } from 'dotenv';
import sliderRoute from './routes/Sliders/sliderRoute.js';

config();

const app = express();
const mongodbUrl = process.env.MONGODB_URL;
await mongoose.connect(mongodbUrl);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/sliders', sliderRoute);

export default app;
