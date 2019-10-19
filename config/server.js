var express = require('express');
var consign = require('consign');

var app = express();

consign()
    .include('')
    .then('config/dbConnection.js')
    .then('models')
    .into(app);

module.exports = app;