const express = require('express');
const app = express();

/* most used methods in express
app.get()
app.post()
app.patch()
app.put()
app.delete()
app.use()
app.all()
app.listen() */


// we can use write also
// app.get('/',(req,res)=>{
//     res.write('welcome to home page');
//     res.end();
// })


/*In web it's shows status code '304' it means we are not modifiying anything and hiting same url again
stores a resource in the cache and header information */
app.get('/',(req,res)=>{
    res.status(200).send('<h1>welcome to home</h1>');
});

app.get('/about',(req,res)=>{
    res.status(200).send('<h1>welcome to about page</h1>');
});

app.all('*', (req,res)=>{
    res.status(404).send('<h1>404 : page not found error</h1>');
});

app.listen(5000,()=>{
    console.log('server is listening on port 5000');
});