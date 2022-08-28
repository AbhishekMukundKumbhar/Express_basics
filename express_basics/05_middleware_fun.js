const express = require('express');
const logger = require('./05_logger');
const authorized = require('./05_authorized');
//req => middleware => res

const app = express();

/*app.use() : order is very important bcz it's applicable for all routes placed below app.use() 
that's why in every document middleware will be placed top of the document */


// app.get('/',logger,(req,res)=>{   //applying middleware function 'logger' to route
// app.get('/',[authorized,logger],(req,res)=>{  //applying multiple middleware function to route

// app.use(logger); // this is applicable for all routes below this line

app.use([authorized,logger]);  // multiple middleware functions

// app.use('/api',logger);  //this is applicable for all routes which paths starts with '/api'


app.get('/',(req,res)=>{
    console.log(req.user); //req.user is setted in authorized middleware to req object so middleware is famous
    res.send("Welcome to home page");
});

app.get('/about',(req,res)=>{
    res.send("Welcome to about page");
});

app.get('/api',(req,res)=>{
    res.send("welcome to api home page");
})
app.get('/api/about',(req,res)=>{
    res.send("welcome to api about page");
})

app.listen(5000,()=>{
    console.log('server is listning on port 5000......');
});