var express = require('express'),
	app = express();

app.get('/', function(req, res) {
	res.send('Hello World');
});

app.listen(3000);
console.log('listening on port 3000');