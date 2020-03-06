var fs = require('fs');
var path = require('path');

const appDir = path.dirname(require.main.filename) + '/';

exports.getSoul = () => {
	if (!fs.existsSync(appDir + 'Save/soul.json')) {
		console.log("soul doesnt exist yet. creating from template");

		var templSoul = fs.readFileSync(appDir + 'SaveTemplates/soul_start.json');
		fs.writeFileSync(appDir + 'Save/soul.json', templSoul);
		return JSON.parse(templSoul)["soul"];
	}

	return JSON.parse(fs.readFileSync(appDir + 'Save/soul.json'))["soul"];
}

exports.setSoul = (soul) => {
	fs.writeFileSync(appDir + 'Save/soul.json', JSON.stringify({'soul':soul}));
}

exports.getUser = () => {
	if (!fs.existsSync(appDir + 'Save/user.json')) {
		console.log("user doesnt exist yet. creating from template");

		var templUser = fs.readFileSync(appDir + 'SaveTemplates/user_start.json');
		templUser = JSON.parse(templUser);
		templUser["user"]["soul"] = exports.getSoul();
		fs.writeFileSync(appDir + 'Save/user.json', JSON.stringify(templUser));
		return templUser["user"];
	}

	var user = JSON.parse(fs.readFileSync(appDir + 'Save/user.json'))
	user["user"]["soul"] = exports.getSoul();
	return user["user"];
}

exports.setUser = (user) => {
	exports.setSoul(user['soul']);
	fs.writeFileSync(appDir + 'Save/user.json', JSON.stringify({'user':user}));
}

exports.getUserConfigMenu = () => {
	if (!fs.existsSync(appDir + 'Save/user_config_menu.json')) {
		console.log("user_config_menu doesnt exist yet. creating from template");

		var templ = fs.readFileSync(appDir + 'SaveTemplates/user_config_menu_start.json');
		fs.writeFileSync(appDir + 'Save/user_config_menu.json', templ);
		return JSON.parse(templ)["user_config_menu"];
	}

	return JSON.parse(fs.readFileSync(appDir + 'Save/user_config_menu.json'))["user_config_menu"];
}

exports.getUserResearch = () => {
	if (!fs.existsSync(appDir + 'Save/user_research.json')) {
		console.log("user_research doesnt exist yet. creating from template");

		var templ = fs.readFileSync(appDir + 'SaveTemplates/user_research_start.json');
		fs.writeFileSync(appDir + 'Save/user_research.json', templ);
		return JSON.parse(templ)["user_research"];
	}

	return JSON.parse(fs.readFileSync(appDir + 'Save/user_research.json'))["user_research"];
}

exports.getHitChart = () => {
	if (!fs.existsSync(appDir + 'Save/hitchart.json')) {
		console.log("hitchart doesnt exist yet. creating from template");

		var templ = fs.readFileSync(appDir + 'SaveTemplates/hitchart_start.json');
		fs.writeFileSync(appDir + 'Save/hitchart.json', templ);
		return JSON.parse(templ)["hitchart"];
	}

	return JSON.parse(fs.readFileSync(appDir + 'Save/hitchart.json'))["hitchart"];
}

exports.getLoadingAnnounces = () => {
	if (!fs.existsSync(appDir + 'Save/loading_announces.json')) {
		console.log("loading_announces doesnt exist yet. creating from template");

		var templ = fs.readFileSync(appDir + 'SaveTemplates/loading_announces_start.json');
		fs.writeFileSync(appDir + 'Save/loading_announces.json', templ);
		return JSON.parse(templ)["loading_announces"];
	}

	return JSON.parse(fs.readFileSync(appDir + 'Save/loading_announces.json'))["loading_announces"];
}

exports.getCl = () => {
	if (!fs.existsSync(appDir + 'Save/cl.json')) {
		console.log("cl doesnt exist yet. creating from template");

		var templ = fs.readFileSync(appDir + 'SaveTemplates/cl_start.json');
		fs.writeFileSync(appDir + 'Save/cl.json', templ);
		return JSON.parse(templ)["cl"];
	}

	return JSON.parse(fs.readFileSync(appDir + 'Save/cl.json'))["cl"];
}

exports.getAllQuests = () => {
	if (!fs.existsSync(appDir + 'Save/all_quests.json')) {
		console.log("all_quests doesnt exist yet. creating from template");

		var templ = fs.readFileSync(appDir + 'SaveTemplates/all_quests_start.json');
		fs.writeFileSync(appDir + 'Save/all_quests.json', templ);
		return JSON.parse(templ)["all_quests"];
	}

	return JSON.parse(fs.readFileSync(appDir + 'Save/all_quests.json'))["all_quests"];
}

exports.getPlaylog = () => {
	if (!fs.existsSync(appDir + 'Save/playlog.json')) {
		console.log("playlog doesnt exist yet. creating from template");

		var templ = fs.readFileSync(appDir + 'SaveTemplates/playlog_start.json');
		fs.writeFileSync(appDir + 'Save/playlog.json', templ);
		return JSON.parse(templ)["playlog"];
	}

	return JSON.parse(fs.readFileSync(appDir + 'Save/playlog.json'))["playlog"];
}

exports.getAv = () => 3;
exports.getDv = () => 146;
exports.getE = () => "0";
exports.getSt = () => 0;
exports.getEmsg = () => "";
exports.getEparam = () => "";
exports.getEnv = () => "prds";
exports.getAccountId = () => "LET_IT_DIE_OFFLINE";
exports.getJson = () => 1;
exports.getCtime = () => {
	return {
		"sec":Date.now()/1000,
		"msec":77,
		"svr":1
	}
};

exports.getTutorialState = () => {
	if (!fs.existsSync(appDir + 'Save/tutorial.json')) {
		console.log("tutorial doesnt exist yet. creating from template");

		var templ = fs.readFileSync(appDir + 'SaveTemplates/tutorial_start.json');
		fs.writeFileSync(appDir + 'Save/tutorial.json', templ);
		return JSON.parse(templ)["tutorial"];
	}

	return JSON.parse(fs.readFileSync(appDir + 'Save/tutorial.json'))["tutorial"];
}

exports.setTutorialState = (tutorial) => {
	fs.writeFileSync(appDir + 'Save/tutorial.json', JSON.stringify({'tutorial':tutorial}));
}