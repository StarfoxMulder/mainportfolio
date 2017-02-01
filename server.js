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

var PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  console.log("App running on port "+ PORT);
});


