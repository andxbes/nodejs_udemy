const mongodb = require('mongodb');

let _db;

const mongoConnect = (callback) => {
  const MongoClient = mongodb.MongoClient;
  MongoClient.connect('mongodb://udNodeJs:udNodeJs@localhost:27017/udNodeJs?authSource=udNodeJs')
    .then((client) => {
      console.info('MongoDB Connected !!!');
      _db = client.db();
      callback();
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
