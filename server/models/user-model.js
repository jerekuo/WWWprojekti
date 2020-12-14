//Model for users
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  username: { type: String, required: true, maxlength: 25 },
  password: { type: String, required: true, maxlength: 25 },
  accountCreated: { type: String, required: true }
});

// Export model.
module.exports = mongoose.model("users", User);
