//Abdulellah Hakim
//D12122837
//Enterprise Application Development
//Lab3-4 Submission date: Sunday:26/2/17
//demonstration date: Monday 27/02/17
//Task 1-2.
var express = require('express');
var app = express();
var massive = require("massive");
var connectionString = "postgres://Abdul:Abdul1993@postgres.cqqg2ogfqtyq.us-west-2.rds.amazonaws.com:5432/Labs";
var express = require('express');

// connect to Massive and get the db instance. You can safely use the
// convenience sync method here because its on app load
// you can also use loadSync - it's an alias
var massiveInstance = massive.connectSync({connectionString : connectionString})

// Set a reference to the massive instance` on Express' app:
app.set('db', massiveInstance);
app.set('view options', { pretty: true });

var db = app.get('db');
//Task 1
//curl "http://localhost:3000/products?name='Dictionary'"
//SQL injection would be :
//curl "http://localhost:3000/products/?title='';select+*+from+users"
app.get('/products', function (req, res) {
  var title = req.query.title;
  db.run(`select * from products where title = ${title}`, function(err,data){
    res.status(200).send(data);
  });
})
//Task 2.1
//curl "http://localhost:3000/productsT2.1?title=Drama"
//Tested with 
//curl "http://localhost:3000/productsT2.1/?title='';select+*+from+users"
//save! no results exposed
app.get('/productsT2.1', function (req, res) {
  db.products.find({title: req.query.title}, function(err,data){
    res.status(200).send(data);
  });
})
//Task 2.2 PLSQL procedure:
//curl "http://localhost:3000/productsT2.2?title=Drama"
//Tested with
//curl "http://localhost:3000/productsT2.2?/?title='';select+*+from+users"
app.get('/productsT2.2', function (req, res) {
  var title = req.query.title;
  db.run(`select * from get_product('${title}')`, function(err,data){
    res.status(200).send(data);
  });
})

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})
