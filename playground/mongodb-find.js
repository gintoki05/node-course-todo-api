// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect(
  'mongodb://localhost:27017/TodoApp',
  { useNewUrlParser: true },
  (err, client) => {
    if (err) {
      return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('todos')
    //   .find({ _id: new ObjectID('5ba44037769382256758ab8a') })
    //   .toArray()
    //   .then(
    //     docs => {
    //       console.log('Todos');
    //       console.log(JSON.stringify(docs, undefined, 2));
    //     },
    //     err => {
    //       console.log('Unable fetch todos', err);
    //     }
    //   );

    // db.collection('todos')
    //   .find()
    //   .count()
    //   .then(
    //     count => {
    //       console.log(`Todos count : ${count}`);
    //     },
    //     err => {
    //       console.log('Unable fetch todos', err);
    //     }
    //   );

    db.collection('users')
      .find({ email: 'ajieprastyo@gmail.com' })
      .toArray()
      .then(docs => {
        console.log(JSON.stringify(docs, undefined, 2));
      });

    // client.close();
  }
);
