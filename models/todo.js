var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TodoSchema = new Schema({
  item: String,
  completed: { type: Boolean, default: false },
  date_created: { type: Date, default: Date.now }
});

mongoose.connect('mongodb://localhost/todo-app');

module.exports = mongoose.model('Todo', TodoSchema);
