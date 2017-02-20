//Abdulellah Hakim
//D12122837
//Enterprise Application Development
//Lab3-4 Submission date: Sunday:12/2/17
//demonstration date: Monday 13/02/17
//Task 1-3.
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
 //Task-1 can do select users after the query. or any other SQL query.
//curl "localhost:3000/products1?name='';select+*+from+users;"
app.get('/products', function (req, res) {
  var name = req.query.name;
  db.run(`select * from products where title = ${name}`, function(err,data){
    res.status(200).send(data);
  });
})

//Task 2.2
/*PLSQL function
 CREATE OR REPLACE FUNCTION get_product(book_title VARCHAR(70))
RETURNS setof products AS $BODY$
BEGIN
  RETURN QUERY
  select * from products where title like book_title;
END;
$BODY$
LANGUAGE plpgsql;
*/
//curl "localhost:3000/productsPLSQL?name='';select+*+from+users;"

app.get('/productsPLSQL', function (req, res) {
  var name = req.query.name;
  db.run("select get_product($1)", function(err,data){
    res.status(200).send(data);
  });
})
//assign the app to listen on a port
app.listen(3000, function () {
  console.log('App listening on port 3000!')
})