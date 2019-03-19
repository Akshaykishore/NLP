const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const {mongoose} = require('./db.js');
var feedbackController = require('./controller/feedbackController.js');

var app = express();
app.use(cors());
app.use(bodyParser.json());

const port = 4400; 

app.listen(port,() => console.log('Server started at port no :' +port))

app.use('/feedbacks',feedbackController)