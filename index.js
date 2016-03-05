var express = require('express'),
	  app = express();

var port = process.env.PORT || 8080;

app.use(express.static('www'));

app.listen(port, function () {
  console.log('Example app listening!');
});
