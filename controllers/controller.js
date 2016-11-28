var express = require('express');
var router = express.Router();
var models = require('../models');
// var multer = require('multer');

///// Route to Landing Page \\\\\
router.get('/', function (req, res) {
  res.redirect('/landing');
  //need a landing.handebars
});

router.get('/landing', function (req, res) {
  res.render('landing');
});


///// Route to Available Items List Page \\\\\
router.get('/listA', function (req, res) {
  models.Available.findAll({}).then(function(data) {
    res.render('listA', { Availables : data });
    //this returns all Available items
    // need models for Available items
  });
});

///// Route to Wanted Items List Page \\\\\
router.get('/listW', function (req, res) {
  models.Wanted.findAll({}).then(function(data) {
    res.render('listW', { Wanteds : data });
    //this returns all Wanted items
    // need models for Wanted items
  });
});

router.get('/post', function(req, res){
  res.render("post");
});
///// Route from /post/insertOne to /list \\\\\
router.post('/post/Available', function (req, res){

  models.Available.create({
    price: req.body.price,
    itemName: req.body.itemNameI,
    posterName: req.body.posterNameI,
    longDescription: req.body.longDescriptionI,
    shortDescription: req.body.shortDescriptionI,
    sold: false
    // mainPic: /*UPDATE W/MULTER PARAMS*/,
    // pic2: /*UPDATE W/MULTER PARAMS*/,
    // pic3: /*UPDATE W/MULTER PARAMS*/,
    // pic4: /*UPDATE W/MULTER PARAMS*/,
  }).then(function() {
    res.redirect('/listA');
    //Should we do some kind of 'post successful' redirect here
    // as an intermediary page between /post and redirect back to /list?
    // Or do another form of validation?
  });

});

///// Route from /post/Wanted to /list \\\\\
router.post('/post/Wanted', function (req, res){

  models.Wanted.create({
    price: req.body.price,
    itemName: req.body.itemName,
    posterName: req.body.posterName,
    longDescription: req.body.longDescription,
    shortDescription: req.body.shortDescription,
    found: false
    // mainPic: /*UPDATE W/MULTER PARAMS*/,
    // pic2: /*UPDATE W/MULTER PARAMS*/,
    // pic3: /*UPDATE W/MULTER PARAMS*/,
    // pic4: /*UPDATE W/MULTER PARAMS*/,
  })
  .then(function() {
    res.redirect('/listW');
    //Should we do some kind of 'post successful' redirect here
    // as an intermediary page between /post and redirect back to /list?
    // Or do another form of validation?
  });

});


///// router for getting info of a specific Available Item for ItemA Page \\\\\
router.get('/itemA/:id', function(req, res) {
  var id = req.params.id;
  var condition = 'id = '+id;

  models.Available.findById(id)
  .then(function(data){
    res.render('itemA', {Availables : data});
  });

});


///// route from item page to update 'sold' field when purchased \\\\\
router.put('/itemA/sold/:id', function (req, res) {
  var condition = 'id = ' + req.params.id;

  models.Available.updateSold({
    sold: true
  },
  {
    where: {
      id:condition
    }
  }).then(function () {
    res.redirect('/listA');
    //Do we want an intermediary validation page here so users
    // know that their purchase was successful?
    // Or another type of validation?
  });
});

///// router for getting info of a specific Wanted Item for ItemW Page \\\\\
router.get('/itemW/:id', function(req, res) {
  var id = req.params.id;
  var condition = 'id = '+id;

  models.Wanted.findById(id)
  .then(function(data){
    res.render('itemW', {Wanteds : data});
  });

});


///// route from item page to update 'found' field when an item is found - i think in theory this would lead to connecting the two users so they can coordinate on how to complete the transaction independently \\\\\
router.put('/itemW/found/:id', function (req, res) {
  var condition = 'id = ' + req.params.id;

  models.Wanted.updateFound({
    found: true
  },
  {
    where: {
      id:condition
    }
  }).then(function () {
    res.redirect('/listW');
    //Do we want an intermediary validation page here so users
    // know that their purchase was successful?
    // Or another type of validation?
  });
});

module.exports = router;

///// in case we need a delete/remove item option \\\\\
// router.delete('/item/deleteOne/:id', function (req, res) {
//     //sequelize update
//   var condition = 'id = ' + req.params.id;

//   item.deleteOne({
//     where: {
//       id:condition
//     }
//   }).then(function () {
//     res.redirect('/list');
//   });
// });

