var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  vas fs = require('fs');
  var content = fs.ReadFileSync('./index.html', 'utf8');
  response.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
