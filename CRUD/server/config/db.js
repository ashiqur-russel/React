const mysql = require("mysql");

const db = mysql.createConnection({
 /*    host:'eu-cdbr-west-02.cleardb.net',
    user:'bc64aa9dbc94ff',
    password:'682d39bb',
    database:'heroku_2690740d882fd1f', */

    host:'localhost',
    user:'root',
    password:'password',
    database:'Crud'

});

module.exports=db;
