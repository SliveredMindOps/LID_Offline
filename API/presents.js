var save = require('../save.js');

module.exports = (req, resp) => {
	var reqData = "";
	req.on('data', function(chunk){ reqData += chunk})
	req.on('end', function(){
		save.setSoul(JSON.parse(reqData)['soul']);
		resp.send({
			"user": save.getUser(),
			"presents": [
			{
				"pid": "0086fbed-46fc-489c-880b-d6adab265aa6",
				"uid": 459881,
				"from": "LOGIN",
				"type": "SPIRIT",
				"created": 1583516865,
				"num": 1000,
				"fromval": "",
				"kind": "",
				"val0": "",
				"val1": 0,
				"val2": 0,
				"val3": 0,
				"val4": 0
			},
			{
				"pid": "060483c3-11c2-4090-8b77-821e010e9385",
				"uid": 459881,
				"from": "LOGIN",
				"type": "ITTP_HEAL",
				"created": 1583276836,
				"num": 1,
				"fromval": "",
				"kind": "",
				"val0": "ITHEAL_HALF",
				"val1": 0,
				"val2": 0,
				"val3": 0,
				"val4": 0
			},
			{
				"pid": "09c775e8-6b31-4ede-9007-19b9ee65fc64",
				"uid": 459881,
				"from": "LOGIN",
				"type": "MEDAL",
				"created": 1583516865,
				"num": 4,
				"fromval": "",
				"kind": "",
				"val0": "",
				"val1": 0,
				"val2": 0,
				"val3": 0,
				"val4": 0
			},
			{
				"pid": "1722c73b-c6be-4f3f-ac55-8b6d7feb5dca",
				"uid": 459881,
				"from": "LOGIN",
				"type": "MONEY",
				"created": 1583317286,
				"num": 3000,
				"fromval": "",
				"kind": "",
				"val0": "",
				"val1": 0,
				"val2": 0,
				"val3": 0,
				"val4": 0
			},
			{
				"pid": "2a10976d-df93-4521-9946-231af66798e3",
				"uid": 459881,
				"from": "LOGIN",
				"type": "SKILL",
				"created": 1583444415,
				"num": 1,
				"fromval": "",
				"kind": "",
				"val0": "SKL_HPUP_02",
				"val1": 0,
				"val2": 0,
				"val3": 0,
				"val4": 0
			},
			{
				"pid": "6bb6e41d-31a2-4367-a40e-ce1c6fd0bffc",
				"uid": 459881,
				"from": "LOGIN",
				"type": "1VIP",
				"created": 1583317286,
				"num": 3,
				"fromval": "",
				"kind": "",
				"val0": "",
				"val1": 0,
				"val2": 0,
				"val3": 0,
				"val4": 0
			},
			{
				"pid": "892371f0-42eb-48f2-9ce9-9f4c5e001fbb",
				"uid": 459881,
				"from": "LOGIN",
				"type": "MEDAL",
				"created": 1583276836,
				"num": 4,
				"fromval": "",
				"kind": "",
				"val0": "",
				"val1": 0,
				"val2": 0,
				"val3": 0,
				"val4": 0
			},
			{
				"pid": "93a14830-4638-4999-98cd-8913ca7d37d4",
				"uid": 459881,
				"from": "LOGIN",
				"type": "SPIRIT",
				"created": 1583317286,
				"num": 10000,
				"fromval": "",
				"kind": "",
				"val0": "",
				"val1": 0,
				"val2": 0,
				"val3": 0,
				"val4": 0
			},
			{
				"pid": "a57a8fb3-98db-4663-aea8-95c48d970c9f",
				"uid": 459881,
				"from": "LOGIN",
				"type": "MONEY",
				"created": 1583276836,
				"num": 20000,
				"fromval": "",
				"kind": "",
				"val0": "",
				"val1": 0,
				"val2": 0,
				"val3": 0,
				"val4": 0
			},
			{
				"pid": "ac465aea-23e7-49d0-a851-6e8d249ee4b2",
				"uid": 459881,
				"from": "LOGIN",
				"type": "SPIRIT",
				"created": 1583516865,
				"num": 10000,
				"fromval": "",
				"kind": "",
				"val0": "",
				"val1": 0,
				"val2": 0,
				"val3": 0,
				"val4": 0
			},
			{
				"pid": "c12fe637-1bac-4d11-be77-4e173e92a576",
				"uid": 459881,
				"from": "LOGIN",
				"type": "MONEY",
				"created": 1583444415,
				"num": 20000,
				"fromval": "",
				"kind": "",
				"val0": "",
				"val1": 0,
				"val2": 0,
				"val3": 0,
				"val4": 0
			},
			{
				"pid": "ce3e27b9-f52d-447f-8a46-604287126c1e",
				"uid": 459881,
				"from": "LOGIN",
				"type": "MUSHROOM",
				"created": 1583444415,
				"num": 1,
				"fromval": "",
				"kind": "",
				"val0": "MSR_024",
				"val1": 0,
				"val2": 0,
				"val3": 0,
				"val4": 0
			}
			],
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