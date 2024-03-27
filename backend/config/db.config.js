'use strict';

const mysql = require('mysql');
const dbConn = mysql.createConnection({
    host: 'bvtatwncyrdhlkqvixku-mysql.services.clever-cloud.com',
    user: 'uaxdaexywbuop9ks',
    password: 's2v5t3XpJkV2AZpuXiht',
    database: 'bvtatwncyrdhlkqvixku'
});

dbConn.connect(function(err){
    console.log("Database Conntected!");
});
module.exports = dbConn;