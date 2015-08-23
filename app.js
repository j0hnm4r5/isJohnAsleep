var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
	res.send("John is " + (global.asleep ? "asleep" : "awake"));
});

app.get('/status', function (req, res) {
	res.send((global.asleep ? "asleep" : "awake"));
});

app.post('/asleep', function (req, res) {
	global.asleep = true;
	res.send("John is " + (global.asleep ? "asleep" : "awake"));
});

app.post('/awake', function (req, res) {
	global.asleep = false;
	res.send("John is " + (global.asleep ? "asleep" : "awake"));
});

var server = app.listen(8123, function () {

	var host = server.address().address;
	var port = server.address().port;

	console.log('Listening at http://%s:%s', host, port);

	global.asleep = false;
});