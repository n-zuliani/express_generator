var express = require('express');
var router = express.Router();
var faker = require('faker');
const fs = require('fs');
/* GET users listing. */
router.get('/generate', function(req, res, next) {
 res.send(createFakePerson());
});

function createFakePerson()
{
 let randomName = faker.name.findName(); // Rowan Nikolaus
 let randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
 let randomCard = faker.helpers.createCard(); // random contact card containing many properties

 let person = {
   name:randomName,
   email:randomEmail,
   card: randomCard
 }
  
 let data = JSON.stringify(person);
 fs.writeFileSync('person.json', data);

 return person;
}

module.exports = router