const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

class Product {
  constructor(title, price, description, imageUrl, id) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
    this._id = id;
  }

  save() {
    const db = getDb();
    let dbOp;
    if (this._id) {
      const { _id, ...updatedFields } = this;
      dbOp = db
        .collection('products')
        .updateOne({ _id: mongodb.ObjectId.createFromHexString(_id) }, { $set: updatedFields });
    } else {
      dbOp = db.collection('products').insertOne(this);
    }


    return dbOp
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static fetchAll() {
    const db = getDb();
    return db.collection('products').find().toArray()
      .then((products) => {
        // console.log(products);
        return products;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static findById(prodId) {
    return getDb()
      .collection('products')
      .find({ _id: mongodb.ObjectId.createFromHexString(prodId) })
      .next()
      .then((product) => {
        // console.log(product);
        return product;
      })
      .catch(err => {
        console.error(err);
      });
  }

}

module.exports = Product;
