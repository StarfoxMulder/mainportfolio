var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path');
var logger = require("morgan");
var routes = require("./controllers/controller.js");
var request = require("request");
var Promise = require("bluebird");

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(express.static("./public"));
app.use(routes);
// connect the routes
app.use('/', routes);

app.engine('handlebars', exphbs({
   defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var port = process.env.PORT || 3333;
app.listen(port, function() {
  console.log("App running on port "+ port);
});


