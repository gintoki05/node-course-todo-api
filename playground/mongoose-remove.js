const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');

Todo.findOneAndRemove({ _id: '5ba302ff6cf3ea2a7ce75cdb' }).then(todo => {});

Todo.findByIdAndRemove('5ba302ff6cf3ea2a7ce75cdb').then(todo => {
  console.log(todo);
});
