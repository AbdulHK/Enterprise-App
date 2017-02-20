//Abdulellah Hakim
//D12122837
//Enterprise Application Development
//Lab1-2 Submission date: Sunday:12/2/17
//demonstration date: Monday 13/02/17
//Task 5-6.
var express = require('express');
var app = express();
var http = require('http');
var massive = require("massive");
var connectionString = "postgres://Abdul:Abdul1993@postgres.cqqg2ogfqtyq.us-west-2.rds.amazonaws.com:5432/Labs";

// connect to Massive and get the db instance. You can safely use the
// convenience sync method here because its on app load
// you can also use loadSync - it's an alias
var massiveInstance = massive.connectSync({connectionString : connectionString}) 

// Set a reference to the massive instance on Express' app:
app.set('db', massiveInstance);
app.set('view options', { pretty: true });

var db = app.get('db');

//curl localhost:3000/users
app.get('/users', function (req, res) {
  db.users.find({}, function(err,data){
    res.status(200).send(data);
  });
})
//curl localhost:3000/users/1
app.get('/users/:id', function (req, res) {
  db.users.find({id : req.params.id}, function(err,data){
    res.status(200).send(data);
  });
})
//curl localhost:3000/products
app.get('/products', function (req, res) {
  db.products.find({}, function(err,data){
    res.status(200).send(data);
  });
})
//curl localhost:3000/products/1
app.get('/products/:id', function (req, res) {
  db.products.find({id : req.params.id}, function(err,data){
    res.status(200).send(data);
  });
})
//curl localhost:3000/purchases
app.get('/purchases', function (req, res) {
  db.purchases.find({}, function(err,data){
    res.status(200).send(data);
  });
})
//curl localhost:3000/purchases/1
app.get('/purchases/:id', function (req, res) {
  db.purchases.find({id : req.params.id}, function(err,data){
    res.status(200).send(data);
  });
})
//assign the app to listen on a port
app.listen(3000, function () {
  console.log('App listening on port 3000!')
})