const mongoose = require('mongoose');

//Property create to DB
const postSchema = mongoose.Schema({
   title: String,
   category: String,
   content: String,
   image: String,
   created: {
    type: Date,
    default: Date.now,
   },
});

module.exports = mongoose.model("Post", postSchema);