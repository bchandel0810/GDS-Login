var express = require('express');
var path = require('path');
var app = express();

// Define the port to run on
app.set('port', 8001);

app.use(express.static(path.join(__dirname, 'app')));
//app.use(express.session());

// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});
