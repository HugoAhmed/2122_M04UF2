let http = require ("http")

let mongo_client = require("mogodb").MongoClient;

let url = "mongodb://localhost/todolist";

console.log("Iniciando script mongo-http");

mongo_client.connect(url, function(error, db){
	console.log("Dentro de Mongodb");

	if (error)
	{
		console.log("Error");
		return;
	}

	let db = conn.db("todolist");

	db.collection("tasks").find();
	tasks.toArray(function(err, data){
	let tasks_string = JSON.stringify(data){
	res.write(tasks_string);
	res.end();

}});

http.createServer(function(req, res){
		res.writeHead(200);

		let saludo = "aaaaaa";

		res.end(saludo)
}).listen(3030);
