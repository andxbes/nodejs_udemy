// const mysql = require('mysql2');
require('dotenv').config();

// const pool = mysql.createPool({
//     host: process.env.DATABASE_HOST,
//     user: process.env.DATABASE_USERNAME,
//     database: process.env.DATABASE_NAME,
//     password: process.env.DATABASE_PASSWORD
// });

// module.exports = pool.promise();

const { Sequelize } = require('sequelize');


const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASSWORD,
  {
    dialect: 'mysql',
    host: process.env.DATABASE_HOST
  }
);

module.exports = sequelize;
