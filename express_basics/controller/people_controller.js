const { people } = require('../data');

const getPeoples = (req, res) => {
    res.status(200).send({ success: true, data: people });
}

const createPerson = (req, res) => {
    // console.log(req.body);
    people.push(req.body);
    // console.log(people);
    res.status(200).send({ success: true, data: people });
}

const updatePersonDetails = (req, res) => {
    // const {id} = req.params;
    const { id } = req.query;
    const { name } = req.body;
    const index = people.findIndex(person => person.id == Number(id));
    if (index != -1) {
        const updatedPeople = { id: Number(id), name };
        people[index] = updatedPeople;
        res.status(200).send({ success: true, data: people });
    }
    else {
        res.status(404).send({ success: false, msg: `For the given id ${id} doesn't exist` });
    }
}

const deletePerson = (req, res) => {
    const { id } = req.query;
    const newPeopleList = people.filter(person => person.id != Number(id));
    res.status(200).send({ success: true, data: newPeopleList });
}

module.exports = {
    getPeoples,
    createPerson,
    updatePersonDetails,
    deletePerson
}