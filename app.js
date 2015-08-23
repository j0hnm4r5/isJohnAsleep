var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
	res.send('<!DOCTYPE html><body style="margin:0;padding:0;"><div style="position:absolute;height:100%;width:100%;display:flex;align-items:center;justify-content:center;-webkit-box-align:center;-webkit-box-pack:center;color:white;background-color:' + (global.asleep ? '#2c3e50' : '#3498db') + ';"><div style="max-width:50%;flex:none;-webkit-box-flex:0;font-size:2em;font-family:sans-serif">' + 'John is ' + (global.asleep ? 'asleep' : 'awake') + '</div></div></body>');
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