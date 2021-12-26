const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const url = "mongodb://localhost:27017/Agent";
   setTimeout(() => {
    mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });
    var db = mongoose.connection;
   db.on("error", console.error.bind(console, "connection error:"));
   db.once("open", function () {
     console.log("Connection Successful!");
   });
   }, 3000);


 