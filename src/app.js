var express = require('express'),
	app = express();

var authenticator = express.basicAuth(function(user, pass, callback){
	callback(null, user === 'username' && pass === 'password');
});

app.use(express.static(__dirname + "/public"));
app.get('/locked', authenticator, function (req, res) {
	res.send('hi from an authenticated page.');
});


app.listen(3000);
console.log('listening on port 3000');
