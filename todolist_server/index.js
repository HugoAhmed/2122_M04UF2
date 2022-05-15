#!/usr/bin/node

const http = require("http");

let mongo_client = require("mongodb").MongoClient;
let url = "mongodb://localhost/";
let ObjectId = require("mongodb").ObjectID;
let db;

console.log("Iniciando server mongo-http");

mongo_client.connect(url, function(error, conn){
	console.log("Dentro de MongoDB");
		if (error){
			console.log("No se ha podido acceder a Mongo :\(");
			return;
		}
		db = conn.db("todolist");
});

http.createServer(function(req, res) {
	res.writeHead(200, {
      		'Content-Type': 'application/json',
      		'Access-Control-Allow-Origin': '*',
      		'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
	});
	if (req.method == "POST") {
		let task = [];
		req.on('data', function(chunk) {
			task += chunk;
		});

		req.on('end', function() {
			task = JSON.parse(task);		
			
			if (task.remove == "false") {
				db.collection("tasks").insertOne({"task":task.tasks});				
				let aux = db.collection("tasks").find();			
				let aux2;
				aux.toArray(function(err,doc) {
					aux2  = JSON.stringify(doc);
					res.end(aux2);
					return;
				});
			}
			else {
				aux = new ObjectId(task.task_id);	
				let id =  {_id: aux};
				db.collection("tasks").deleteOne(id);
			}	
		});
		return;
	}	
	let task_obj = db.collection("tasks").find();
	let json;
	task_obj.toArray(function(err,data){
		json = JSON.stringify(data);
		res.end(json);
		return;});
	return;
}).listen(3030);
