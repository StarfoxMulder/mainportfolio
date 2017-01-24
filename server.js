var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path');
var logger = require("morgan");
var mongoose = require("mongoose");
var Router = express.Router();
var routes = require("./controllers/controller.js");
var request = require("request");
var Promise = require("bluebird");

mongoose.Promise = Promise;

// Initialize Express
var app = express();

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(express.static("./public"));
app.use(routes);

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
   defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// // Configuring protected_dust database
// var databaseUri = "mongodb://localhost/portfolio";
// if (process.env.MONGODB_URI) {
//   mongoose.connect(process.env.MONGODB_URI);
// } else {
//   mongoose.connect(databaseUri);
// }
// var db = mongoose.connection;

// // Show any mongoose errors
// db.on("error", function(error) {
//   console.log("Mongoose Error: ", error);
// });

// // Once logged in to the db through mongoose, log a success message
// db.once("open", function() {
//   console.log("Mongoose connection successful.");
// });


var port = process.env.PORT || 3030;
app.listen(port, function() {
  console.log("App running on port "+ port);
});

// bring in the routes
var routes = require('./controllers/controller.js');

// connect the routes
app.use('/', routes);


console.log(module.exports);

