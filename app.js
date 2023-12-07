import express from "express";
import 'dotenv/config';
import mainRoute from "./server/routes/main.js";
import expressEjsLayouts from "express-ejs-layouts";
import connectDB from "./server/config/db.js";

const app=express();
const port=3000 || process.env.PORT;
connectDB();

//verileri almamızı sağlar bu iki express
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static('public'));
app.use(expressEjsLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.use('/', mainRoute);

app.listen(port, ()=>{
    console.log(`${port}'da çalışmaktadır`);
})