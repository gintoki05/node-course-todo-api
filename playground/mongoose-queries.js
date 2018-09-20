const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');

const id = '5ba1f5a7d97a604681c5e1f9';

if (!ObjectID.isValid(id)) {
  console.log('ID not valid');
}

// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then(todo => {
// });

Todo.findById(id)
  .then(todo => {
    !todo ? console.log('Id not found') : console.log('Todo By ID', todo);
  })
  .catch(e => console.log(e));
