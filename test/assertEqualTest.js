const {assertEqual} = require('../assertEqual')


// TEST CODE
assertEqual("This is an identical string", "This is an identical string");
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(10, 30);


module.exports = { assertEqual}