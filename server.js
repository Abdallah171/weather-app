// Setup empty JS object to act as endpoint for all routes

//-- i prefer to use array to push data easily --
let projectData = {};

// Require Express to run server and routes

const express = require("express");

// requiring body parser and cors 
const bodyParser = require('body-parser')


// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors')



// Initialize the main project folder
app.use(express.static('website'));

// POST route
app.post('/addInfo', (req, res) => {
    projectData.temp = req.body.temp
    projectData.date = req.body.newDate
    projectData.feeling = req.body.feeling
    res.send(projectData)
});

// my get function
app.get('/getInfo', (req, res) => {
    res.send(projectData);
});

//start my server local host
const port = 1717;
const server = app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});