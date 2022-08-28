const express = require('express');
const { people } = require('./data');
const people_routes = require('./router/people_routes');
const app = express();

//parse from data
app.use(express.urlencoded({ extended: false }));
// json parsing
app.use(express.json());
//setting route which starts with '/api/people'
app.use('/api/people', people_routes);

app.listen(5000, () => {
    console.log('server is listening on port 5000....');
});