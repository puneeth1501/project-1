import express from "express";
import mongoose from "mongoose";
import { PORT, MongoURL } from "./config.js";
import contactRouter from "./routes/contactRoute.js";


const app = express();

app.use('/contact', contactRouter);

app.get("/", (req, res) => {
    return res.status(200).send("<h1>Hello, World!</h1>");
});

mongoose.connect(MongoURL).then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
        console.log(`Example app listening at ${PORT}`);
        console.log(`Check http://localhost:${PORT}`);
    });
}).catch((err)=> {
    console.log(err);
});