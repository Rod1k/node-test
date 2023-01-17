import express from 'express';
import mongoose from 'mongoose';
// import Post from "./Post.js";
import router from './router.js'

const PORT = 5000;
const DB_URL = 'mongodb+srv://user:user@cluster0.403tamc.mongodb.net/?retryWrites=true&w=majority';

const app = express();

app.use(express.json());  // Нужно для преобразования json POST запросов
app.use('/api', router);

async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true});
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT' + PORT));
    } catch (e) {
        console.log(e);
    }
}

startApp();
