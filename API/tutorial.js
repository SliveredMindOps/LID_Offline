var save = require('../save.js');

module.exports = (req, resp) => {
	var reqData = "";
	req.on('data', function(chunk){ reqData += chunk})
	req.on('end', function(){
		save.setSoul(JSON.parse(reqData)['soul']);
		save.setTutorialState(JSON.parse(reqData)['flag']);
		resp.send({
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

//flag 10 tutorial start
//flag 20 first time starthub
//???