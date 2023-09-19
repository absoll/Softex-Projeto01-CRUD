/*
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://127.0.0.1:27017/";


console.log("aaabbb");
MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  console.log("aaa");
  var dbo = db.db("livraria");
  var myobj = { name: "Company Inc", address: "Highway 37" };
  dbo.collection("livros").insertOne(myobj, function (err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
*/

var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.createCollection("customers", function (err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});
