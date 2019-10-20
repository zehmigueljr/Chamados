var express = require('express');
var consign = require('consign');
var app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(function(req, res, next){

	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
	res.setHeader("Access-Control-Allow-Headers", "content-type");
	next();
});

consign()
    .include('routes')
    .then('config/dbConnection.js')
    .then('models')
    .then('repositories')
    .then('controllers')
    .into(app);

module.exports = app;