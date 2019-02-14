const aws = require('aws-sdk');

/**
 * Puerto
 */
process.env.PORT = process.env.PORT || 3000;

/**
 * Entorno
 */
process.env.NODE_ENV = aws.NODE_ENV || 'dev'; // process.env.NODE_ENV || 'dev';

/**
 * Base de datos
 */

 let urlDB;

 if (process.env.NODE_ENV === 'dev') {
     urlDB = 'mongodb://localhost:27017/cafe';
 } else { 
    urlDB = aws.MONGO_URI; // process.env.MONGO_URI;   
    //urlDB = 'mongodb://cafe-user:cafe123@cluster0-shard-00-00-tegdn.mongodb.net:27017,cluster0-shard-00-01-tegdn.mongodb.net:27017,cluster0-shard-00-02-tegdn.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true';
 }

 
 process.env.urlDB = urlDB;
    