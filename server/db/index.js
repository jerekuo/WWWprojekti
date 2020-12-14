const mongoose = require("mongoose");

var dbUrl =
  "mongodb+srv://admin:admin@cluster0.nk8k3.mongodb.net/microblog?retryWrites=true&w=majority";

mongoose
  .connect(dbUrl, { useNewUrlParser: true })
  .catch((err) => console.log(err));

const db = mongoose.connection
  .once("open", function () {
    console.log("Connected");
  })
  .on("error", function (error) {
    console.log("There's an error", error);
  });

module.exports = db;
