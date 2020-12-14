//Model for posts
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Post = new Schema({
  name: { type: String, required: true, maxlength: 30 },
  message: { type: String, required: true, maxlength: 300 },
  time: { type: String, required: true }
});

// Export model.
module.exports = mongoose.model("posts", Post);
