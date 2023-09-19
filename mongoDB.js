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

import { MongoClient } from "mongodb";

//var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://127.0.0.1:27017/";

//MongoClient.connect(url, function (err, db) {
/*
a.connect(function (err, db) {
  if (err) throw err;
  var dbo = db.db("livraria");
  dbo.createCollection("customers", function (err, res) {
    if (err) throw err;
    console.log("Collection created!");

    db.close();
  });
});
*/
async function main() {
  /**
   * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
   * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
   */
  const uri = "mongodb://127.0.0.1:27017/";

  /**
   * The Mongo Client you will use to interact with your database
   * See https://mongodb.github.io/node-mongodb-native/3.6/api/MongoClient.html for more details
   * In case: '[MONGODB DRIVER] Warning: Current Server Discovery and Monitoring engine is deprecated...'
   * pass option { useUnifiedTopology: true } to the MongoClient constructor.
   * const client =  new MongoClient(uri, {useUnifiedTopology: true})
   */
  const a = new MongoClient(uri);

  try {
    /*
    // Connect to the MongoDB cluster
    await client.connect();

    // Make the appropriate DB calls
    await listDatabases(client);
    console.log("testei");
    */

    await a.connect();

    await listDatabases(a);
  } catch (e) {
    console.error(e);
  } finally {
    // Close the connection to the MongoDB cluster
    await a.close();
  }
}

main().catch(console.error);

/**
 * Print the names of all available databases
 * @param {MongoClient} client A MongoClient that is connected to a cluster
 */
async function listDatabases(client) {
  var databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}
