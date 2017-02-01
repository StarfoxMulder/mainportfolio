var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path');
var logger = require("morgan");
// var mongoose = require("mongoose");
var routes = require("./controllers/controller.js");
var request = require("request");
var Promise = require("bluebird");

// mongoose.Promise = Promise;

// Initialize Express
var app = express();

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(express.static("./public"));
app.use(routes);
// connect the routes
app.use('/', routes);

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
   defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var port = process.env.PORT || 3333;
app.listen(port, function() {
  console.log("App running on port "+ port);
});


console.log();

