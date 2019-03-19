const mongoose = require('mongoose');

const feedbacklist= mongoose.model('feedbacks',{
    name :{type : String},
    opinion : { type: String }
});
module.exports = feedbacklist;