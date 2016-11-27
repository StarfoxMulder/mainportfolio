var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');


// bring in the models
var models = require('./models');

// sync the models
models.sequelize.sync({});

// Instantiate Express
var app = express();
//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
   defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// bring in the routes
var routes = require('./controllers/ML_controller.js');

// connect the routes
app.use('/', routes);
app.use('/update', routes);
app.use('/create', routes);


// listen on port 3000
var port = process.env.PORT || 3000;
app.listen(port);

console.log(module.exports);

//// It was hard for me to reconcile this offhand, but went with Mary's version and elected to save the previous version of our server.js until we're certain that we want our file to look this way
//
// <<<<<<< HEAD
// var express = require('express');
// var bodyParser = require('body-parser');
// var models = require('./models');
// var methodOverride = require('method-override');
// var path = require('path');
// var exphbs = require('express-handlebars');
// var router = require('./controllers/ML_controller.js');
// var multer = require('multer');

// var app = express();
// var upload = multer();

// models.sequelize.sync({});
// // Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static(process.cwd() + '/public'));

// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({extended: true}));

// // override with POST having ?_method=DELETE
// app.use(methodOverride('_method'));
// // handlebars setup
// app.engine('handlebars', exphbs({defaultLayout: 'main'}));
// app.set('view engine', 'handlebars');

// app.use('/', router);


// var port = process.env.PORT || 3000;
// app.listen(port, function () {
//   console.log('Listening on PORT ' + port);
// });
// =======
