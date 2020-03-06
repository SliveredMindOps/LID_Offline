var save = require('../save.js');

module.exports = (req, resp) => {
	resp.send({
		"user": save.getUser(),
		"user_config_menu": save.getUserConfigMenu(),
		"user_research": save.getUserResearch(),
		"hitchart": save.getHitChart(),
		"loading_announces": save.getLoadingAnnounces(),
		"cl": save.getCl(),
		"all_quests": save.getAllQuests(),
		"play_log": save.getPlaylog(),
		"av":3,
		"dv":146,
		"e":"0",
		"st":0,
		"emsg":"",
		"eparam":"",
		"env":"prds",
		"accountId":save.getAccountId(),
		"json":1,
		"ctime": save.getCtime()
	});
}