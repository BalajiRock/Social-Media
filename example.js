// const express = require("express")
const mysql = require('mysql2');
const connection = mysql.createConnection({
    host : 'localhost',
    database :'art_gallery',
    user : 'root',
    password:'4321'
});

connection.connect(function(err){
    if(err){
        console.error('Error connecting: '+ err.stack);
        return;
    }
    console.log('Connected as id ' + connection.threadId);
});

connection.query('SELECT * from art',function (error,results,fields){
    if(error)
        throw error;
    results.forEach(result => {
        console.log(result);
        
    });
})