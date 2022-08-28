// In req.query we pass data using "?" operator. ex : '/api/posts?postId=post_id&name=userName'
const {posts} =require('./data');

const express = require('express');
const app = express();

//http://localhost:5000/api/posts/query?userId=2&search=a
app.get('/api/posts/query',(req,res)=>{
    // console.log(req.query);
    const {userId, search} = req.query;
    let sortedPosts = [...posts];
    if(search)
    {
        sortedPosts = sortedPosts.filter(post=>{
            return post.name.startsWith(search)&& post.userId == userId;
        });
    }
    if(sortedPosts.length<1){
        return res.status(200).json({success: true, data : []});
    }
    res.status(200).json(sortedPosts);
});

app.listen(5000,()=>{
    console.log('server is listning on port 5000.....');
})