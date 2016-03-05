var express = require('express'),
	  app = express();

var rootDir = __dirname + '/www';
var port = process.env.PORT || 8080;

app.use(express.static(rootDir));

app.listen(port, function () {
  console.log('Example app listening!');
});
