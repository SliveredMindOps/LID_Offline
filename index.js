var express = require('express');
var fs = require('fs');
var path = require('path');
var app = express();

var API = require('./API');

const appDir = path.dirname(require.main.filename) + '/';
const serverAddr = "localhost";

app.all("*", (req, resp, next) => {
	console.log(req.method + ' ' +  req.hostname + ' ' + req.path);
	var reqData = "";
	req.on('data', function(chunk){ reqData += chunk})
	req.on('end', function(){
		console.log(reqData);
	});
	resp.set({
		'http_x_lid_hash': 'LET_IT_DIE_OFFLINE'
	});
	next();
});

//routes
app.use('/ap.conf', (req, resp) => {
	resp.send({
		"ver":0,
		"envs":[
		{
			"name":"prds",
			"urls":[
			{
				"type":"",
				"ver":-1,
				"url":serverAddr,
				"region":""
			}
			]
		}
		]
	});
});

app.use('/api/getparams.php', (req, resp) => {
	resp.send(fs.readFileSync(appDir + 'Data/Params/' + 'GhmApiGetparams_is_encrypted-1_2'));
});

app.use('/api/getlocdat.php', (req, resp) => {
	resp.send(fs.readFileSync(appDir + 'Data/Locdat/' + 'GhmApiGetlocdat_langsnd-int_langtxt-int_is_encrypted-1_2'));
});

//dynamically register endpoints
for(let endpoint of Object.keys(API)) {
	app.use('/api/' + endpoint + '.php', API[endpoint]);
}

app.listen(1337, () => {
	console.log('listening on port 1337');
});
