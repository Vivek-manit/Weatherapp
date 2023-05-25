const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const hbs = require("hbs");
const staticPath = path.join(__dirname,"../public");
app.set('view engine', 'hbs');
app.use(express.static(staticPath));
const tempelatePath = path.join(__dirname,"../tempelates/views");
const partialsPath = path.join(__dirname,"../tempelates/partials");
hbs.registerPartials(partialsPath);
app.set("view engine","hbs");
app.set("views",tempelatePath);
app.get("/",(req,res)=>{
    res.render("index");
    
})
app.get("/weather",(req,res)=>{
    res.render("weather");
})
app.get("/about",(req,res)=>{
    res.render("about");
})
app.get("*",(req,res)=>{
    res.send('404 error OOPs');
})
app.listen(port,()=>{
    console.log('succesfull');
})