var save = require('../save.js');

module.exports = (req, resp) => {
	var reqData = "";
	req.on('data', function(chunk){ reqData += chunk})
	req.on('end', function(){
		save.setSoul(JSON.parse(reqData)['soul']);
		resp.send({
			"user_research": save.getUserResearch(),
			"user": save.getUser(),
			"buyable_count": 3,
			"buyable_count_limit": -1,
			"research_stamp_info":[],
			"playlog":save.getPlaylog(),
			"av":3,
			"dv":146,
			"e":"0",
			"st":0,
			"emsg":"",
			"eparam":"",
			"env":"prds",
			"accountId":save.getAccountId(),
			"json":1,
			"ctime":save.getCtime()
		});
	});
}