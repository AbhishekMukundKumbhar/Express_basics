const express = require('express');
const { people } = require('./data');

const app = express();

//parse from data
app.use(express.urlencoded({ extended: false }));
// json parsing
app.use(express.json());

// http://localhost:5000/api/people
app.get('/api/people', (req, res) => {
    res.status(200).send({ success: true, data: people });
});

/* http://localhost:5000/api/people
select - body & raw & JSON
pass this body :
{
    "id" : 6,
    "name" : "kishor"
}*/

app.post('/api/people', (req, res) => {
    // console.log(req.body);
    people.push(req.body);
    // console.log(people);
    res.status(200).send({ success: true, data: people });
});

/* http://localhost:5000/api/people?id=2
select - body & raw & JSON
pass this body :
{
    "name" : "mukund"
} */
// app.put('/api/people/:id',(req,res)=>{
app.put('/api/people', (req, res) => {
    // const {id} = req.params;
    const { id } = req.query;
    const { name } = req.body;
    const index = people.findIndex(person => person.id == Number(id));
    if (index != -1) {
        const updatedPeople = { id: Number(id), name };
        people[index] = updatedPeople;
        res.status(200).send({ success: true, data: people });
    }
    else{
        res.status(404).send({ success: false, msg : `For the given id ${id} doesn't exist` });
    }

});

// http://localhost:5000/api/people?id=3
app.delete('/api/people', (req, res) => {
    const { id } = req.query;
    const newPeopleList = people.filter(person => person.id != Number(id));
    res.status(200).send({ success: true, data: newPeopleList });
});

app.listen(5000, () => {
    console.log('server is listening on port 5000....');
});