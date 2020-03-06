var save = require('../save.js');

module.exports = (req, resp) => {
	var reqData = "";
	req.on('data', function(chunk){ reqData += chunk})
	req.on('end', function(){
		resp.send({
			"playlog": save.getPlaylog(),
			"av": 3,
			"dv": 146,
			"e": "0",
			"st": 0,
			"emsg": "",
			"eparam": "",
			"env": "prds",
			"accountId": save.getAccountId(),
			"json": 1,
			"ctime": save.getCtime()
		});
	});
}