const express = require('express');

var router = express.Router();

var feedbacklist = require('../models/feedback.js');

/* Add feedback details */
router.post('/add', (req, res) => {
    feedbacklist.create(req.body);
});

/* Get all feedback details */
router.get('/', (req, res, next) => {
    feedbacklist.find({}, (err, data) => {
        if (err) res.send(err);
        res.json(data);
    })
});

module.exports = router; 