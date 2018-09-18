// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect(
  'mongodb://localhost:27017/TodoApp',
  (err, client) => {
    if (err) {
      return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos')
    //   .find({ _id: new ObjectID('5ba0c32d807387216d177581') })
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

    // db.collection('Todos')
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

    db.collection('Users')
      .find({ name: 'Ajie' })
      .toArray()
      .then(docs => {
        console.log(JSON.stringify(docs, undefined, 2));
      });

    // client.close();
  }
);
