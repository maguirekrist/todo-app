var express = require('express');
var router = express.Router();
var Todo = require('../models/todo');

router.get('/', function(req, res){
  Todo.find(function(err, todos){
    if(err) throw err;
    res.render('index', { title: 'Todo Application', todos: todos});
  });
});

router.post('/', function(req, res){
  var item = req.body.item;
  Todo.create({ item: item, completed: false}, function(err){
    if(err) throw err;
    res.redirect('/');
  });
});

router.get('/destroy/:id', function(req, res){
  Todo.findById(req.params.id, function(err, todo){
    todo.remove(function(err, todo){
      res.redirect('/');
    });
  });
});

router.get('/complete/:id', function(req, res){
  Todo.findById(req.params.id, function(err, todo){
    todo.completed = true;
    todo.save();
    res.redirect('/');
  });
});
module.exports = router;
