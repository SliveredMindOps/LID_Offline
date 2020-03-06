var save = require('../save.js');

module.exports = (req, resp) => {
	var reqData = "";
	req.on('data', function(chunk){ reqData += chunk})
	req.on('end', function() {
		save.setSoul(JSON.parse(reqData)['param']['soul']);
		var templinfo = require('../Data/tmpl/tutorial.json')['tmplinfo'];

		if(save.getTutorialState() > 20) {
			templinfo = require('../Data/tmpl/main.json')['tmplinfo'];
		}

		resp.send({
			"user": save.getUser(),
			"is_defending": 0,
			"is_imagetraining": 0,
			"is_new_quest": 0,
			"tmplinfo": templinfo,
			"msgs": [],
			"defstate": {
				"assaulted": 0,
				"breaksb": 0,
				"breakst": 0,
				"diedcnt": 0,
				"rwdpts": [],
				"rwdspirit": 0,
				"robbed_money": [],
				"robbed_spirit": [],
				"insured_money": [],
				"insured_spirit": []
			},
			"fortkun": 0,
			"wars": require('../Data/wars/wars.json')['wars'],
			"teams": require('../Data/teams/teams.json')['teams'],
			"hitchart": save.getHitChart(),
			"loading_announces": save.getLoadingAnnounces(),
			"onetime_announces": [],
			"prison": [],
			"deathbox": [],
			"replica_money": -1,
			"replica_spirit": -1,
			"replica_bloodnium_point": -1,
			"hubcustomize": require('../Data/hubcustomize/hubcustomize.json')['hubcustomize'],
			"bld_result": {
				"enemy_count": 0,
				"bloodnium": 0,
				"msr_bloodnium": 0,
				"vip_bonus_rate": 0,
				"travel_bonus_rate": 0,
				"kill_bonus_rate": 0,
				"force_shutdown_penalty_count": 0,
				"force_shutdown_penalty_rate": 0,
				"elapsed_time": "00:00:00",
				"max_floor_id": "",
				"max_floor_count": 0,
				"total_bloodnium": 0
			},
			"del_old_quest": 0,
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