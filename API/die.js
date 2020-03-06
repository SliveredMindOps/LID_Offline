var save = require('../save.js');

module.exports = (req, resp) => {
	var reqData = "";
	req.on('data', function(chunk){ reqData += chunk})
	req.on('end', function(){
		save.setSoul(JSON.parse(reqData)['die']['soul']);
		resp.send({
			"user": save.getUser(),
			"bld_result":{
				"enemy_count":0,
				"bloodnium":0,
				"vip_bonus_rate":0,
				"travel_bonus_rate":0,
				"kill_bonus_rate":0,
				"force_shutdown_penalty_count":0,
				"force_shutdown_penalty_rate":0,
				"elapsed_time":"00:00:00",
				"max_floor_id":"",
				"max_floor_count":0,
				"total_bloodnium":0
			},
			"playlog": save.getPlaylog(),
			"av":3,
			"dv":146,
			"e":"0",
			"st":0,
			"emsg":"",
			"eparam":"",
			"env":"prds",
			"accountId": save.getAccountId(),
			"json":1,
			"ctime": save.getCtime()
		});
	});
}