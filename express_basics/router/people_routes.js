const express = require('express');
const people_route = express.Router();

const {
    getPeoples,
    createPerson,
    updatePersonDetails,
    deletePerson
} = require('../controller/people_controller');

// http://localhost:5000/api/people
// people_route.get('/api/people', (req, res) => {  

/*we are not giving complete path bcz base path is already we used in app.use('/api/people',people_rote)
so it will match all routes which starts with '/api/people' */
people_route.get('/', getPeoples);

/* http://localhost:5000/api/people
select - body & raw & JSON
pass this body :
{
    "id" : 6,
    "name" : "kishor"
}*/

people_route.post('/', createPerson);

/* http://localhost:5000/api/people?id=2
select - body & raw & JSON
pass this body :
{
    "name" : "mukund"
} */
// people_route.put('/:id',(req,res)=>{
people_route.put('/', updatePersonDetails);

// http://localhost:5000/api/people?id=3
people_route.delete('/', deletePerson);

//another way to create route
//if path is same and, methods and handler are different
// people_route.route('/').get(getPeoples).post(createPerson).put(updatePersonDetails).delete(deletePerson);

module.exports = people_route;