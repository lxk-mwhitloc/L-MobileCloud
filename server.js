'use strict';

var express = require('express');
var routes = require('./routes/index.js')

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use('/uploads', express.static(__dirname + '/uploads'));
app.use('/js', express.static(__dirname + '/js'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

routes(app);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
