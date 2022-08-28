// In req.params we pass data using ":" operator. ex : '/api/posts/:postId'

const express = require('express');
const app = express();

//getting data from data.js
const {posts} = require('./data');

//http://localhost:5000
app.get('/',(req,res)=>{
    res.send('<h1>Home page</h1> \n  <a href="./api/posts">Get Posts</a>');
});

//http://localhost:5000/api/posts
app.get('/api/posts',(req,res)=>{
    let short_posts = posts.map(post=>{
        let {id, name} = post;
        return {id, name};
    })
    res.json(short_posts);  //we can write return statement as following
});

//http://localhost:5000/api/posts/4
app.get('/api/posts/:postId',(req,res)=>{
    const { postId } = req.params;
    // console.log(req.params);
    let single_post = posts.find(post=>post.id == Number(postId));
    if(!single_post){
        return res.status(404).send("post doesn't exists");
    }
    return res.json(single_post);
});

//http://localhost:5000/api/posts/4/name/abhishek
app.get('/api/posts/:postId/name/:name',(req,res)=>{
    console.log(req.params);  //{ postId: '4', name: 'abhishek' }
    const {postId,name} = req.params;
    res.send(postId+" "+name);
});

app.listen(5000,()=>{
    console.log('server is listening on port 5000.....');
});

