module.exports = (req, resp) => {
	resp.send({
		"uid": "696969",
		"psid": "LIDOFFLINE",
		"is_normal_end": 0,
		"region": "eu",
		"av": 3,
		"dv": 146,
		"e": "0",
		"st": 0,
		"emsg": "",
		"eparam": "",
		"env": "prds",
		"accountId": "",
		"json": 1,
		"ctime": {
			"sec": Date.now()/1000,
			"msec": 383,
			"svr": 1
		}
	});
}