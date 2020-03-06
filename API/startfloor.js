var save = require('../save.js');

module.exports = (req, resp) => {
	var reqData = "";
	req.on('data', function(chunk){ reqData += chunk})
	req.on('end', function(){
		save.setSoul(JSON.parse(reqData)['param']['soul']);
		var flr = require('../Data/floors/tutorial_1.json')['flr'];

		if(save.getTutorialState() > 20) {
			flr = require('../Data/floors/main.json')['flr'];
		}

		resp.send({
			"flr": flr,
			"user": save.getUser(),
			"msgs": [],
			"rescuelog": [],
			"deathbox": "COPPER",
			"playlog": save.getPlaylog(),
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
		/*resp.send({
			"flr": {
				"stgid": "S_MET",
				"stgpfx": "Metro",
				"flrid": "MET_FLR_01",
				"flrno": 1,
				"areaid": "MET_AREA_TUTRIAL",
				"unitid": "METRO_START_V01",
				"refstgid": "S_MET",
				"refstgpfx": "Metro",
				"refareaid": "MET_AREA_TUTRIAL",
				"escl": {
					"ups": [],
					"downs": []
				},
				"name": "AREA_NAME.TXT_MET_0000",
				"sname": "1",
				"dbg": 0,
				"units": [
				{
					"unit": "A26_ST",
					"kis": "A26_ST_KIS2",
					"pntlsts": []
				},
				{
					"unit": "START_V03_1_ST",
					"kis": "",
					"pntlsts": []
				},
				{
					"unit": "A18_ST_V01",
					"kis": "A18_ST_V01_KIS2",
					"pntlsts": [
					{
						"type": "TGTPNTTP_TRBOX",
						"pnts": [
						"MET_TB_TGT_10",
						"MET_TB_TGT_13",
						"MET_TB_TGT_14",
						"MET_TB_TGT_15",
						"MET_TB_TGT_20"
						]
					}
					]
				},
				{
					"unit": "START_V03",
					"kis": "START_V03_KIS2",
					"pntlsts": [
					{
						"type": "TGTPNTTP_ZMB",
						"pnts": [
						"MET_ZMB_TGT_05",
						"MET_ZMB_TGT_06",
						"MET_ZMB_TGT_07",
						"MET_ZMB_TGT_08",
						"MET_ZMB_TGT_09",
						"MET_ZMB_TGT_10",
						"MET_ZMB_TGT_11",
						"MET_ZMB_TGT_12",
						"MET_ZMB_TGT_13",
						"MET_ZMB_TGT_14",
						"MET_ZMB_TGT_15",
						"MET_ZMB_TGT_16",
						"MET_ZMB_TGT_17",
						"MET_ZMB_TGT_18",
						"MET_ZMB_TGT_19",
						"MET_ZMB_TGT_20",
						"MET_ZMB_TGT_21",
						"MET_ZMB_TGT_22",
						"MET_ZMB_TGT_23"
						]
					}
					]
				},
				{
					"unit": "A02_CV_V01",
					"kis": "A02_CV_V01_KIS2",
					"pntlsts": [
					{
						"type": "TGTPNTTP_ITEM",
						"pnts": [
						"MET_ITM_TGT_02"
						]
					},
					{
						"type": "TGTPNTTP_MSR",
						"pnts": [
						"MET_MSR_TGT_02"
						]
					},
					{
						"type": "TGTPNTTP_TRBOX",
						"pnts": [
						"MET_TB_TGT_00",
						"MET_TB_TGT_01",
						"MET_TB_TGT_02",
						"MET_TB_TGT_03",
						"MET_TB_TGT_04",
						"MET_TB_TGT_05",
						"MET_TB_TGT_06",
						"MET_TB_TGT_07",
						"MET_TB_TGT_08",
						"MET_TB_TGT_09",
						"MET_TB_TGT_10"
						]
					}
					]
				},
				{
					"unit": "A21_ST_V02",
					"kis": "A21_ST_V02_KIS2",
					"pntlsts": [
					{
						"type": "TGTPNTTP_BST",
						"pnts": [
						"MET_BST_TGT_01",
						"MET_BST_TGT_02"
						]
					},
					{
						"type": "TGTPNTTP_ZMB",
						"pnts": [
						"MET_ZMB_TGT_03",
						"MET_ZMB_TGT_04",
						"MET_ZMB_TGT_05",
						"MET_ZMB_TGT_06",
						"MET_ZMB_TGT_07",
						"MET_ZMB_TGT_08",
						"MET_ZMB_TGT_09",
						"MET_ZMB_TGT_10",
						"MET_ZMB_TGT_11"
						]
					}
					]
				},
				{
					"unit": "A12_ST_V02",
					"kis": "A12_ST_V02_KIS2",
					"pntlsts": []
				},
				{
					"unit": "A23_ST_V02",
					"kis": "A23_ST_V02_KIS2",
					"pntlsts": [
					{
						"type": "TGTPNTTP_BST",
						"pnts": [
						"MET_BST_TGT_00",
						"MET_BST_TGT_01",
						"MET_BST_TGT_02"
						]
					},
					{
						"type": "TGTPNTTP_ZMB",
						"pnts": [
						"MET_ZMB_TGT_00",
						"MET_ZMB_TGT_01",
						"MET_ZMB_TGT_02",
						"MET_ZMB_TGT_03",
						"MET_ZMB_TGT_04"
						]
					}
					]
				},
				{
					"unit": "START_V01",
					"kis": "START_V01_KIS2",
					"pntlsts": [
					{
						"type": "TGTPNTTP_DUST",
						"pnts": [
						"MET_DST_TGT_00"
						]
					},
					{
						"type": "TGTPNTTP_MSR",
						"pnts": [
						"MET_MSR_TGT_00",
						"MET_MSR_TGT_01",
						"MET_MSR_TGT_02",
						"MET_MSR_TGT_03"
						]
					}
					]
				}
				],
				"rlg": "CQAAAAkAAACI+UpGAEAcRQAAAAAQAAAADQAAACAAAAAAAAAADAAAAE0AZQB0AHIAbwBfAEEAMgA2AF8AUwBUAAEAAAAAAAAAAAAAAP////8AAAAAAgAAAAAgncQDAAAAAgAAAP////8AAAAAAAAAAAIAAAD/////AAAAAAAAAAAAAAAAAQAAAAAAAAABAAAAAgAAAP////8AAAAAAAAAAAIAAAD/////AAAAAAAAAAAwRXgG/38AAK1EQQAAAAAAfAAAAAAAAADAe0oBAAAAAHh3SgEAAAAAYOeLz6t/AAB4d0oBAAAAAHh3SgEAAAAA/////wAAAAAEUQdGAAAAAAAAG8MQAAAADgAAAAAAAAAAAAAAFAAAAE0AZQB0AHIAbwBfAFMAdABhAHIAdABfAHYAMAAzAF8AMQBfAFMAVAABAAAAAAAAAAAAAAD/////AAAAAAAAAAAAABtDAQAAAAIAAAD/////AAAAAAAAAAACAAAA/////wAAAAAAAAAAAAAAAAMAAAAAABtDCQAAAAIAAAD/////AAAAAAAAAAACAAAA/////wAAAAAAAAAAIEN4Bv9/AAAAAAAAAAAAABBOeAb/fwAAhEN4Bv9/AAAQQ3gG/38AAPi5QAAAAAAADQAAAAAAAAAQTngG/38AAEBDeAb/fwAABFGHRgBAnEUAQJ3EEQAAAAwAAAAAAAAAAAAAABAAAABNAGUAdAByAG8AXwBBADEAOABfAFMAVABfAHYAMAAxAAQAAAAAAAAAAAAAAP////8AAAAABAAAAAAAgD8EAAAAAgAAAP////8AAAAAAAAAAAIAAAD/////AAAAAAAAAAAAAAAAAAAAAAAAgD8DAAAAAgAAAP////8AAAAAAAAAAAIAAAD/////AAAAAAAAAAAgQ3gG/38AAAAAAAAAAAAAEE54Bv9/AACEQ3gG/38AABBDeAb/fwAA+LlAAAAAAAANAAAAAAAAABBOeAb/fwAAQEN4Bv9/AAAAUYdFAEAcxQAAG8MPAAAADwAAAAQAAAAAAAAADwAAAE0AZQB0AHIAbwBfAFMAdABhAHIAdABfAHYAMAAzAAEAAAADAAAAAAAAAP////8AAAAAAQAAAAAAG0MJAAAAAgAAAP////8AAAAAAAAAAAIAAAD/////AAAAAAAAAAACAAAA/////wAAAAAAAAAAAgAAAP////8AAAAAAAAAAAIAAAD/////AAAAAAAAAAAAQXgG/38AAEzHQAAAAAAAGE54Bv9/AAAQTngG/38AACCCTAEAAAAAKIFMAQAAAAAgQXgG/38AAD7RQgAAAAAAKIFMAQAAAABEJalGAGDqRQAgncQRAAAACwAAAAAAAAAAAAAAEAAAAE0AZQB0AHIAbwBfAEEAMAAyAF8AQwBWAF8AdgAwADEAAwAAAAIAAAAAAAAA/////wIAAAD/////AAAAAAAAAAAAAAAABQAAAAAAAAAFAAAAAgAAAP////8AAAAAAAAAAAAAAAACAAAAAAAAAAQAAAACAAAA/////wAAAAAAAAAAAgAAAP////8AAAAAAAAAAAsAAAARAAAAAgAAAAAAAAAQTngG/38AAIRBeAb/fwAAEEF4Bv9/AAD4uUAAAAAAAAwAAAACAAAAEE54Bv9/AABAQXgG/38AAEQlqUYAUENGACCdxBIAAAALAAAAAAAAAAAAAAAQAAAATQBlAHQAcgBvAF8AQQAyADEAXwBTAFQAXwB2ADAAMgAAAAAAAAAAAAAAAAD/////AgAAAP////8AAAAAAAAAAAAAAAAGAAAAAAAAAAYAAAACAAAA/////wAAAAAAAAAAAgAAAP////8AAAAAAAAAAAAAAAAEAAAAAAAAAAUAAAACAAAA/////wAAAAAAAAAACwAAABIAAAAEAAAAAAAAABBOeAb/fwAAhD94Bv9/AAAQP3gG/38AAPi5QAAAAAAACwAAAAQAAAAQTngG/38AAEA/eAb/fwAARCWpRgC4iEYAgN7EEwAAAAsAAAAAAAAAAAAAABAAAABNAGUAdAByAG8AXwBBADEAMgBfAFMAVABfAHYAMAAyAAMAAAAAAAAAAAAAAP////8CAAAA/////wAAAAAAAAAAAAAAAAcAAAAAAEBABwAAAAIAAAD/////AAAAAAAAAAACAAAA/////wAAAAAAAAAAAAAAAAUAAAAAwAJEBgAAAAIAAAD/////AAAAAAAAAAALAAAAEwAAAAUAAAAAAAAAEE54Bv9/AACEPXgG/38AABA9eAb/fwAA+LlAAAAAAAALAAAABQAAABBOeAb/fwAAQD14Bv9/AABEJalGAMivRgAg3sQUAAAACwAAAAAAAAAAAAAAEAAAAE0AZQB0AHIAbwBfAEEAMgAzAF8AUwBUAF8AdgAwADIAAwAAAAAAAAAAAAAA/////wIAAAD/////AAAAAAAAAAAAAAAACAAAAAAAAAAIAAAAAgAAAP////8AAAAAAAAAAAIAAAD/////AAAAAAAAAAAAAAAABgAAAAAAAAAHAAAAAgAAAP////8AAAAAAAAAAAsAAAAUAAAAmEt4Bv9/AAALAAAAEwAAABCETAEAAAAAEDt4BgQAAACYS3gG/38AAHA7eAb/fwAAzwpCAAAAAABAO3gG/38AAEQlqUYA2NZGACDexBUAAAALAAAAAgAAAAAAAAAPAAAATQBlAHQAcgBvAF8AUwB0AGEAcgB0AF8AdgAwADEAAwAAAAMAAAAAAAAA/////wIAAAD/////AAAAAAAAAAACAAAA/////wAAAAAAAAAAAgAAAP////8AAAAAAAAAAAIAAAD/////AAAAAAAAAAAAAAAABwAAAAAAAAAIAAAAAgAAAP////8AAAAAAAAAAAA5eAb/fwAATMdAAAAAAAAYTngG/38AABBOeAb/fwAA+IZMAQAAAAAAhkwBAAAAACA5eAb/fwAAPtFCAAAAAAAAhkwBAAAAAAAAAAA=",
				"gmcdmgscale": 100,
				"zmbs": [
				{
					"zid": "d5c6668b-6cf2-42ba-b64d-d63fa96f75ad",
					"did": -1,
					"uid": -1,
					"clazz": 0,
					"name": "",
					"cname": "",
					"body": {
						"id": "BODY_FEMALE_007",
						"gender": "GENDER_FEMALE",
						"baid": "ASSET_FEMALE_BODY_007",
						"haid": "ASSET_FEMALE_HAIR_007",
						"colr": 1,
						"colg": 1,
						"colb": 1,
						"voicep": 7,
						"voiceb": 8,
						"provoke": 19
					},
					"gasmask": "",
					"attp": "ZMBATTP_PLAYER",
					"eqtp": "ZMBEQTP_CUSTOM",
					"lvl": 5,
					"type": "BAL",
					"grade": 1,
					"limit_break": 0,
					"atkup": 0,
					"defup": 0,
					"exp": 6,
					"abp": 0,
					"prio": 0,
					"zako": 0,
					"path": "",
					"state": 1,
					"vip": 0,
					"pspts": [
					{
						"eptid": "5049ecae-d669-4f72-b07e-290b3f3fda1c",
						"gettime": 0,
						"ptid": "PT_ARM_WP012_001",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 1036,
						"lvl": 1,
						"zid": "d5c6668b-6cf2-42ba-b64d-d63fa96f75ad"
					},
					{
						"eptid": "5f0b6c20-0662-4aef-bf16-d5960352b1a7",
						"gettime": 0,
						"ptid": "PT_DIY_BTM_009",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 625,
						"lvl": 1,
						"zid": "d5c6668b-6cf2-42ba-b64d-d63fa96f75ad"
					}
					],
					"eqpts": [
					{
						"eptid": "5049ecae-d669-4f72-b07e-290b3f3fda1c",
						"site": "EQSITE_ARMR"
					},
					{
						"eptid": "5f0b6c20-0662-4aef-bf16-d5960352b1a7",
						"site": "EQSITE_LEGS"
					}
					],
					"psskls": [],
					"mstlvl": [],
					"eqskls": [],
					"rwd": {
						"money": 71,
						"spirit": 0,
						"pts": [
						{
							"eptid": "5f0b6c20-0662-4aef-bf16-d5960352b1a7"
						}
						],
						"msrs": [],
						"items": [],
						"tbtp": ""
					},
					"stat": {
						"elms": []
					},
					"bodylvl": {
						"lvl": 5,
						"hp": 2,
						"str": 2,
						"dex": 2,
						"vit": 2,
						"stm": 1,
						"luk": 1,
						"skill": 0,
						"bag": 0
					},
					"bodybonus": {
						"hp_bonus": 0,
						"str_bonus": 0,
						"dex_bonus": 0,
						"vit_bonus": 0,
						"stm_bonus": 0,
						"luk_bonus": 0
					},
					"hunter": 0,
					"hp": 230,
					"emblem": "",
					"teamname": "",
					"isduring": 0,
					"isfriend": 0,
					"bodymaxlvl": 6,
					"unit": "A21_ST_V02",
					"pntid": "MET_ZMB_TGT_09"
				},
				{
					"zid": "62b19fc8-6e3f-4c56-a886-04fd54009c83",
					"did": -1,
					"uid": -1,
					"clazz": 0,
					"name": "",
					"cname": "",
					"body": {
						"id": "BODY_MALE_007",
						"gender": "GENDER_MALE",
						"baid": "ASSET_MALE_BODY_007",
						"haid": "ASSET_MALE_HAIR_007",
						"colr": 1,
						"colg": 1,
						"colb": 1,
						"voicep": 7,
						"voiceb": 4,
						"provoke": 19
					},
					"gasmask": "",
					"attp": "ZMBATTP_PLAYER",
					"eqtp": "ZMBEQTP_CUSTOM",
					"lvl": 30,
					"type": "OLD",
					"grade": 1,
					"limit_break": 0,
					"atkup": 0,
					"defup": 0,
					"exp": 40,
					"abp": 0,
					"prio": 0,
					"zako": 0,
					"path": "",
					"state": 1,
					"vip": 0,
					"pspts": [
					{
						"eptid": "a7720160-d8d0-4af7-a407-9516a7be794c",
						"gettime": 0,
						"ptid": "PT_ARM_WP020_001",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 1092,
						"lvl": 1,
						"zid": "62b19fc8-6e3f-4c56-a886-04fd54009c83"
					},
					{
						"eptid": "87691fe5-ecbc-4bcc-8dde-60941bf1b058",
						"gettime": 0,
						"ptid": "PT_ARM_WP020_001",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 1400,
						"lvl": 1,
						"zid": "62b19fc8-6e3f-4c56-a886-04fd54009c83"
					},
					{
						"eptid": "26eb22fa-c28a-4312-8ed0-b98a1a2afe89",
						"gettime": 0,
						"ptid": "PT_FAN_TOPS_003",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 656,
						"lvl": 1,
						"zid": "62b19fc8-6e3f-4c56-a886-04fd54009c83"
					},
					{
						"eptid": "27900bdd-bccf-4bea-944d-b9b197a42567",
						"gettime": 0,
						"ptid": "PT_MIL_HEAD_005",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 345,
						"lvl": 1,
						"zid": "62b19fc8-6e3f-4c56-a886-04fd54009c83"
					},
					{
						"eptid": "3b308b06-a956-4714-9a4f-e630d45cd767",
						"gettime": 0,
						"ptid": "PT_SPO_BTM_002",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 611,
						"lvl": 1,
						"zid": "62b19fc8-6e3f-4c56-a886-04fd54009c83"
					}
					],
					"eqpts": [
					{
						"eptid": "a7720160-d8d0-4af7-a407-9516a7be794c",
						"site": "EQSITE_ARML"
					},
					{
						"eptid": "87691fe5-ecbc-4bcc-8dde-60941bf1b058",
						"site": "EQSITE_ARMR"
					},
					{
						"eptid": "26eb22fa-c28a-4312-8ed0-b98a1a2afe89",
						"site": "EQSITE_BODY"
					},
					{
						"eptid": "27900bdd-bccf-4bea-944d-b9b197a42567",
						"site": "EQSITE_HEAD"
					},
					{
						"eptid": "3b308b06-a956-4714-9a4f-e630d45cd767",
						"site": "EQSITE_LEGS"
					}
					],
					"psskls": [],
					"mstlvl": [],
					"eqskls": [],
					"rwd": {
						"money": 96,
						"spirit": 0,
						"pts": [],
						"msrs": [],
						"items": [],
						"tbtp": ""
					},
					"stat": {
						"elms": []
					},
					"bodylvl": {
						"lvl": 30,
						"hp": 6,
						"str": 6,
						"dex": 6,
						"vit": 6,
						"stm": 6,
						"luk": 5,
						"skill": 0,
						"bag": 0
					},
					"bodybonus": {
						"hp_bonus": 0,
						"str_bonus": 0,
						"dex_bonus": 0,
						"vit_bonus": 0,
						"stm_bonus": 0,
						"luk_bonus": 0
					},
					"hunter": 0,
					"hp": 288,
					"emblem": "",
					"teamname": "",
					"isduring": 0,
					"isfriend": 0,
					"bodymaxlvl": 60,
					"unit": "START_V03",
					"pntid": "MET_ZMB_TGT_17"
				},
				{
					"zid": "41696a2f-2aee-47c2-84e5-efeabe48860c",
					"did": -1,
					"uid": -1,
					"clazz": 0,
					"name": "",
					"cname": "",
					"body": {
						"id": "BODY_FEMALE_007",
						"gender": "GENDER_FEMALE",
						"baid": "ASSET_FEMALE_BODY_007",
						"haid": "ASSET_FEMALE_HAIR_007",
						"colr": 1,
						"colg": 1,
						"colb": 1,
						"voicep": 7,
						"voiceb": 8,
						"provoke": 19
					},
					"gasmask": "",
					"attp": "ZMBATTP_PLAYER",
					"eqtp": "ZMBEQTP_CUSTOM",
					"lvl": 5,
					"type": "BAL",
					"grade": 1,
					"limit_break": 0,
					"atkup": 0,
					"defup": 0,
					"exp": 6,
					"abp": 0,
					"prio": 0,
					"zako": 0,
					"path": "",
					"state": 1,
					"vip": 0,
					"pspts": [
					{
						"eptid": "3ff3dd39-11c2-4a91-9b53-0a0c4d99bbd6",
						"gettime": 0,
						"ptid": "PT_ARM_WP012_001",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 489,
						"lvl": 1,
						"zid": "41696a2f-2aee-47c2-84e5-efeabe48860c"
					},
					{
						"eptid": "fadf6128-8b5e-442e-aff8-aa30382cce64",
						"gettime": 0,
						"ptid": "PT_DIY_BTM_003",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 274,
						"lvl": 1,
						"zid": "41696a2f-2aee-47c2-84e5-efeabe48860c"
					}
					],
					"eqpts": [
					{
						"eptid": "3ff3dd39-11c2-4a91-9b53-0a0c4d99bbd6",
						"site": "EQSITE_ARMR"
					},
					{
						"eptid": "fadf6128-8b5e-442e-aff8-aa30382cce64",
						"site": "EQSITE_LEGS"
					}
					],
					"psskls": [],
					"mstlvl": [],
					"eqskls": [],
					"rwd": {
						"money": 69,
						"spirit": 0,
						"pts": [
						{
							"eptid": "fadf6128-8b5e-442e-aff8-aa30382cce64"
						}
						],
						"msrs": [],
						"items": [],
						"tbtp": ""
					},
					"stat": {
						"elms": []
					},
					"bodylvl": {
						"lvl": 5,
						"hp": 2,
						"str": 2,
						"dex": 2,
						"vit": 2,
						"stm": 1,
						"luk": 1,
						"skill": 0,
						"bag": 0
					},
					"bodybonus": {
						"hp_bonus": 0,
						"str_bonus": 0,
						"dex_bonus": 0,
						"vit_bonus": 0,
						"stm_bonus": 0,
						"luk_bonus": 0
					},
					"hunter": 0,
					"hp": 230,
					"emblem": "",
					"teamname": "",
					"isduring": 0,
					"isfriend": 0,
					"bodymaxlvl": 6,
					"unit": "A21_ST_V02",
					"pntid": "MET_ZMB_TGT_07"
				},
				{
					"zid": "7bccbb32-8346-4151-8975-068a53f9a9b9",
					"did": -1,
					"uid": -1,
					"clazz": 0,
					"name": "",
					"cname": "",
					"body": {
						"id": "BODY_FEMALE_005",
						"gender": "GENDER_FEMALE",
						"baid": "ASSET_FEMALE_BODY_005",
						"haid": "ASSET_FEMALE_HAIR_005",
						"colr": 1,
						"colg": 1,
						"colb": 1,
						"voicep": 5,
						"voiceb": 7,
						"provoke": 13
					},
					"gasmask": "",
					"attp": "ZMBATTP_PLAYER",
					"eqtp": "ZMBEQTP_CUSTOM",
					"lvl": 8,
					"type": "OLD",
					"grade": 1,
					"limit_break": 0,
					"atkup": 0,
					"defup": 0,
					"exp": 20,
					"abp": 0,
					"prio": 0,
					"zako": 0,
					"path": "",
					"state": 1,
					"vip": 0,
					"pspts": [
					{
						"eptid": "9a0b5583-f10e-4529-94a1-3a2efe555fb3",
						"gettime": 0,
						"ptid": "PT_ARM_WP013_001",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 1190,
						"lvl": 1,
						"zid": "7bccbb32-8346-4151-8975-068a53f9a9b9"
					},
					{
						"eptid": "92d6eb8b-f6ef-4839-b4f6-c3ea76a45c59",
						"gettime": 0,
						"ptid": "PT_DIY_TOPS_014",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 761,
						"lvl": 1,
						"zid": "7bccbb32-8346-4151-8975-068a53f9a9b9"
					},
					{
						"eptid": "17ae242a-c9ef-41c9-a93b-c2a37e97fa79",
						"gettime": 0,
						"ptid": "PT_DIY_HEAD_014",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 220,
						"lvl": 1,
						"zid": "7bccbb32-8346-4151-8975-068a53f9a9b9"
					}
					],
					"eqpts": [
					{
						"eptid": "9a0b5583-f10e-4529-94a1-3a2efe555fb3",
						"site": "EQSITE_ARMR"
					},
					{
						"eptid": "92d6eb8b-f6ef-4839-b4f6-c3ea76a45c59",
						"site": "EQSITE_BODY"
					},
					{
						"eptid": "17ae242a-c9ef-41c9-a93b-c2a37e97fa79",
						"site": "EQSITE_HEAD"
					}
					],
					"psskls": [],
					"mstlvl": [],
					"eqskls": [],
					"rwd": {
						"money": 66,
						"spirit": 0,
						"pts": [],
						"msrs": [],
						"items": [],
						"tbtp": ""
					},
					"stat": {
						"elms": []
					},
					"bodylvl": {
						"lvl": 8,
						"hp": 3,
						"str": 2,
						"dex": 2,
						"vit": 2,
						"stm": 2,
						"luk": 2,
						"skill": 0,
						"bag": 0
					},
					"bodybonus": {
						"hp_bonus": 0,
						"str_bonus": 0,
						"dex_bonus": 0,
						"vit_bonus": 0,
						"stm_bonus": 0,
						"luk_bonus": 0
					},
					"hunter": 0,
					"hp": 233,
					"emblem": "",
					"teamname": "",
					"isduring": 0,
					"isfriend": 0,
					"bodymaxlvl": 60,
					"unit": "START_V03",
					"pntid": "MET_ZMB_TGT_12"
				},
				{
					"zid": "5c072cdf-56e2-4d3f-9410-8811306d5204",
					"did": -1,
					"uid": -1,
					"clazz": 0,
					"name": "",
					"cname": "",
					"body": {
						"id": "BODY_MALE_002",
						"gender": "GENDER_MALE",
						"baid": "ASSET_MALE_BODY_002",
						"haid": "",
						"colr": 1,
						"colg": 1,
						"colb": 1,
						"voicep": 2,
						"voiceb": 1,
						"provoke": 4
					},
					"gasmask": "",
					"attp": "ZMBATTP_PLAYER",
					"eqtp": "ZMBEQTP_CUSTOM",
					"lvl": 30,
					"type": "OLD",
					"grade": 1,
					"limit_break": 0,
					"atkup": 0,
					"defup": 0,
					"exp": 40,
					"abp": 0,
					"prio": 0,
					"zako": 0,
					"path": "",
					"state": 1,
					"vip": 0,
					"pspts": [
					{
						"eptid": "9eed3c53-edd3-4338-a954-7ce3dd4b86d8",
						"gettime": 0,
						"ptid": "PT_ARM_WP020_001",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 1036,
						"lvl": 1,
						"zid": "5c072cdf-56e2-4d3f-9410-8811306d5204"
					},
					{
						"eptid": "2b92be5a-50f8-47de-8c93-786209c0e55c",
						"gettime": 0,
						"ptid": "PT_ARM_WP020_001",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 672,
						"lvl": 1,
						"zid": "5c072cdf-56e2-4d3f-9410-8811306d5204"
					},
					{
						"eptid": "46105e7f-08e9-41c0-aea7-8b70c70a909d",
						"gettime": 0,
						"ptid": "PT_FAN_TOPS_003",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 735,
						"lvl": 1,
						"zid": "5c072cdf-56e2-4d3f-9410-8811306d5204"
					},
					{
						"eptid": "bc2617fb-fc5d-4291-8d5d-d07cbd56ccb0",
						"gettime": 0,
						"ptid": "PT_MIL_HEAD_005",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 380,
						"lvl": 1,
						"zid": "5c072cdf-56e2-4d3f-9410-8811306d5204"
					},
					{
						"eptid": "57b0aa67-350d-4ca4-8346-6f7541f8d0ae",
						"gettime": 0,
						"ptid": "PT_SPO_BTM_002",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 522,
						"lvl": 1,
						"zid": "5c072cdf-56e2-4d3f-9410-8811306d5204"
					}
					],
					"eqpts": [
					{
						"eptid": "9eed3c53-edd3-4338-a954-7ce3dd4b86d8",
						"site": "EQSITE_ARML"
					},
					{
						"eptid": "2b92be5a-50f8-47de-8c93-786209c0e55c",
						"site": "EQSITE_ARMR"
					},
					{
						"eptid": "46105e7f-08e9-41c0-aea7-8b70c70a909d",
						"site": "EQSITE_BODY"
					},
					{
						"eptid": "bc2617fb-fc5d-4291-8d5d-d07cbd56ccb0",
						"site": "EQSITE_HEAD"
					},
					{
						"eptid": "57b0aa67-350d-4ca4-8346-6f7541f8d0ae",
						"site": "EQSITE_LEGS"
					}
					],
					"psskls": [],
					"mstlvl": [],
					"eqskls": [],
					"rwd": {
						"money": 88,
						"spirit": 0,
						"pts": [],
						"msrs": [],
						"items": [],
						"tbtp": ""
					},
					"stat": {
						"elms": []
					},
					"bodylvl": {
						"lvl": 30,
						"hp": 6,
						"str": 6,
						"dex": 6,
						"vit": 6,
						"stm": 6,
						"luk": 5,
						"skill": 0,
						"bag": 0
					},
					"bodybonus": {
						"hp_bonus": 0,
						"str_bonus": 0,
						"dex_bonus": 0,
						"vit_bonus": 0,
						"stm_bonus": 0,
						"luk_bonus": 0
					},
					"hunter": 0,
					"hp": 288,
					"emblem": "",
					"teamname": "",
					"isduring": 0,
					"isfriend": 0,
					"bodymaxlvl": 60,
					"unit": "START_V03",
					"pntid": "MET_ZMB_TGT_15"
				},
				{
					"zid": "1f100705-73fb-4258-9ef9-97658d80609a",
					"did": -1,
					"uid": -1,
					"clazz": 0,
					"name": "",
					"cname": "",
					"body": {
						"id": "BODY_MALE_002",
						"gender": "GENDER_MALE",
						"baid": "ASSET_MALE_BODY_002",
						"haid": "",
						"colr": 1,
						"colg": 1,
						"colb": 1,
						"voicep": 2,
						"voiceb": 1,
						"provoke": 4
					},
					"gasmask": "",
					"attp": "ZMBATTP_PLAYER",
					"eqtp": "ZMBEQTP_CUSTOM",
					"lvl": 30,
					"type": "OLD",
					"grade": 1,
					"limit_break": 0,
					"atkup": 0,
					"defup": 0,
					"exp": 40,
					"abp": 0,
					"prio": 0,
					"zako": 0,
					"path": "",
					"state": 1,
					"vip": 0,
					"pspts": [
					{
						"eptid": "652d1911-6084-4488-8e96-258d1c3d6790",
						"gettime": 0,
						"ptid": "PT_ARM_WP020_001",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 616,
						"lvl": 1,
						"zid": "1f100705-73fb-4258-9ef9-97658d80609a"
					},
					{
						"eptid": "df88fee8-52ec-41c0-aefd-d866bf94b216",
						"gettime": 0,
						"ptid": "PT_ARM_WP020_001",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 1232,
						"lvl": 1,
						"zid": "1f100705-73fb-4258-9ef9-97658d80609a"
					},
					{
						"eptid": "fd1ac5f2-8ab0-4e31-8612-009b04b2d344",
						"gettime": 0,
						"ptid": "PT_FAN_TOPS_003",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 691,
						"lvl": 1,
						"zid": "1f100705-73fb-4258-9ef9-97658d80609a"
					},
					{
						"eptid": "21d71cdb-b594-4e88-90b8-5e7bf2212534",
						"gettime": 0,
						"ptid": "PT_MIL_HEAD_005",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 420,
						"lvl": 1,
						"zid": "1f100705-73fb-4258-9ef9-97658d80609a"
					},
					{
						"eptid": "6b0b2f0d-5a86-4b93-98c0-22fac47c3b6f",
						"gettime": 0,
						"ptid": "PT_SPO_BTM_002",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 645,
						"lvl": 1,
						"zid": "1f100705-73fb-4258-9ef9-97658d80609a"
					}
					],
					"eqpts": [
					{
						"eptid": "652d1911-6084-4488-8e96-258d1c3d6790",
						"site": "EQSITE_ARML"
					},
					{
						"eptid": "df88fee8-52ec-41c0-aefd-d866bf94b216",
						"site": "EQSITE_ARMR"
					},
					{
						"eptid": "fd1ac5f2-8ab0-4e31-8612-009b04b2d344",
						"site": "EQSITE_BODY"
					},
					{
						"eptid": "21d71cdb-b594-4e88-90b8-5e7bf2212534",
						"site": "EQSITE_HEAD"
					},
					{
						"eptid": "6b0b2f0d-5a86-4b93-98c0-22fac47c3b6f",
						"site": "EQSITE_LEGS"
					}
					],
					"psskls": [],
					"mstlvl": [],
					"eqskls": [],
					"rwd": {
						"money": 102,
						"spirit": 0,
						"pts": [],
						"msrs": [],
						"items": [],
						"tbtp": ""
					},
					"stat": {
						"elms": []
					},
					"bodylvl": {
						"lvl": 30,
						"hp": 6,
						"str": 6,
						"dex": 6,
						"vit": 6,
						"stm": 6,
						"luk": 5,
						"skill": 0,
						"bag": 0
					},
					"bodybonus": {
						"hp_bonus": 0,
						"str_bonus": 0,
						"dex_bonus": 0,
						"vit_bonus": 0,
						"stm_bonus": 0,
						"luk_bonus": 0
					},
					"hunter": 0,
					"hp": 288,
					"emblem": "",
					"teamname": "",
					"isduring": 0,
					"isfriend": 0,
					"bodymaxlvl": 60,
					"unit": "START_V03",
					"pntid": "MET_ZMB_TGT_20"
				},
				{
					"zid": "6fdd2928-e90f-4202-8e71-b6fd92f3dca1",
					"did": -1,
					"uid": -1,
					"clazz": 0,
					"name": "",
					"cname": "",
					"body": {
						"id": "BODY_MALE_002",
						"gender": "GENDER_MALE",
						"baid": "ASSET_MALE_BODY_002",
						"haid": "",
						"colr": 1,
						"colg": 1,
						"colb": 1,
						"voicep": 2,
						"voiceb": 1,
						"provoke": 4
					},
					"gasmask": "",
					"attp": "ZMBATTP_PLAYER",
					"eqtp": "ZMBEQTP_CUSTOM",
					"lvl": 7,
					"type": "OLD",
					"grade": 1,
					"limit_break": 0,
					"atkup": 0,
					"defup": 0,
					"exp": 19,
					"abp": 0,
					"prio": 0,
					"zako": 0,
					"path": "",
					"state": 1,
					"vip": 0,
					"pspts": [
					{
						"eptid": "c8f657b9-c2b5-4ac7-9e86-20965ad4e1af",
						"gettime": 0,
						"ptid": "PT_ARM_WP042_001",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 1302,
						"lvl": 1,
						"zid": "6fdd2928-e90f-4202-8e71-b6fd92f3dca1"
					},
					{
						"eptid": "093b39b5-e921-4345-b478-e0d245456a3a",
						"gettime": 0,
						"ptid": "PT_DIY_HEAD_010",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 350,
						"lvl": 1,
						"zid": "6fdd2928-e90f-4202-8e71-b6fd92f3dca1"
					},
					{
						"eptid": "f2091e3a-3b05-47a3-94eb-33ff0c4cef4d",
						"gettime": 0,
						"ptid": "PT_DIY_BTM_002",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 343,
						"lvl": 1,
						"zid": "6fdd2928-e90f-4202-8e71-b6fd92f3dca1"
					}
					],
					"eqpts": [
					{
						"eptid": "c8f657b9-c2b5-4ac7-9e86-20965ad4e1af",
						"site": "EQSITE_ARMR"
					},
					{
						"eptid": "093b39b5-e921-4345-b478-e0d245456a3a",
						"site": "EQSITE_HEAD"
					},
					{
						"eptid": "f2091e3a-3b05-47a3-94eb-33ff0c4cef4d",
						"site": "EQSITE_LEGS"
					}
					],
					"psskls": [],
					"mstlvl": [],
					"eqskls": [],
					"rwd": {
						"money": 78,
						"spirit": 0,
						"pts": [],
						"msrs": [],
						"items": [],
						"tbtp": ""
					},
					"stat": {
						"elms": []
					},
					"bodylvl": {
						"lvl": 7,
						"hp": 2,
						"str": 2,
						"dex": 2,
						"vit": 2,
						"stm": 2,
						"luk": 2,
						"skill": 0,
						"bag": 0
					},
					"bodybonus": {
						"hp_bonus": 0,
						"str_bonus": 0,
						"dex_bonus": 0,
						"vit_bonus": 0,
						"stm_bonus": 0,
						"luk_bonus": 0
					},
					"hunter": 0,
					"hp": 216,
					"emblem": "",
					"teamname": "",
					"isduring": 0,
					"isfriend": 0,
					"bodymaxlvl": 60,
					"unit": "START_V03",
					"pntid": "MET_ZMB_TGT_06"
				},
				{
					"zid": "c67dfc1c-23d1-452c-be4c-5a9498565423",
					"did": -1,
					"uid": -1,
					"clazz": 0,
					"name": "",
					"cname": "",
					"body": {
						"id": "BODY_MALE_003",
						"gender": "GENDER_MALE",
						"baid": "ASSET_MALE_BODY_003",
						"haid": "ASSET_MALE_HAIR_001",
						"colr": 1,
						"colg": 1,
						"colb": 1,
						"voicep": 3,
						"voiceb": 2,
						"provoke": 7
					},
					"gasmask": "",
					"attp": "ZMBATTP_PLAYER",
					"eqtp": "ZMBEQTP_CUSTOM",
					"lvl": 1,
					"type": "OLD",
					"grade": 1,
					"limit_break": 0,
					"atkup": 0,
					"defup": 0,
					"exp": 3,
					"abp": 0,
					"prio": 0,
					"zako": 0,
					"path": "",
					"state": 1,
					"vip": 0,
					"pspts": [
					{
						"eptid": "be9b3838-0678-42a2-b39e-8a19d8a9ad42",
						"gettime": 0,
						"ptid": "PT_ARM_WP011_001",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 1162,
						"lvl": 1,
						"zid": "c67dfc1c-23d1-452c-be4c-5a9498565423"
					},
					{
						"eptid": "20b316af-bdfe-4afa-b9d9-4f037cbaa24c",
						"gettime": 0,
						"ptid": "PT_DIY_HEAD_001",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 420,
						"lvl": 1,
						"zid": "c67dfc1c-23d1-452c-be4c-5a9498565423"
					}
					],
					"eqpts": [
					{
						"eptid": "be9b3838-0678-42a2-b39e-8a19d8a9ad42",
						"site": "EQSITE_ARMR"
					},
					{
						"eptid": "20b316af-bdfe-4afa-b9d9-4f037cbaa24c",
						"site": "EQSITE_HEAD"
					}
					],
					"psskls": [],
					"mstlvl": [],
					"eqskls": [],
					"rwd": {
						"money": 72,
						"spirit": 0,
						"pts": [
						{
							"eptid": "be9b3838-0678-42a2-b39e-8a19d8a9ad42"
						}
						],
						"msrs": [],
						"items": [],
						"tbtp": ""
					},
					"stat": {
						"elms": []
					},
					"bodylvl": {
						"lvl": 1,
						"hp": 1,
						"str": 1,
						"dex": 1,
						"vit": 1,
						"stm": 1,
						"luk": 1,
						"skill": 0,
						"bag": 0
					},
					"bodybonus": {
						"hp_bonus": 0,
						"str_bonus": 0,
						"dex_bonus": 0,
						"vit_bonus": 0,
						"stm_bonus": 0,
						"luk_bonus": 0
					},
					"hunter": 0,
					"hp": 200,
					"emblem": "",
					"teamname": "",
					"isduring": 0,
					"isfriend": 0,
					"bodymaxlvl": 60,
					"unit": "A23_ST_V02",
					"pntid": "MET_ZMB_TGT_02"
				},
				{
					"zid": "76a16fff-6e07-4aac-bb04-9e12fe371eda",
					"did": -1,
					"uid": -1,
					"clazz": 0,
					"name": "",
					"cname": "",
					"body": {
						"id": "BODY_FEMALE_005",
						"gender": "GENDER_FEMALE",
						"baid": "ASSET_FEMALE_BODY_005",
						"haid": "ASSET_FEMALE_HAIR_005",
						"colr": 1,
						"colg": 1,
						"colb": 1,
						"voicep": 5,
						"voiceb": 7,
						"provoke": 13
					},
					"gasmask": "",
					"attp": "ZMBATTP_PLAYER",
					"eqtp": "ZMBEQTP_CUSTOM",
					"lvl": 8,
					"type": "OLD",
					"grade": 1,
					"limit_break": 0,
					"atkup": 0,
					"defup": 0,
					"exp": 20,
					"abp": 0,
					"prio": 0,
					"zako": 0,
					"path": "",
					"state": 1,
					"vip": 0,
					"pspts": [
					{
						"eptid": "2cc92838-6cfb-46f8-9fa8-c371386d4e3e",
						"gettime": 0,
						"ptid": "PT_ARM_WP013_001",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 812,
						"lvl": 1,
						"zid": "76a16fff-6e07-4aac-bb04-9e12fe371eda"
					},
					{
						"eptid": "91874e0d-7d75-4741-81b4-c079d4f44865",
						"gettime": 0,
						"ptid": "PT_DIY_TOPS_010",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 875,
						"lvl": 1,
						"zid": "76a16fff-6e07-4aac-bb04-9e12fe371eda"
					},
					{
						"eptid": "b209d8b1-cd0b-4c11-a892-a6d49d956cfb",
						"gettime": 0,
						"ptid": "PT_DIY_HEAD_004",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 430,
						"lvl": 1,
						"zid": "76a16fff-6e07-4aac-bb04-9e12fe371eda"
					}
					],
					"eqpts": [
					{
						"eptid": "2cc92838-6cfb-46f8-9fa8-c371386d4e3e",
						"site": "EQSITE_ARMR"
					},
					{
						"eptid": "91874e0d-7d75-4741-81b4-c079d4f44865",
						"site": "EQSITE_BODY"
					},
					{
						"eptid": "b209d8b1-cd0b-4c11-a892-a6d49d956cfb",
						"site": "EQSITE_HEAD"
					}
					],
					"psskls": [],
					"mstlvl": [],
					"eqskls": [],
					"rwd": {
						"money": 64,
						"spirit": 0,
						"pts": [],
						"msrs": [],
						"items": [],
						"tbtp": ""
					},
					"stat": {
						"elms": []
					},
					"bodylvl": {
						"lvl": 8,
						"hp": 3,
						"str": 2,
						"dex": 2,
						"vit": 2,
						"stm": 2,
						"luk": 2,
						"skill": 0,
						"bag": 0
					},
					"bodybonus": {
						"hp_bonus": 0,
						"str_bonus": 0,
						"dex_bonus": 0,
						"vit_bonus": 0,
						"stm_bonus": 0,
						"luk_bonus": 0
					},
					"hunter": 0,
					"hp": 233,
					"emblem": "",
					"teamname": "",
					"isduring": 0,
					"isfriend": 0,
					"bodymaxlvl": 60,
					"unit": "START_V03",
					"pntid": "MET_ZMB_TGT_11"
				},
				{
					"zid": "b624f581-43ad-4c1b-9d42-69da8e56fee6",
					"did": -1,
					"uid": -1,
					"clazz": 0,
					"name": "",
					"cname": "",
					"body": {
						"id": "BODY_FEMALE_001",
						"gender": "GENDER_FEMALE",
						"baid": "ASSET_FEMALE_BODY_001",
						"haid": "ASSET_FEMALE_HAIR_001",
						"colr": 1,
						"colg": 1,
						"colb": 1,
						"voicep": 1,
						"voiceb": 5,
						"provoke": 1
					},
					"gasmask": "",
					"attp": "ZMBATTP_PLAYER",
					"eqtp": "ZMBEQTP_CUSTOM",
					"lvl": 8,
					"type": "OLD",
					"grade": 1,
					"limit_break": 0,
					"atkup": 0,
					"defup": 0,
					"exp": 20,
					"abp": 0,
					"prio": 0,
					"zako": 0,
					"path": "",
					"state": 1,
					"vip": 0,
					"pspts": [
					{
						"eptid": "b55da675-6ce6-4ca3-9dcd-68bd4f13c80f",
						"gettime": 0,
						"ptid": "PT_ARM_WP013_001",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 952,
						"lvl": 1,
						"zid": "b624f581-43ad-4c1b-9d42-69da8e56fee6"
					},
					{
						"eptid": "833eac4b-e39f-4553-b393-35666acd860a",
						"gettime": 0,
						"ptid": "PT_DIY_TOPS_020",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 393,
						"lvl": 1,
						"zid": "b624f581-43ad-4c1b-9d42-69da8e56fee6"
					},
					{
						"eptid": "7dc82951-2f64-4080-aa40-11ff07de425e",
						"gettime": 0,
						"ptid": "PT_DIY_HEAD_014",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 380,
						"lvl": 1,
						"zid": "b624f581-43ad-4c1b-9d42-69da8e56fee6"
					}
					],
					"eqpts": [
					{
						"eptid": "b55da675-6ce6-4ca3-9dcd-68bd4f13c80f",
						"site": "EQSITE_ARMR"
					},
					{
						"eptid": "833eac4b-e39f-4553-b393-35666acd860a",
						"site": "EQSITE_BODY"
					},
					{
						"eptid": "7dc82951-2f64-4080-aa40-11ff07de425e",
						"site": "EQSITE_HEAD"
					}
					],
					"psskls": [],
					"mstlvl": [],
					"eqskls": [],
					"rwd": {
						"money": 65,
						"spirit": 0,
						"pts": [],
						"msrs": [],
						"items": [],
						"tbtp": ""
					},
					"stat": {
						"elms": []
					},
					"bodylvl": {
						"lvl": 8,
						"hp": 3,
						"str": 2,
						"dex": 2,
						"vit": 2,
						"stm": 2,
						"luk": 2,
						"skill": 0,
						"bag": 0
					},
					"bodybonus": {
						"hp_bonus": 0,
						"str_bonus": 0,
						"dex_bonus": 0,
						"vit_bonus": 0,
						"stm_bonus": 0,
						"luk_bonus": 0
					},
					"hunter": 0,
					"hp": 233,
					"emblem": "",
					"teamname": "",
					"isduring": 0,
					"isfriend": 0,
					"bodymaxlvl": 60,
					"unit": "START_V03",
					"pntid": "MET_ZMB_TGT_14"
				},
				{
					"zid": "9e5d783b-970a-48c0-8573-e700fbea141a",
					"did": -1,
					"uid": -1,
					"clazz": 0,
					"name": "",
					"cname": "",
					"body": {
						"id": "BODY_MALE_006",
						"gender": "GENDER_MALE",
						"baid": "ASSET_MALE_BODY_006",
						"haid": "",
						"colr": 1,
						"colg": 1,
						"colb": 1,
						"voicep": 6,
						"voiceb": 3,
						"provoke": 16
					},
					"gasmask": "",
					"attp": "ZMBATTP_PLAYER",
					"eqtp": "ZMBEQTP_CUSTOM",
					"lvl": 7,
					"type": "OLD",
					"grade": 1,
					"limit_break": 0,
					"atkup": 0,
					"defup": 0,
					"exp": 19,
					"abp": 0,
					"prio": 0,
					"zako": 0,
					"path": "",
					"state": 1,
					"vip": 0,
					"pspts": [
					{
						"eptid": "6f52e58a-3124-4dcd-bc5e-749f3de38751",
						"gettime": 0,
						"ptid": "PT_ARM_WP042_001",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 1134,
						"lvl": 1,
						"zid": "9e5d783b-970a-48c0-8573-e700fbea141a"
					},
					{
						"eptid": "fc0dee69-d888-4c0e-9c4f-84a71ffeaa7b",
						"gettime": 0,
						"ptid": "PT_DIY_HEAD_002",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 385,
						"lvl": 1,
						"zid": "9e5d783b-970a-48c0-8573-e700fbea141a"
					},
					{
						"eptid": "84a788c2-56e7-4b40-8cd9-40d5de4bd9bf",
						"gettime": 0,
						"ptid": "PT_DIY_BTM_020",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 611,
						"lvl": 1,
						"zid": "9e5d783b-970a-48c0-8573-e700fbea141a"
					}
					],
					"eqpts": [
					{
						"eptid": "6f52e58a-3124-4dcd-bc5e-749f3de38751",
						"site": "EQSITE_ARMR"
					},
					{
						"eptid": "fc0dee69-d888-4c0e-9c4f-84a71ffeaa7b",
						"site": "EQSITE_HEAD"
					},
					{
						"eptid": "84a788c2-56e7-4b40-8cd9-40d5de4bd9bf",
						"site": "EQSITE_LEGS"
					}
					],
					"psskls": [],
					"mstlvl": [],
					"eqskls": [],
					"rwd": {
						"money": 84,
						"spirit": 0,
						"pts": [],
						"msrs": [],
						"items": [],
						"tbtp": ""
					},
					"stat": {
						"elms": []
					},
					"bodylvl": {
						"lvl": 7,
						"hp": 2,
						"str": 2,
						"dex": 2,
						"vit": 2,
						"stm": 2,
						"luk": 2,
						"skill": 0,
						"bag": 0
					},
					"bodybonus": {
						"hp_bonus": 0,
						"str_bonus": 0,
						"dex_bonus": 0,
						"vit_bonus": 0,
						"stm_bonus": 0,
						"luk_bonus": 0
					},
					"hunter": 0,
					"hp": 216,
					"emblem": "",
					"teamname": "",
					"isduring": 0,
					"isfriend": 0,
					"bodymaxlvl": 60,
					"unit": "START_V03",
					"pntid": "MET_ZMB_TGT_05"
				},
				{
					"zid": "45e3d17a-a21a-440b-8fda-a024138ad3dc",
					"did": -1,
					"uid": -1,
					"clazz": 0,
					"name": "",
					"cname": "",
					"body": {
						"id": "BODY_MALE_004",
						"gender": "GENDER_MALE",
						"baid": "ASSET_MALE_BODY_004",
						"haid": "ASSET_MALE_HAIR_002",
						"colr": 1,
						"colg": 1,
						"colb": 1,
						"voicep": 4,
						"voiceb": 2,
						"provoke": 10
					},
					"gasmask": "",
					"attp": "ZMBATTP_PLAYER",
					"eqtp": "ZMBEQTP_CUSTOM",
					"lvl": 7,
					"type": "OLD",
					"grade": 1,
					"limit_break": 0,
					"atkup": 0,
					"defup": 0,
					"exp": 19,
					"abp": 0,
					"prio": 0,
					"zako": 0,
					"path": "",
					"state": 1,
					"vip": 0,
					"pspts": [
					{
						"eptid": "fce3a8f7-29e0-4422-a535-477e7efee802",
						"gettime": 0,
						"ptid": "PT_ARM_WP042_001",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 630,
						"lvl": 1,
						"zid": "45e3d17a-a21a-440b-8fda-a024138ad3dc"
					},
					{
						"eptid": "adf496bd-51c4-42d4-9aaf-11106b59fcaf",
						"gettime": 0,
						"ptid": "PT_DIY_HEAD_020",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 375,
						"lvl": 1,
						"zid": "45e3d17a-a21a-440b-8fda-a024138ad3dc"
					},
					{
						"eptid": "7e33759a-30fa-4aee-aa53-4bae2e7f908b",
						"gettime": 0,
						"ptid": "PT_DIY_BTM_018",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 611,
						"lvl": 1,
						"zid": "45e3d17a-a21a-440b-8fda-a024138ad3dc"
					}
					],
					"eqpts": [
					{
						"eptid": "fce3a8f7-29e0-4422-a535-477e7efee802",
						"site": "EQSITE_ARMR"
					},
					{
						"eptid": "adf496bd-51c4-42d4-9aaf-11106b59fcaf",
						"site": "EQSITE_HEAD"
					},
					{
						"eptid": "7e33759a-30fa-4aee-aa53-4bae2e7f908b",
						"site": "EQSITE_LEGS"
					}
					],
					"psskls": [],
					"mstlvl": [],
					"eqskls": [],
					"rwd": {
						"money": 84,
						"spirit": 0,
						"pts": [],
						"msrs": [],
						"items": [],
						"tbtp": ""
					},
					"stat": {
						"elms": []
					},
					"bodylvl": {
						"lvl": 7,
						"hp": 2,
						"str": 2,
						"dex": 2,
						"vit": 2,
						"stm": 2,
						"luk": 2,
						"skill": 0,
						"bag": 0
					},
					"bodybonus": {
						"hp_bonus": 0,
						"str_bonus": 0,
						"dex_bonus": 0,
						"vit_bonus": 0,
						"stm_bonus": 0,
						"luk_bonus": 0
					},
					"hunter": 0,
					"hp": 216,
					"emblem": "",
					"teamname": "",
					"isduring": 0,
					"isfriend": 0,
					"bodymaxlvl": 60,
					"unit": "START_V03",
					"pntid": "MET_ZMB_TGT_08"
				},
				{
					"zid": "0764c83c-78a5-49e5-ba7f-0185d58c3db0",
					"did": -1,
					"uid": -1,
					"clazz": 0,
					"name": "",
					"cname": "",
					"body": {
						"id": "BODY_FEMALE_001",
						"gender": "GENDER_FEMALE",
						"baid": "ASSET_FEMALE_BODY_001",
						"haid": "ASSET_FEMALE_HAIR_001",
						"colr": 1,
						"colg": 1,
						"colb": 1,
						"voicep": 1,
						"voiceb": 5,
						"provoke": 1
					},
					"gasmask": "",
					"attp": "ZMBATTP_PLAYER",
					"eqtp": "ZMBEQTP_CUSTOM",
					"lvl": 5,
					"type": "BAL",
					"grade": 1,
					"limit_break": 0,
					"atkup": 0,
					"defup": 0,
					"exp": 6,
					"abp": 0,
					"prio": 0,
					"zako": 0,
					"path": "",
					"state": 1,
					"vip": 0,
					"pspts": [
					{
						"eptid": "e7fbf2b1-202b-4022-acad-be9be050e9f4",
						"gettime": 0,
						"ptid": "PT_ARM_WP012_001",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 1246,
						"lvl": 1,
						"zid": "0764c83c-78a5-49e5-ba7f-0185d58c3db0"
					},
					{
						"eptid": "5c94b966-1741-436b-8fce-9f8357bd337b",
						"gettime": 0,
						"ptid": "PT_DIY_BTM_009",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 377,
						"lvl": 1,
						"zid": "0764c83c-78a5-49e5-ba7f-0185d58c3db0"
					}
					],
					"eqpts": [
					{
						"eptid": "e7fbf2b1-202b-4022-acad-be9be050e9f4",
						"site": "EQSITE_ARMR"
					},
					{
						"eptid": "5c94b966-1741-436b-8fce-9f8357bd337b",
						"site": "EQSITE_LEGS"
					}
					],
					"psskls": [],
					"mstlvl": [],
					"eqskls": [],
					"rwd": {
						"money": 82,
						"spirit": 0,
						"pts": [
						{
							"eptid": "5c94b966-1741-436b-8fce-9f8357bd337b"
						}
						],
						"msrs": [],
						"items": [],
						"tbtp": ""
					},
					"stat": {
						"elms": []
					},
					"bodylvl": {
						"lvl": 5,
						"hp": 2,
						"str": 2,
						"dex": 2,
						"vit": 2,
						"stm": 1,
						"luk": 1,
						"skill": 0,
						"bag": 0
					},
					"bodybonus": {
						"hp_bonus": 0,
						"str_bonus": 0,
						"dex_bonus": 0,
						"vit_bonus": 0,
						"stm_bonus": 0,
						"luk_bonus": 0
					},
					"hunter": 0,
					"hp": 230,
					"emblem": "",
					"teamname": "",
					"isduring": 0,
					"isfriend": 0,
					"bodymaxlvl": 6,
					"unit": "A21_ST_V02",
					"pntid": "MET_ZMB_TGT_10"
				},
				{
					"zid": "04407903-6505-4928-95fe-bb85f14439ed",
					"did": -1,
					"uid": -1,
					"clazz": 0,
					"name": "",
					"cname": "",
					"body": {
						"id": "BODY_FEMALE_004",
						"gender": "GENDER_FEMALE",
						"baid": "ASSET_FEMALE_BODY_004",
						"haid": "ASSET_FEMALE_HAIR_004",
						"colr": 1,
						"colg": 1,
						"colb": 1,
						"voicep": 4,
						"voiceb": 6,
						"provoke": 10
					},
					"gasmask": "",
					"attp": "ZMBATTP_PLAYER",
					"eqtp": "ZMBEQTP_CUSTOM",
					"lvl": 8,
					"type": "OLD",
					"grade": 1,
					"limit_break": 0,
					"atkup": 0,
					"defup": 0,
					"exp": 20,
					"abp": 0,
					"prio": 0,
					"zako": 0,
					"path": "",
					"state": 1,
					"vip": 0,
					"pspts": [
					{
						"eptid": "50f20652-795f-4a4a-9e88-3663c5bd7586",
						"gettime": 0,
						"ptid": "PT_ARM_WP013_001",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 882,
						"lvl": 1,
						"zid": "04407903-6505-4928-95fe-bb85f14439ed"
					},
					{
						"eptid": "1c825630-28ff-4719-81c6-b811c76983c1",
						"gettime": 0,
						"ptid": "PT_DIY_TOPS_018",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 831,
						"lvl": 1,
						"zid": "04407903-6505-4928-95fe-bb85f14439ed"
					},
					{
						"eptid": "5376d6b9-f64a-44db-a58b-561f70857dc7",
						"gettime": 0,
						"ptid": "PT_DIY_HEAD_014",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 205,
						"lvl": 1,
						"zid": "04407903-6505-4928-95fe-bb85f14439ed"
					}
					],
					"eqpts": [
					{
						"eptid": "50f20652-795f-4a4a-9e88-3663c5bd7586",
						"site": "EQSITE_ARMR"
					},
					{
						"eptid": "1c825630-28ff-4719-81c6-b811c76983c1",
						"site": "EQSITE_BODY"
					},
					{
						"eptid": "5376d6b9-f64a-44db-a58b-561f70857dc7",
						"site": "EQSITE_HEAD"
					}
					],
					"psskls": [],
					"mstlvl": [],
					"eqskls": [],
					"rwd": {
						"money": 72,
						"spirit": 0,
						"pts": [],
						"msrs": [],
						"items": [],
						"tbtp": ""
					},
					"stat": {
						"elms": []
					},
					"bodylvl": {
						"lvl": 8,
						"hp": 3,
						"str": 2,
						"dex": 2,
						"vit": 2,
						"stm": 2,
						"luk": 2,
						"skill": 0,
						"bag": 0
					},
					"bodybonus": {
						"hp_bonus": 0,
						"str_bonus": 0,
						"dex_bonus": 0,
						"vit_bonus": 0,
						"stm_bonus": 0,
						"luk_bonus": 0
					},
					"hunter": 0,
					"hp": 233,
					"emblem": "",
					"teamname": "",
					"isduring": 0,
					"isfriend": 0,
					"bodymaxlvl": 60,
					"unit": "START_V03",
					"pntid": "MET_ZMB_TGT_13"
				},
				{
					"zid": "e0a413d1-cd47-40b7-85aa-f6e13977e137",
					"did": -1,
					"uid": -1,
					"clazz": 0,
					"name": "",
					"cname": "",
					"body": {
						"id": "BODY_MALE_005",
						"gender": "GENDER_MALE",
						"baid": "ASSET_MALE_BODY_005",
						"haid": "ASSET_MALE_HAIR_003",
						"colr": 1,
						"colg": 1,
						"colb": 1,
						"voicep": 5,
						"voiceb": 3,
						"provoke": 13
					},
					"gasmask": "",
					"attp": "ZMBATTP_PLAYER",
					"eqtp": "ZMBEQTP_CUSTOM",
					"lvl": 3,
					"type": "BAL",
					"grade": 1,
					"limit_break": 0,
					"atkup": 0,
					"defup": 0,
					"exp": 8,
					"abp": 0,
					"prio": 0,
					"zako": 0,
					"path": "",
					"state": 1,
					"vip": 0,
					"pspts": [
					{
						"eptid": "1133b992-8e4b-4350-b3e1-30789fefff1a",
						"gettime": 0,
						"ptid": "PT_ARM_WP032_001",
						"rest": 50,
						"spare": 100,
						"grade": 0,
						"dur": 1372,
						"lvl": 1,
						"zid": "e0a413d1-cd47-40b7-85aa-f6e13977e137"
					},
					{
						"eptid": "1d3df292-cc97-4e42-825a-f82dafed5598",
						"gettime": 0,
						"ptid": "PT_DIY_TOPS_003",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 717,
						"lvl": 1,
						"zid": "e0a413d1-cd47-40b7-85aa-f6e13977e137"
					},
					{
						"eptid": "a855f00b-f72d-43c2-a497-6627069d325d",
						"gettime": 0,
						"ptid": "PT_DIY_HEAD_015",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 160,
						"lvl": 1,
						"zid": "e0a413d1-cd47-40b7-85aa-f6e13977e137"
					}
					],
					"eqpts": [
					{
						"eptid": "1133b992-8e4b-4350-b3e1-30789fefff1a",
						"site": "EQSITE_ARMR"
					},
					{
						"eptid": "1d3df292-cc97-4e42-825a-f82dafed5598",
						"site": "EQSITE_BODY"
					},
					{
						"eptid": "a855f00b-f72d-43c2-a497-6627069d325d",
						"site": "EQSITE_HEAD"
					}
					],
					"psskls": [],
					"mstlvl": [],
					"eqskls": [],
					"rwd": {
						"money": 63,
						"spirit": 0,
						"pts": [
						{
							"eptid": "1d3df292-cc97-4e42-825a-f82dafed5598"
						}
						],
						"msrs": [],
						"items": [],
						"tbtp": ""
					},
					"stat": {
						"elms": []
					},
					"bodylvl": {
						"lvl": 3,
						"hp": 2,
						"str": 2,
						"dex": 1,
						"vit": 1,
						"stm": 1,
						"luk": 1,
						"skill": 0,
						"bag": 0
					},
					"bodybonus": {
						"hp_bonus": 0,
						"str_bonus": 0,
						"dex_bonus": 0,
						"vit_bonus": 0,
						"stm_bonus": 0,
						"luk_bonus": 0
					},
					"hunter": 0,
					"hp": 230,
					"emblem": "",
					"teamname": "",
					"isduring": 0,
					"isfriend": 0,
					"bodymaxlvl": 6,
					"unit": "A21_ST_V02",
					"pntid": "MET_ZMB_TGT_04"
				},
				{
					"zid": "19984ca6-cc0c-4e76-9c91-3cc0aa63c8c9",
					"did": -1,
					"uid": -1,
					"clazz": 0,
					"name": "",
					"cname": "",
					"body": {
						"id": "BODY_MALE_008",
						"gender": "GENDER_MALE",
						"baid": "ASSET_MALE_BODY_008",
						"haid": "ASSET_MALE_HAIR_008",
						"colr": 1,
						"colg": 1,
						"colb": 1,
						"voicep": 8,
						"voiceb": 4,
						"provoke": 22
					},
					"gasmask": "",
					"attp": "ZMBATTP_PLAYER",
					"eqtp": "ZMBEQTP_CUSTOM",
					"lvl": 1,
					"type": "OLD",
					"grade": 1,
					"limit_break": 0,
					"atkup": 0,
					"defup": 0,
					"exp": 3,
					"abp": 0,
					"prio": 0,
					"zako": 0,
					"path": "",
					"state": 1,
					"vip": 0,
					"pspts": [
					{
						"eptid": "f9d6c167-44ae-49b4-be21-f887c21c0c1a",
						"gettime": 0,
						"ptid": "PT_ARM_WP006_001",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 658,
						"lvl": 1,
						"zid": "19984ca6-cc0c-4e76-9c91-3cc0aa63c8c9"
					},
					{
						"eptid": "20fe5d70-2ccb-4913-86b1-32587efa7f3a",
						"gettime": 0,
						"ptid": "PT_DIY_HEAD_001",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 370,
						"lvl": 1,
						"zid": "19984ca6-cc0c-4e76-9c91-3cc0aa63c8c9"
					}
					],
					"eqpts": [
					{
						"eptid": "f9d6c167-44ae-49b4-be21-f887c21c0c1a",
						"site": "EQSITE_ARMR"
					},
					{
						"eptid": "20fe5d70-2ccb-4913-86b1-32587efa7f3a",
						"site": "EQSITE_HEAD"
					}
					],
					"psskls": [],
					"mstlvl": [],
					"eqskls": [],
					"rwd": {
						"money": 64,
						"spirit": 0,
						"pts": [
						{
							"eptid": "f9d6c167-44ae-49b4-be21-f887c21c0c1a"
						}
						],
						"msrs": [],
						"items": [],
						"tbtp": ""
					},
					"stat": {
						"elms": []
					},
					"bodylvl": {
						"lvl": 1,
						"hp": 1,
						"str": 1,
						"dex": 1,
						"vit": 1,
						"stm": 1,
						"luk": 1,
						"skill": 0,
						"bag": 0
					},
					"bodybonus": {
						"hp_bonus": 0,
						"str_bonus": 0,
						"dex_bonus": 0,
						"vit_bonus": 0,
						"stm_bonus": 0,
						"luk_bonus": 0
					},
					"hunter": 0,
					"hp": 200,
					"emblem": "",
					"teamname": "",
					"isduring": 0,
					"isfriend": 0,
					"bodymaxlvl": 60,
					"unit": "A23_ST_V02",
					"pntid": "MET_ZMB_TGT_00"
				},
				{
					"zid": "60763731-96e3-421a-bd6a-6d3c6210ad54",
					"did": -1,
					"uid": -1,
					"clazz": 0,
					"name": "",
					"cname": "",
					"body": {
						"id": "BODY_FEMALE_006",
						"gender": "GENDER_FEMALE",
						"baid": "ASSET_FEMALE_BODY_006",
						"haid": "ASSET_FEMALE_HAIR_006",
						"colr": 1,
						"colg": 1,
						"colb": 1,
						"voicep": 6,
						"voiceb": 7,
						"provoke": 16
					},
					"gasmask": "",
					"attp": "ZMBATTP_PLAYER",
					"eqtp": "ZMBEQTP_CUSTOM",
					"lvl": 8,
					"type": "OLD",
					"grade": 1,
					"limit_break": 0,
					"atkup": 0,
					"defup": 0,
					"exp": 20,
					"abp": 0,
					"prio": 0,
					"zako": 0,
					"path": "",
					"state": 1,
					"vip": 0,
					"pspts": [
					{
						"eptid": "21ca7ccc-abe5-4d45-9a86-6b08274af01f",
						"gettime": 0,
						"ptid": "PT_ARM_WP013_001",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 1288,
						"lvl": 1,
						"zid": "60763731-96e3-421a-bd6a-6d3c6210ad54"
					},
					{
						"eptid": "f3a8895b-b3f0-4e37-8cb6-f94cedf1248f",
						"gettime": 0,
						"ptid": "PT_DIY_TOPS_004",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 822,
						"lvl": 1,
						"zid": "60763731-96e3-421a-bd6a-6d3c6210ad54"
					},
					{
						"eptid": "32dba497-40fa-4786-b7f7-97519da4d289",
						"gettime": 0,
						"ptid": "PT_DIY_HEAD_004",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 435,
						"lvl": 1,
						"zid": "60763731-96e3-421a-bd6a-6d3c6210ad54"
					}
					],
					"eqpts": [
					{
						"eptid": "21ca7ccc-abe5-4d45-9a86-6b08274af01f",
						"site": "EQSITE_ARMR"
					},
					{
						"eptid": "f3a8895b-b3f0-4e37-8cb6-f94cedf1248f",
						"site": "EQSITE_BODY"
					},
					{
						"eptid": "32dba497-40fa-4786-b7f7-97519da4d289",
						"site": "EQSITE_HEAD"
					}
					],
					"psskls": [],
					"mstlvl": [],
					"eqskls": [],
					"rwd": {
						"money": 71,
						"spirit": 0,
						"pts": [],
						"msrs": [],
						"items": [],
						"tbtp": ""
					},
					"stat": {
						"elms": []
					},
					"bodylvl": {
						"lvl": 8,
						"hp": 3,
						"str": 2,
						"dex": 2,
						"vit": 2,
						"stm": 2,
						"luk": 2,
						"skill": 0,
						"bag": 0
					},
					"bodybonus": {
						"hp_bonus": 0,
						"str_bonus": 0,
						"dex_bonus": 0,
						"vit_bonus": 0,
						"stm_bonus": 0,
						"luk_bonus": 0
					},
					"hunter": 0,
					"hp": 233,
					"emblem": "",
					"teamname": "",
					"isduring": 0,
					"isfriend": 0,
					"bodymaxlvl": 60,
					"unit": "START_V03",
					"pntid": "MET_ZMB_TGT_10"
				},
				{
					"zid": "02960f85-2cf8-4e25-9f22-5d82e5170993",
					"did": -1,
					"uid": -1,
					"clazz": 0,
					"name": "",
					"cname": "",
					"body": {
						"id": "BODY_MALE_008",
						"gender": "GENDER_MALE",
						"baid": "ASSET_MALE_BODY_008",
						"haid": "ASSET_MALE_HAIR_008",
						"colr": 1,
						"colg": 1,
						"colb": 1,
						"voicep": 8,
						"voiceb": 4,
						"provoke": 22
					},
					"gasmask": "",
					"attp": "ZMBATTP_PLAYER",
					"eqtp": "ZMBEQTP_CUSTOM",
					"lvl": 30,
					"type": "OLD",
					"grade": 1,
					"limit_break": 0,
					"atkup": 0,
					"defup": 0,
					"exp": 40,
					"abp": 0,
					"prio": 0,
					"zako": 0,
					"path": "",
					"state": 1,
					"vip": 0,
					"pspts": [
					{
						"eptid": "4930f7f8-e716-4d3f-9cfe-5d0ebafbaba6",
						"gettime": 0,
						"ptid": "PT_ARM_WP020_001",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 1050,
						"lvl": 1,
						"zid": "02960f85-2cf8-4e25-9f22-5d82e5170993"
					},
					{
						"eptid": "e82c136d-6055-4052-81b2-4713928bf860",
						"gettime": 0,
						"ptid": "PT_ARM_WP020_001",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 1050,
						"lvl": 1,
						"zid": "02960f85-2cf8-4e25-9f22-5d82e5170993"
					},
					{
						"eptid": "7ea29d15-2f18-4777-aaf6-a43bc195a742",
						"gettime": 0,
						"ptid": "PT_FAN_TOPS_003",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 306,
						"lvl": 1,
						"zid": "02960f85-2cf8-4e25-9f22-5d82e5170993"
					},
					{
						"eptid": "37ef800d-043b-485b-add2-7602ec3f9690",
						"gettime": 0,
						"ptid": "PT_MIL_HEAD_005",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 185,
						"lvl": 1,
						"zid": "02960f85-2cf8-4e25-9f22-5d82e5170993"
					},
					{
						"eptid": "a070ca21-e92b-43f9-bed0-64baf3c77475",
						"gettime": 0,
						"ptid": "PT_SPO_BTM_002",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 659,
						"lvl": 1,
						"zid": "02960f85-2cf8-4e25-9f22-5d82e5170993"
					}
					],
					"eqpts": [
					{
						"eptid": "4930f7f8-e716-4d3f-9cfe-5d0ebafbaba6",
						"site": "EQSITE_ARML"
					},
					{
						"eptid": "e82c136d-6055-4052-81b2-4713928bf860",
						"site": "EQSITE_ARMR"
					},
					{
						"eptid": "7ea29d15-2f18-4777-aaf6-a43bc195a742",
						"site": "EQSITE_BODY"
					},
					{
						"eptid": "37ef800d-043b-485b-add2-7602ec3f9690",
						"site": "EQSITE_HEAD"
					},
					{
						"eptid": "a070ca21-e92b-43f9-bed0-64baf3c77475",
						"site": "EQSITE_LEGS"
					}
					],
					"psskls": [],
					"mstlvl": [],
					"eqskls": [],
					"rwd": {
						"money": 81,
						"spirit": 0,
						"pts": [],
						"msrs": [],
						"items": [],
						"tbtp": ""
					},
					"stat": {
						"elms": []
					},
					"bodylvl": {
						"lvl": 30,
						"hp": 6,
						"str": 6,
						"dex": 6,
						"vit": 6,
						"stm": 6,
						"luk": 5,
						"skill": 0,
						"bag": 0
					},
					"bodybonus": {
						"hp_bonus": 0,
						"str_bonus": 0,
						"dex_bonus": 0,
						"vit_bonus": 0,
						"stm_bonus": 0,
						"luk_bonus": 0
					},
					"hunter": 0,
					"hp": 288,
					"emblem": "",
					"teamname": "",
					"isduring": 0,
					"isfriend": 0,
					"bodymaxlvl": 60,
					"unit": "START_V03",
					"pntid": "MET_ZMB_TGT_19"
				},
				{
					"zid": "b032d8e2-9443-4085-a79b-26f8488aae6f",
					"did": -1,
					"uid": -1,
					"clazz": 0,
					"name": "",
					"cname": "",
					"body": {
						"id": "BODY_MALE_005",
						"gender": "GENDER_MALE",
						"baid": "ASSET_MALE_BODY_005",
						"haid": "ASSET_MALE_HAIR_003",
						"colr": 1,
						"colg": 1,
						"colb": 1,
						"voicep": 5,
						"voiceb": 3,
						"provoke": 13
					},
					"gasmask": "",
					"attp": "ZMBATTP_PLAYER",
					"eqtp": "ZMBEQTP_CUSTOM",
					"lvl": 30,
					"type": "OLD",
					"grade": 1,
					"limit_break": 0,
					"atkup": 0,
					"defup": 0,
					"exp": 40,
					"abp": 0,
					"prio": 0,
					"zako": 0,
					"path": "",
					"state": 1,
					"vip": 0,
					"pspts": [
					{
						"eptid": "5ce0e208-b901-4b3c-91cc-510bdaf40aeb",
						"gettime": 0,
						"ptid": "PT_ARM_WP020_001",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 1092,
						"lvl": 1,
						"zid": "b032d8e2-9443-4085-a79b-26f8488aae6f"
					},
					{
						"eptid": "76034629-e700-454a-988c-31ea2b8705d0",
						"gettime": 0,
						"ptid": "PT_ARM_WP020_001",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 1218,
						"lvl": 1,
						"zid": "b032d8e2-9443-4085-a79b-26f8488aae6f"
					},
					{
						"eptid": "a87c108c-11da-4455-a59b-46e939b54b77",
						"gettime": 0,
						"ptid": "PT_FAN_TOPS_003",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 463,
						"lvl": 1,
						"zid": "b032d8e2-9443-4085-a79b-26f8488aae6f"
					},
					{
						"eptid": "9bade341-6dc5-4b80-ac69-8f4509cef1dd",
						"gettime": 0,
						"ptid": "PT_MIL_HEAD_005",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 455,
						"lvl": 1,
						"zid": "b032d8e2-9443-4085-a79b-26f8488aae6f"
					},
					{
						"eptid": "33125d46-575e-4451-8ca6-f8f86f9ba9f4",
						"gettime": 0,
						"ptid": "PT_SPO_BTM_002",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 501,
						"lvl": 1,
						"zid": "b032d8e2-9443-4085-a79b-26f8488aae6f"
					}
					],
					"eqpts": [
					{
						"eptid": "5ce0e208-b901-4b3c-91cc-510bdaf40aeb",
						"site": "EQSITE_ARML"
					},
					{
						"eptid": "76034629-e700-454a-988c-31ea2b8705d0",
						"site": "EQSITE_ARMR"
					},
					{
						"eptid": "a87c108c-11da-4455-a59b-46e939b54b77",
						"site": "EQSITE_BODY"
					},
					{
						"eptid": "9bade341-6dc5-4b80-ac69-8f4509cef1dd",
						"site": "EQSITE_HEAD"
					},
					{
						"eptid": "33125d46-575e-4451-8ca6-f8f86f9ba9f4",
						"site": "EQSITE_LEGS"
					}
					],
					"psskls": [],
					"mstlvl": [],
					"eqskls": [],
					"rwd": {
						"money": 80,
						"spirit": 0,
						"pts": [],
						"msrs": [],
						"items": [],
						"tbtp": ""
					},
					"stat": {
						"elms": []
					},
					"bodylvl": {
						"lvl": 30,
						"hp": 6,
						"str": 6,
						"dex": 6,
						"vit": 6,
						"stm": 6,
						"luk": 5,
						"skill": 0,
						"bag": 0
					},
					"bodybonus": {
						"hp_bonus": 0,
						"str_bonus": 0,
						"dex_bonus": 0,
						"vit_bonus": 0,
						"stm_bonus": 0,
						"luk_bonus": 0
					},
					"hunter": 0,
					"hp": 288,
					"emblem": "",
					"teamname": "",
					"isduring": 0,
					"isfriend": 0,
					"bodymaxlvl": 60,
					"unit": "START_V03",
					"pntid": "MET_ZMB_TGT_22"
				},
				{
					"zid": "94ac3839-ba2e-469f-b7fe-e11c775ec776",
					"did": -1,
					"uid": -1,
					"clazz": 0,
					"name": "",
					"cname": "",
					"body": {
						"id": "BODY_MALE_003",
						"gender": "GENDER_MALE",
						"baid": "ASSET_MALE_BODY_003",
						"haid": "ASSET_MALE_HAIR_001",
						"colr": 1,
						"colg": 1,
						"colb": 1,
						"voicep": 3,
						"voiceb": 2,
						"provoke": 7
					},
					"gasmask": "",
					"attp": "ZMBATTP_PLAYER",
					"eqtp": "ZMBEQTP_CUSTOM",
					"lvl": 3,
					"type": "BAL",
					"grade": 1,
					"limit_break": 0,
					"atkup": 0,
					"defup": 0,
					"exp": 8,
					"abp": 0,
					"prio": 0,
					"zako": 0,
					"path": "",
					"state": 1,
					"vip": 0,
					"pspts": [
					{
						"eptid": "ea6338c5-5761-4f72-b8d2-f43feeb8172c",
						"gettime": 0,
						"ptid": "PT_ARM_WP032_001",
						"rest": 50,
						"spare": 100,
						"grade": 0,
						"dur": 434,
						"lvl": 1,
						"zid": "94ac3839-ba2e-469f-b7fe-e11c775ec776"
					},
					{
						"eptid": "81681801-51cb-4676-b856-2418937a5d04",
						"gettime": 0,
						"ptid": "PT_DIY_TOPS_003",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 192,
						"lvl": 1,
						"zid": "94ac3839-ba2e-469f-b7fe-e11c775ec776"
					},
					{
						"eptid": "be0e15a0-da7b-41a4-8455-665f238fd106",
						"gettime": 0,
						"ptid": "PT_DIY_HEAD_015",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 485,
						"lvl": 1,
						"zid": "94ac3839-ba2e-469f-b7fe-e11c775ec776"
					}
					],
					"eqpts": [
					{
						"eptid": "ea6338c5-5761-4f72-b8d2-f43feeb8172c",
						"site": "EQSITE_ARMR"
					},
					{
						"eptid": "81681801-51cb-4676-b856-2418937a5d04",
						"site": "EQSITE_BODY"
					},
					{
						"eptid": "be0e15a0-da7b-41a4-8455-665f238fd106",
						"site": "EQSITE_HEAD"
					}
					],
					"psskls": [],
					"mstlvl": [],
					"eqskls": [],
					"rwd": {
						"money": 75,
						"spirit": 0,
						"pts": [
						{
							"eptid": "81681801-51cb-4676-b856-2418937a5d04"
						}
						],
						"msrs": [],
						"items": [],
						"tbtp": ""
					},
					"stat": {
						"elms": []
					},
					"bodylvl": {
						"lvl": 3,
						"hp": 2,
						"str": 2,
						"dex": 1,
						"vit": 1,
						"stm": 1,
						"luk": 1,
						"skill": 0,
						"bag": 0
					},
					"bodybonus": {
						"hp_bonus": 0,
						"str_bonus": 0,
						"dex_bonus": 0,
						"vit_bonus": 0,
						"stm_bonus": 0,
						"luk_bonus": 0
					},
					"hunter": 0,
					"hp": 230,
					"emblem": "",
					"teamname": "",
					"isduring": 0,
					"isfriend": 0,
					"bodymaxlvl": 6,
					"unit": "A21_ST_V02",
					"pntid": "MET_ZMB_TGT_06"
				},
				{
					"zid": "b6bb7db7-8674-40f6-88d2-457fcdd0253a",
					"did": -1,
					"uid": -1,
					"clazz": 0,
					"name": "",
					"cname": "",
					"body": {
						"id": "BODY_MALE_008",
						"gender": "GENDER_MALE",
						"baid": "ASSET_MALE_BODY_008",
						"haid": "ASSET_MALE_HAIR_008",
						"colr": 1,
						"colg": 1,
						"colb": 1,
						"voicep": 8,
						"voiceb": 4,
						"provoke": 22
					},
					"gasmask": "",
					"attp": "ZMBATTP_PLAYER",
					"eqtp": "ZMBEQTP_CUSTOM",
					"lvl": 1,
					"type": "OLD",
					"grade": 1,
					"limit_break": 0,
					"atkup": 0,
					"defup": 0,
					"exp": 3,
					"abp": 0,
					"prio": 0,
					"zako": 0,
					"path": "",
					"state": 1,
					"vip": 0,
					"pspts": [
					{
						"eptid": "b5878aa4-2168-4bcc-9067-48cf7fcd4a07",
						"gettime": 0,
						"ptid": "PT_ARM_WP011_001",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 1260,
						"lvl": 1,
						"zid": "b6bb7db7-8674-40f6-88d2-457fcdd0253a"
					},
					{
						"eptid": "204318a5-61e1-4731-b63a-c2302325f140",
						"gettime": 0,
						"ptid": "PT_DIY_HEAD_009",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 475,
						"lvl": 1,
						"zid": "b6bb7db7-8674-40f6-88d2-457fcdd0253a"
					}
					],
					"eqpts": [
					{
						"eptid": "b5878aa4-2168-4bcc-9067-48cf7fcd4a07",
						"site": "EQSITE_ARMR"
					},
					{
						"eptid": "204318a5-61e1-4731-b63a-c2302325f140",
						"site": "EQSITE_HEAD"
					}
					],
					"psskls": [],
					"mstlvl": [],
					"eqskls": [],
					"rwd": {
						"money": 74,
						"spirit": 0,
						"pts": [
						{
							"eptid": "b5878aa4-2168-4bcc-9067-48cf7fcd4a07"
						}
						],
						"msrs": [],
						"items": [],
						"tbtp": ""
					},
					"stat": {
						"elms": []
					},
					"bodylvl": {
						"lvl": 1,
						"hp": 1,
						"str": 1,
						"dex": 1,
						"vit": 1,
						"stm": 1,
						"luk": 1,
						"skill": 0,
						"bag": 0
					},
					"bodybonus": {
						"hp_bonus": 0,
						"str_bonus": 0,
						"dex_bonus": 0,
						"vit_bonus": 0,
						"stm_bonus": 0,
						"luk_bonus": 0
					},
					"hunter": 0,
					"hp": 200,
					"emblem": "",
					"teamname": "",
					"isduring": 0,
					"isfriend": 0,
					"bodymaxlvl": 60,
					"unit": "A23_ST_V02",
					"pntid": "MET_ZMB_TGT_03"
				},
				{
					"zid": "3efac76c-2a78-48f7-87b0-50b215a2ebe4",
					"did": -1,
					"uid": -1,
					"clazz": 0,
					"name": "",
					"cname": "",
					"body": {
						"id": "BODY_MALE_005",
						"gender": "GENDER_MALE",
						"baid": "ASSET_MALE_BODY_005",
						"haid": "ASSET_MALE_HAIR_003",
						"colr": 1,
						"colg": 1,
						"colb": 1,
						"voicep": 5,
						"voiceb": 3,
						"provoke": 13
					},
					"gasmask": "",
					"attp": "ZMBATTP_PLAYER",
					"eqtp": "ZMBEQTP_CUSTOM",
					"lvl": 3,
					"type": "BAL",
					"grade": 1,
					"limit_break": 0,
					"atkup": 0,
					"defup": 0,
					"exp": 7,
					"abp": 0,
					"prio": 0,
					"zako": 0,
					"path": "",
					"state": 1,
					"vip": 0,
					"pspts": [
					{
						"eptid": "e9b146fc-5425-4d04-9a13-7b6f362114e3",
						"gettime": 0,
						"ptid": "PT_ARM_WP032_001",
						"rest": 50,
						"spare": 100,
						"grade": 0,
						"dur": 1274,
						"lvl": 1,
						"zid": "3efac76c-2a78-48f7-87b0-50b215a2ebe4"
					},
					{
						"eptid": "90e3a17f-28c8-49c3-8ac2-a37c7c2bbf53",
						"gettime": 0,
						"ptid": "PT_DIY_TOPS_019",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 647,
						"lvl": 1,
						"zid": "3efac76c-2a78-48f7-87b0-50b215a2ebe4"
					},
					{
						"eptid": "dd931d0a-562a-4bba-9a99-ccdd430071ad",
						"gettime": 0,
						"ptid": "PT_DIY_HEAD_013",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 370,
						"lvl": 1,
						"zid": "3efac76c-2a78-48f7-87b0-50b215a2ebe4"
					}
					],
					"eqpts": [
					{
						"eptid": "e9b146fc-5425-4d04-9a13-7b6f362114e3",
						"site": "EQSITE_ARMR"
					},
					{
						"eptid": "90e3a17f-28c8-49c3-8ac2-a37c7c2bbf53",
						"site": "EQSITE_BODY"
					},
					{
						"eptid": "dd931d0a-562a-4bba-9a99-ccdd430071ad",
						"site": "EQSITE_HEAD"
					}
					],
					"psskls": [],
					"mstlvl": [],
					"eqskls": [],
					"rwd": {
						"money": 66,
						"spirit": 0,
						"pts": [
						{
							"eptid": "90e3a17f-28c8-49c3-8ac2-a37c7c2bbf53"
						}
						],
						"msrs": [],
						"items": [],
						"tbtp": ""
					},
					"stat": {
						"elms": []
					},
					"bodylvl": {
						"lvl": 3,
						"hp": 2,
						"str": 2,
						"dex": 1,
						"vit": 1,
						"stm": 1,
						"luk": 1,
						"skill": 0,
						"bag": 0
					},
					"bodybonus": {
						"hp_bonus": 0,
						"str_bonus": 0,
						"dex_bonus": 0,
						"vit_bonus": 0,
						"stm_bonus": 0,
						"luk_bonus": 0
					},
					"hunter": 0,
					"hp": 230,
					"emblem": "",
					"teamname": "",
					"isduring": 0,
					"isfriend": 0,
					"bodymaxlvl": 6,
					"unit": "A21_ST_V02",
					"pntid": "MET_ZMB_TGT_05"
				},
				{
					"zid": "a3ab93b2-530f-40ac-9141-c44641b7ded2",
					"did": -1,
					"uid": -1,
					"clazz": 0,
					"name": "",
					"cname": "",
					"body": {
						"id": "BODY_MALE_001",
						"gender": "GENDER_MALE",
						"baid": "ASSET_MALE_BODY_001",
						"haid": "",
						"colr": 1,
						"colg": 1,
						"colb": 1,
						"voicep": 1,
						"voiceb": 1,
						"provoke": 1
					},
					"gasmask": "",
					"attp": "ZMBATTP_PLAYER",
					"eqtp": "ZMBEQTP_CUSTOM",
					"lvl": 30,
					"type": "OLD",
					"grade": 1,
					"limit_break": 0,
					"atkup": 0,
					"defup": 0,
					"exp": 40,
					"abp": 0,
					"prio": 0,
					"zako": 0,
					"path": "",
					"state": 1,
					"vip": 0,
					"pspts": [
					{
						"eptid": "02d4786b-cec8-44e0-9a8b-545f3e3df4de",
						"gettime": 0,
						"ptid": "PT_ARM_WP020_001",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 420,
						"lvl": 1,
						"zid": "a3ab93b2-530f-40ac-9141-c44641b7ded2"
					},
					{
						"eptid": "94a49b72-b8ad-417a-b1f8-06db622f5280",
						"gettime": 0,
						"ptid": "PT_ARM_WP020_001",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 896,
						"lvl": 1,
						"zid": "a3ab93b2-530f-40ac-9141-c44641b7ded2"
					},
					{
						"eptid": "b081c620-f55f-411d-a1c3-e3bb3b0a5dfb",
						"gettime": 0,
						"ptid": "PT_FAN_TOPS_003",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 743,
						"lvl": 1,
						"zid": "a3ab93b2-530f-40ac-9141-c44641b7ded2"
					},
					{
						"eptid": "337eef02-550a-4257-a45c-23287d1f712e",
						"gettime": 0,
						"ptid": "PT_MIL_HEAD_005",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 355,
						"lvl": 1,
						"zid": "a3ab93b2-530f-40ac-9141-c44641b7ded2"
					},
					{
						"eptid": "db0ebbfd-d096-43e0-8c8b-04cafd216a97",
						"gettime": 0,
						"ptid": "PT_SPO_BTM_002",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 528,
						"lvl": 1,
						"zid": "a3ab93b2-530f-40ac-9141-c44641b7ded2"
					}
					],
					"eqpts": [
					{
						"eptid": "02d4786b-cec8-44e0-9a8b-545f3e3df4de",
						"site": "EQSITE_ARML"
					},
					{
						"eptid": "94a49b72-b8ad-417a-b1f8-06db622f5280",
						"site": "EQSITE_ARMR"
					},
					{
						"eptid": "b081c620-f55f-411d-a1c3-e3bb3b0a5dfb",
						"site": "EQSITE_BODY"
					},
					{
						"eptid": "337eef02-550a-4257-a45c-23287d1f712e",
						"site": "EQSITE_HEAD"
					},
					{
						"eptid": "db0ebbfd-d096-43e0-8c8b-04cafd216a97",
						"site": "EQSITE_LEGS"
					}
					],
					"psskls": [],
					"mstlvl": [],
					"eqskls": [],
					"rwd": {
						"money": 100,
						"spirit": 0,
						"pts": [],
						"msrs": [],
						"items": [],
						"tbtp": ""
					},
					"stat": {
						"elms": []
					},
					"bodylvl": {
						"lvl": 30,
						"hp": 6,
						"str": 6,
						"dex": 6,
						"vit": 6,
						"stm": 6,
						"luk": 5,
						"skill": 0,
						"bag": 0
					},
					"bodybonus": {
						"hp_bonus": 0,
						"str_bonus": 0,
						"dex_bonus": 0,
						"vit_bonus": 0,
						"stm_bonus": 0,
						"luk_bonus": 0
					},
					"hunter": 0,
					"hp": 288,
					"emblem": "",
					"teamname": "",
					"isduring": 0,
					"isfriend": 0,
					"bodymaxlvl": 60,
					"unit": "START_V03",
					"pntid": "MET_ZMB_TGT_23"
				},
				{
					"zid": "8f56e060-1b44-4c31-b45a-dc0f398f73cf",
					"did": -1,
					"uid": -1,
					"clazz": 0,
					"name": "",
					"cname": "",
					"body": {
						"id": "BODY_MALE_008",
						"gender": "GENDER_MALE",
						"baid": "ASSET_MALE_BODY_008",
						"haid": "ASSET_MALE_HAIR_008",
						"colr": 1,
						"colg": 1,
						"colb": 1,
						"voicep": 8,
						"voiceb": 4,
						"provoke": 22
					},
					"gasmask": "",
					"attp": "ZMBATTP_PLAYER",
					"eqtp": "ZMBEQTP_CUSTOM",
					"lvl": 7,
					"type": "OLD",
					"grade": 1,
					"limit_break": 0,
					"atkup": 0,
					"defup": 0,
					"exp": 19,
					"abp": 0,
					"prio": 0,
					"zako": 0,
					"path": "",
					"state": 1,
					"vip": 0,
					"pspts": [
					{
						"eptid": "e124e887-04f1-4a3d-a6f8-ec4313cc53a3",
						"gettime": 0,
						"ptid": "PT_ARM_WP042_001",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 840,
						"lvl": 1,
						"zid": "8f56e060-1b44-4c31-b45a-dc0f398f73cf"
					},
					{
						"eptid": "47ba1f64-43d7-459f-893a-3c3a8fad0522",
						"gettime": 0,
						"ptid": "PT_DIY_HEAD_018",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 465,
						"lvl": 1,
						"zid": "8f56e060-1b44-4c31-b45a-dc0f398f73cf"
					},
					{
						"eptid": "1a702b76-7a4a-4fbb-bfd9-478299d1e349",
						"gettime": 0,
						"ptid": "PT_DIY_BTM_010",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 144,
						"lvl": 1,
						"zid": "8f56e060-1b44-4c31-b45a-dc0f398f73cf"
					}
					],
					"eqpts": [
					{
						"eptid": "e124e887-04f1-4a3d-a6f8-ec4313cc53a3",
						"site": "EQSITE_ARMR"
					},
					{
						"eptid": "47ba1f64-43d7-459f-893a-3c3a8fad0522",
						"site": "EQSITE_HEAD"
					},
					{
						"eptid": "1a702b76-7a4a-4fbb-bfd9-478299d1e349",
						"site": "EQSITE_LEGS"
					}
					],
					"psskls": [],
					"mstlvl": [],
					"eqskls": [],
					"rwd": {
						"money": 73,
						"spirit": 0,
						"pts": [],
						"msrs": [],
						"items": [],
						"tbtp": ""
					},
					"stat": {
						"elms": []
					},
					"bodylvl": {
						"lvl": 7,
						"hp": 2,
						"str": 2,
						"dex": 2,
						"vit": 2,
						"stm": 2,
						"luk": 2,
						"skill": 0,
						"bag": 0
					},
					"bodybonus": {
						"hp_bonus": 0,
						"str_bonus": 0,
						"dex_bonus": 0,
						"vit_bonus": 0,
						"stm_bonus": 0,
						"luk_bonus": 0
					},
					"hunter": 0,
					"hp": 216,
					"emblem": "",
					"teamname": "",
					"isduring": 0,
					"isfriend": 0,
					"bodymaxlvl": 60,
					"unit": "START_V03",
					"pntid": "MET_ZMB_TGT_07"
				},
				{
					"zid": "39ccd269-4a37-4393-9c26-2ce38117aa3b",
					"did": -1,
					"uid": -1,
					"clazz": 0,
					"name": "",
					"cname": "",
					"body": {
						"id": "BODY_MALE_002",
						"gender": "GENDER_MALE",
						"baid": "ASSET_MALE_BODY_002",
						"haid": "",
						"colr": 1,
						"colg": 1,
						"colb": 1,
						"voicep": 2,
						"voiceb": 1,
						"provoke": 4
					},
					"gasmask": "",
					"attp": "ZMBATTP_PLAYER",
					"eqtp": "ZMBEQTP_CUSTOM",
					"lvl": 1,
					"type": "OLD",
					"grade": 1,
					"limit_break": 0,
					"atkup": 0,
					"defup": 0,
					"exp": 3,
					"abp": 0,
					"prio": 0,
					"zako": 0,
					"path": "",
					"state": 1,
					"vip": 0,
					"pspts": [
					{
						"eptid": "427dc546-5921-41ca-9e1a-ef24d3d9d7c5",
						"gettime": 0,
						"ptid": "PT_ARM_WP011_001",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 1176,
						"lvl": 1,
						"zid": "39ccd269-4a37-4393-9c26-2ce38117aa3b"
					},
					{
						"eptid": "7a344330-66e0-4ade-adfd-7f161abd2143",
						"gettime": 0,
						"ptid": "PT_DIY_HEAD_009",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 220,
						"lvl": 1,
						"zid": "39ccd269-4a37-4393-9c26-2ce38117aa3b"
					}
					],
					"eqpts": [
					{
						"eptid": "427dc546-5921-41ca-9e1a-ef24d3d9d7c5",
						"site": "EQSITE_ARMR"
					},
					{
						"eptid": "7a344330-66e0-4ade-adfd-7f161abd2143",
						"site": "EQSITE_HEAD"
					}
					],
					"psskls": [],
					"mstlvl": [],
					"eqskls": [],
					"rwd": {
						"money": 69,
						"spirit": 0,
						"pts": [
						{
							"eptid": "427dc546-5921-41ca-9e1a-ef24d3d9d7c5"
						}
						],
						"msrs": [],
						"items": [],
						"tbtp": ""
					},
					"stat": {
						"elms": []
					},
					"bodylvl": {
						"lvl": 1,
						"hp": 1,
						"str": 1,
						"dex": 1,
						"vit": 1,
						"stm": 1,
						"luk": 1,
						"skill": 0,
						"bag": 0
					},
					"bodybonus": {
						"hp_bonus": 0,
						"str_bonus": 0,
						"dex_bonus": 0,
						"vit_bonus": 0,
						"stm_bonus": 0,
						"luk_bonus": 0
					},
					"hunter": 0,
					"hp": 200,
					"emblem": "",
					"teamname": "",
					"isduring": 0,
					"isfriend": 0,
					"bodymaxlvl": 60,
					"unit": "A23_ST_V02",
					"pntid": "MET_ZMB_TGT_04"
				},
				{
					"zid": "fd9683f8-11c2-4b64-ab76-f672efb5a0f8",
					"did": -1,
					"uid": -1,
					"clazz": 0,
					"name": "",
					"cname": "",
					"body": {
						"id": "BODY_FEMALE_008",
						"gender": "GENDER_FEMALE",
						"baid": "ASSET_FEMALE_BODY_008",
						"haid": "ASSET_FEMALE_HAIR_008",
						"colr": 1,
						"colg": 1,
						"colb": 1,
						"voicep": 8,
						"voiceb": 8,
						"provoke": 22
					},
					"gasmask": "",
					"attp": "ZMBATTP_PLAYER",
					"eqtp": "ZMBEQTP_CUSTOM",
					"lvl": 5,
					"type": "BAL",
					"grade": 1,
					"limit_break": 0,
					"atkup": 0,
					"defup": 0,
					"exp": 6,
					"abp": 0,
					"prio": 0,
					"zako": 0,
					"path": "",
					"state": 1,
					"vip": 0,
					"pspts": [
					{
						"eptid": "0e347362-02a5-4c15-94bc-f5bf86c6d797",
						"gettime": 0,
						"ptid": "PT_ARM_WP012_001",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 1400,
						"lvl": 1,
						"zid": "fd9683f8-11c2-4b64-ab76-f672efb5a0f8"
					},
					{
						"eptid": "dc2ed2de-37ca-4245-8466-2897b5279c5d",
						"gettime": 0,
						"ptid": "PT_DIY_BTM_003",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 680,
						"lvl": 1,
						"zid": "fd9683f8-11c2-4b64-ab76-f672efb5a0f8"
					}
					],
					"eqpts": [
					{
						"eptid": "0e347362-02a5-4c15-94bc-f5bf86c6d797",
						"site": "EQSITE_ARMR"
					},
					{
						"eptid": "dc2ed2de-37ca-4245-8466-2897b5279c5d",
						"site": "EQSITE_LEGS"
					}
					],
					"psskls": [],
					"mstlvl": [],
					"eqskls": [],
					"rwd": {
						"money": 64,
						"spirit": 0,
						"pts": [
						{
							"eptid": "dc2ed2de-37ca-4245-8466-2897b5279c5d"
						}
						],
						"msrs": [],
						"items": [],
						"tbtp": ""
					},
					"stat": {
						"elms": []
					},
					"bodylvl": {
						"lvl": 5,
						"hp": 2,
						"str": 2,
						"dex": 2,
						"vit": 2,
						"stm": 1,
						"luk": 1,
						"skill": 0,
						"bag": 0
					},
					"bodybonus": {
						"hp_bonus": 0,
						"str_bonus": 0,
						"dex_bonus": 0,
						"vit_bonus": 0,
						"stm_bonus": 0,
						"luk_bonus": 0
					},
					"hunter": 0,
					"hp": 230,
					"emblem": "",
					"teamname": "",
					"isduring": 0,
					"isfriend": 0,
					"bodymaxlvl": 6,
					"unit": "A21_ST_V02",
					"pntid": "MET_ZMB_TGT_11"
				},
				{
					"zid": "221acba0-a036-4c69-9e98-7e7aba9e41a4",
					"did": -1,
					"uid": -1,
					"clazz": 0,
					"name": "",
					"cname": "",
					"body": {
						"id": "BODY_MALE_003",
						"gender": "GENDER_MALE",
						"baid": "ASSET_MALE_BODY_003",
						"haid": "ASSET_MALE_HAIR_001",
						"colr": 1,
						"colg": 1,
						"colb": 1,
						"voicep": 3,
						"voiceb": 2,
						"provoke": 7
					},
					"gasmask": "",
					"attp": "ZMBATTP_PLAYER",
					"eqtp": "ZMBEQTP_CUSTOM",
					"lvl": 30,
					"type": "OLD",
					"grade": 1,
					"limit_break": 0,
					"atkup": 0,
					"defup": 0,
					"exp": 40,
					"abp": 0,
					"prio": 0,
					"zako": 0,
					"path": "",
					"state": 1,
					"vip": 0,
					"pspts": [
					{
						"eptid": "e5724108-4195-4398-89b9-be933d73cc77",
						"gettime": 0,
						"ptid": "PT_ARM_WP020_001",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 770,
						"lvl": 1,
						"zid": "221acba0-a036-4c69-9e98-7e7aba9e41a4"
					},
					{
						"eptid": "a0d8fe2b-5bff-4533-9c91-b4867fcfadb7",
						"gettime": 0,
						"ptid": "PT_ARM_WP020_001",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 1036,
						"lvl": 1,
						"zid": "221acba0-a036-4c69-9e98-7e7aba9e41a4"
					},
					{
						"eptid": "c2532b14-93b4-474a-9802-b21103aeecb2",
						"gettime": 0,
						"ptid": "PT_FAN_TOPS_003",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 647,
						"lvl": 1,
						"zid": "221acba0-a036-4c69-9e98-7e7aba9e41a4"
					},
					{
						"eptid": "f248c77e-8a96-493a-a093-e27c9a20cab4",
						"gettime": 0,
						"ptid": "PT_MIL_HEAD_005",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 475,
						"lvl": 1,
						"zid": "221acba0-a036-4c69-9e98-7e7aba9e41a4"
					},
					{
						"eptid": "1722e495-5a4a-4da0-b48c-5d1811c99ecd",
						"gettime": 0,
						"ptid": "PT_SPO_BTM_002",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 522,
						"lvl": 1,
						"zid": "221acba0-a036-4c69-9e98-7e7aba9e41a4"
					}
					],
					"eqpts": [
					{
						"eptid": "e5724108-4195-4398-89b9-be933d73cc77",
						"site": "EQSITE_ARML"
					},
					{
						"eptid": "a0d8fe2b-5bff-4533-9c91-b4867fcfadb7",
						"site": "EQSITE_ARMR"
					},
					{
						"eptid": "c2532b14-93b4-474a-9802-b21103aeecb2",
						"site": "EQSITE_BODY"
					},
					{
						"eptid": "f248c77e-8a96-493a-a093-e27c9a20cab4",
						"site": "EQSITE_HEAD"
					},
					{
						"eptid": "1722e495-5a4a-4da0-b48c-5d1811c99ecd",
						"site": "EQSITE_LEGS"
					}
					],
					"psskls": [],
					"mstlvl": [],
					"eqskls": [],
					"rwd": {
						"money": 103,
						"spirit": 0,
						"pts": [],
						"msrs": [],
						"items": [],
						"tbtp": ""
					},
					"stat": {
						"elms": []
					},
					"bodylvl": {
						"lvl": 30,
						"hp": 6,
						"str": 6,
						"dex": 6,
						"vit": 6,
						"stm": 6,
						"luk": 5,
						"skill": 0,
						"bag": 0
					},
					"bodybonus": {
						"hp_bonus": 0,
						"str_bonus": 0,
						"dex_bonus": 0,
						"vit_bonus": 0,
						"stm_bonus": 0,
						"luk_bonus": 0
					},
					"hunter": 0,
					"hp": 288,
					"emblem": "",
					"teamname": "",
					"isduring": 0,
					"isfriend": 0,
					"bodymaxlvl": 60,
					"unit": "START_V03",
					"pntid": "MET_ZMB_TGT_21"
				},
				{
					"zid": "66797bbb-f73e-4b52-bd73-3d263b5a5567",
					"did": -1,
					"uid": -1,
					"clazz": 0,
					"name": "",
					"cname": "",
					"body": {
						"id": "BODY_MALE_005",
						"gender": "GENDER_MALE",
						"baid": "ASSET_MALE_BODY_005",
						"haid": "ASSET_MALE_HAIR_003",
						"colr": 1,
						"colg": 1,
						"colb": 1,
						"voicep": 5,
						"voiceb": 3,
						"provoke": 13
					},
					"gasmask": "",
					"attp": "ZMBATTP_PLAYER",
					"eqtp": "ZMBEQTP_CUSTOM",
					"lvl": 3,
					"type": "BAL",
					"grade": 1,
					"limit_break": 0,
					"atkup": 0,
					"defup": 0,
					"exp": 7,
					"abp": 0,
					"prio": 0,
					"zako": 0,
					"path": "",
					"state": 1,
					"vip": 0,
					"pspts": [
					{
						"eptid": "1f82053d-7db6-4f9c-bd7b-6d311c481b46",
						"gettime": 0,
						"ptid": "PT_ARM_WP032_001",
						"rest": 50,
						"spare": 100,
						"grade": 0,
						"dur": 1246,
						"lvl": 1,
						"zid": "66797bbb-f73e-4b52-bd73-3d263b5a5567"
					},
					{
						"eptid": "052a549f-4217-43b1-9de1-585c11a2fa2b",
						"gettime": 0,
						"ptid": "PT_DIY_TOPS_019",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 691,
						"lvl": 1,
						"zid": "66797bbb-f73e-4b52-bd73-3d263b5a5567"
					},
					{
						"eptid": "84b50762-0feb-48b4-9ff1-8a9dc695863d",
						"gettime": 0,
						"ptid": "PT_DIY_HEAD_013",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 395,
						"lvl": 1,
						"zid": "66797bbb-f73e-4b52-bd73-3d263b5a5567"
					}
					],
					"eqpts": [
					{
						"eptid": "1f82053d-7db6-4f9c-bd7b-6d311c481b46",
						"site": "EQSITE_ARMR"
					},
					{
						"eptid": "052a549f-4217-43b1-9de1-585c11a2fa2b",
						"site": "EQSITE_BODY"
					},
					{
						"eptid": "84b50762-0feb-48b4-9ff1-8a9dc695863d",
						"site": "EQSITE_HEAD"
					}
					],
					"psskls": [],
					"mstlvl": [],
					"eqskls": [],
					"rwd": {
						"money": 70,
						"spirit": 0,
						"pts": [
						{
							"eptid": "052a549f-4217-43b1-9de1-585c11a2fa2b"
						}
						],
						"msrs": [],
						"items": [],
						"tbtp": ""
					},
					"stat": {
						"elms": []
					},
					"bodylvl": {
						"lvl": 3,
						"hp": 2,
						"str": 2,
						"dex": 1,
						"vit": 1,
						"stm": 1,
						"luk": 1,
						"skill": 0,
						"bag": 0
					},
					"bodybonus": {
						"hp_bonus": 0,
						"str_bonus": 0,
						"dex_bonus": 0,
						"vit_bonus": 0,
						"stm_bonus": 0,
						"luk_bonus": 0
					},
					"hunter": 0,
					"hp": 230,
					"emblem": "",
					"teamname": "",
					"isduring": 0,
					"isfriend": 0,
					"bodymaxlvl": 6,
					"unit": "A21_ST_V02",
					"pntid": "MET_ZMB_TGT_03"
				},
				{
					"zid": "04462dbc-67cf-4c02-9df1-313cad58f3e5",
					"did": -1,
					"uid": -1,
					"clazz": 0,
					"name": "",
					"cname": "",
					"body": {
						"id": "BODY_MALE_005",
						"gender": "GENDER_MALE",
						"baid": "ASSET_MALE_BODY_005",
						"haid": "ASSET_MALE_HAIR_003",
						"colr": 1,
						"colg": 1,
						"colb": 1,
						"voicep": 5,
						"voiceb": 3,
						"provoke": 13
					},
					"gasmask": "",
					"attp": "ZMBATTP_PLAYER",
					"eqtp": "ZMBEQTP_CUSTOM",
					"lvl": 30,
					"type": "OLD",
					"grade": 1,
					"limit_break": 0,
					"atkup": 0,
					"defup": 0,
					"exp": 40,
					"abp": 0,
					"prio": 0,
					"zako": 0,
					"path": "",
					"state": 1,
					"vip": 0,
					"pspts": [
					{
						"eptid": "a664ed91-ebbb-4819-94ac-b5e6712cdecb",
						"gettime": 0,
						"ptid": "PT_ARM_WP020_001",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 994,
						"lvl": 1,
						"zid": "04462dbc-67cf-4c02-9df1-313cad58f3e5"
					},
					{
						"eptid": "ccd0e771-6ffc-479c-8fe9-99f532c11cff",
						"gettime": 0,
						"ptid": "PT_ARM_WP020_001",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 308,
						"lvl": 1,
						"zid": "04462dbc-67cf-4c02-9df1-313cad58f3e5"
					},
					{
						"eptid": "80c3543d-36b0-4cbe-8e07-3cefd5fa6e27",
						"gettime": 0,
						"ptid": "PT_FAN_TOPS_003",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 603,
						"lvl": 1,
						"zid": "04462dbc-67cf-4c02-9df1-313cad58f3e5"
					},
					{
						"eptid": "885331d1-3c29-4379-abf3-0121fb70df01",
						"gettime": 0,
						"ptid": "PT_MIL_HEAD_005",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 500,
						"lvl": 1,
						"zid": "04462dbc-67cf-4c02-9df1-313cad58f3e5"
					},
					{
						"eptid": "85713d12-537f-4286-b263-b3fd5bcd040d",
						"gettime": 0,
						"ptid": "PT_SPO_BTM_002",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 419,
						"lvl": 1,
						"zid": "04462dbc-67cf-4c02-9df1-313cad58f3e5"
					}
					],
					"eqpts": [
					{
						"eptid": "a664ed91-ebbb-4819-94ac-b5e6712cdecb",
						"site": "EQSITE_ARML"
					},
					{
						"eptid": "ccd0e771-6ffc-479c-8fe9-99f532c11cff",
						"site": "EQSITE_ARMR"
					},
					{
						"eptid": "80c3543d-36b0-4cbe-8e07-3cefd5fa6e27",
						"site": "EQSITE_BODY"
					},
					{
						"eptid": "885331d1-3c29-4379-abf3-0121fb70df01",
						"site": "EQSITE_HEAD"
					},
					{
						"eptid": "85713d12-537f-4286-b263-b3fd5bcd040d",
						"site": "EQSITE_LEGS"
					}
					],
					"psskls": [],
					"mstlvl": [],
					"eqskls": [],
					"rwd": {
						"money": 80,
						"spirit": 0,
						"pts": [],
						"msrs": [],
						"items": [],
						"tbtp": ""
					},
					"stat": {
						"elms": []
					},
					"bodylvl": {
						"lvl": 30,
						"hp": 6,
						"str": 6,
						"dex": 6,
						"vit": 6,
						"stm": 6,
						"luk": 5,
						"skill": 0,
						"bag": 0
					},
					"bodybonus": {
						"hp_bonus": 0,
						"str_bonus": 0,
						"dex_bonus": 0,
						"vit_bonus": 0,
						"stm_bonus": 0,
						"luk_bonus": 0
					},
					"hunter": 0,
					"hp": 288,
					"emblem": "",
					"teamname": "",
					"isduring": 0,
					"isfriend": 0,
					"bodymaxlvl": 60,
					"unit": "START_V03",
					"pntid": "MET_ZMB_TGT_18"
				},
				{
					"zid": "7fd69d4b-d103-4af4-bbbe-61137853f4e7",
					"did": -1,
					"uid": -1,
					"clazz": 0,
					"name": "",
					"cname": "",
					"body": {
						"id": "BODY_MALE_003",
						"gender": "GENDER_MALE",
						"baid": "ASSET_MALE_BODY_003",
						"haid": "ASSET_MALE_HAIR_001",
						"colr": 1,
						"colg": 1,
						"colb": 1,
						"voicep": 3,
						"voiceb": 2,
						"provoke": 7
					},
					"gasmask": "",
					"attp": "ZMBATTP_PLAYER",
					"eqtp": "ZMBEQTP_CUSTOM",
					"lvl": 1,
					"type": "OLD",
					"grade": 1,
					"limit_break": 0,
					"atkup": 0,
					"defup": 0,
					"exp": 3,
					"abp": 0,
					"prio": 0,
					"zako": 0,
					"path": "",
					"state": 1,
					"vip": 0,
					"pspts": [
					{
						"eptid": "d869f1f1-d143-4ab9-b156-8d72e0f6a379",
						"gettime": 0,
						"ptid": "PT_ARM_WP006_001",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 1092,
						"lvl": 1,
						"zid": "7fd69d4b-d103-4af4-bbbe-61137853f4e7"
					},
					{
						"eptid": "de19414a-af20-4575-873a-000d47aa1b4d",
						"gettime": 0,
						"ptid": "PT_DIY_HEAD_003",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 350,
						"lvl": 1,
						"zid": "7fd69d4b-d103-4af4-bbbe-61137853f4e7"
					}
					],
					"eqpts": [
					{
						"eptid": "d869f1f1-d143-4ab9-b156-8d72e0f6a379",
						"site": "EQSITE_ARMR"
					},
					{
						"eptid": "de19414a-af20-4575-873a-000d47aa1b4d",
						"site": "EQSITE_HEAD"
					}
					],
					"psskls": [],
					"mstlvl": [],
					"eqskls": [],
					"rwd": {
						"money": 72,
						"spirit": 0,
						"pts": [
						{
							"eptid": "d869f1f1-d143-4ab9-b156-8d72e0f6a379"
						}
						],
						"msrs": [],
						"items": [],
						"tbtp": ""
					},
					"stat": {
						"elms": []
					},
					"bodylvl": {
						"lvl": 1,
						"hp": 1,
						"str": 1,
						"dex": 1,
						"vit": 1,
						"stm": 1,
						"luk": 1,
						"skill": 0,
						"bag": 0
					},
					"bodybonus": {
						"hp_bonus": 0,
						"str_bonus": 0,
						"dex_bonus": 0,
						"vit_bonus": 0,
						"stm_bonus": 0,
						"luk_bonus": 0
					},
					"hunter": 0,
					"hp": 200,
					"emblem": "",
					"teamname": "",
					"isduring": 0,
					"isfriend": 0,
					"bodymaxlvl": 60,
					"unit": "A23_ST_V02",
					"pntid": "MET_ZMB_TGT_01"
				},
				{
					"zid": "b7bc8729-7306-43b8-80dd-e9425b3ef815",
					"did": -1,
					"uid": -1,
					"clazz": 0,
					"name": "",
					"cname": "",
					"body": {
						"id": "BODY_FEMALE_007",
						"gender": "GENDER_FEMALE",
						"baid": "ASSET_FEMALE_BODY_007",
						"haid": "ASSET_FEMALE_HAIR_007",
						"colr": 1,
						"colg": 1,
						"colb": 1,
						"voicep": 7,
						"voiceb": 8,
						"provoke": 19
					},
					"gasmask": "",
					"attp": "ZMBATTP_PLAYER",
					"eqtp": "ZMBEQTP_CUSTOM",
					"lvl": 5,
					"type": "BAL",
					"grade": 1,
					"limit_break": 0,
					"atkup": 0,
					"defup": 0,
					"exp": 6,
					"abp": 0,
					"prio": 0,
					"zako": 0,
					"path": "",
					"state": 1,
					"vip": 0,
					"pspts": [
					{
						"eptid": "27024b94-180b-4e04-b117-48c04d714ef1",
						"gettime": 0,
						"ptid": "PT_ARM_WP012_001",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 1218,
						"lvl": 1,
						"zid": "b7bc8729-7306-43b8-80dd-e9425b3ef815"
					},
					{
						"eptid": "87a63c4f-1ce3-4157-8497-164e66b11c21",
						"gettime": 0,
						"ptid": "PT_DIY_BTM_003",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 577,
						"lvl": 1,
						"zid": "b7bc8729-7306-43b8-80dd-e9425b3ef815"
					}
					],
					"eqpts": [
					{
						"eptid": "27024b94-180b-4e04-b117-48c04d714ef1",
						"site": "EQSITE_ARMR"
					},
					{
						"eptid": "87a63c4f-1ce3-4157-8497-164e66b11c21",
						"site": "EQSITE_LEGS"
					}
					],
					"psskls": [],
					"mstlvl": [],
					"eqskls": [],
					"rwd": {
						"money": 71,
						"spirit": 0,
						"pts": [
						{
							"eptid": "87a63c4f-1ce3-4157-8497-164e66b11c21"
						}
						],
						"msrs": [],
						"items": [],
						"tbtp": ""
					},
					"stat": {
						"elms": []
					},
					"bodylvl": {
						"lvl": 5,
						"hp": 2,
						"str": 2,
						"dex": 2,
						"vit": 2,
						"stm": 1,
						"luk": 1,
						"skill": 0,
						"bag": 0
					},
					"bodybonus": {
						"hp_bonus": 0,
						"str_bonus": 0,
						"dex_bonus": 0,
						"vit_bonus": 0,
						"stm_bonus": 0,
						"luk_bonus": 0
					},
					"hunter": 0,
					"hp": 230,
					"emblem": "",
					"teamname": "",
					"isduring": 0,
					"isfriend": 0,
					"bodymaxlvl": 6,
					"unit": "A21_ST_V02",
					"pntid": "MET_ZMB_TGT_08"
				},
				{
					"zid": "1f2e7d13-09c4-4370-8cc2-2f16c3938f50",
					"did": -1,
					"uid": -1,
					"clazz": 0,
					"name": "",
					"cname": "",
					"body": {
						"id": "BODY_MALE_002",
						"gender": "GENDER_MALE",
						"baid": "ASSET_MALE_BODY_002",
						"haid": "",
						"colr": 1,
						"colg": 1,
						"colb": 1,
						"voicep": 2,
						"voiceb": 1,
						"provoke": 4
					},
					"gasmask": "",
					"attp": "ZMBATTP_PLAYER",
					"eqtp": "ZMBEQTP_CUSTOM",
					"lvl": 30,
					"type": "OLD",
					"grade": 1,
					"limit_break": 0,
					"atkup": 0,
					"defup": 0,
					"exp": 40,
					"abp": 0,
					"prio": 0,
					"zako": 0,
					"path": "",
					"state": 1,
					"vip": 0,
					"pspts": [
					{
						"eptid": "c6e7e04a-e85c-43e6-bda0-79d97c7619de",
						"gettime": 0,
						"ptid": "PT_ARM_WP020_001",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 924,
						"lvl": 1,
						"zid": "1f2e7d13-09c4-4370-8cc2-2f16c3938f50"
					},
					{
						"eptid": "6f978b8b-01f2-4efb-8320-485b7e72070d",
						"gettime": 0,
						"ptid": "PT_ARM_WP020_001",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 1218,
						"lvl": 1,
						"zid": "1f2e7d13-09c4-4370-8cc2-2f16c3938f50"
					},
					{
						"eptid": "0449dbce-7d8e-4cfe-83d0-c8e1f4da26e3",
						"gettime": 0,
						"ptid": "PT_FAN_TOPS_003",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 656,
						"lvl": 1,
						"zid": "1f2e7d13-09c4-4370-8cc2-2f16c3938f50"
					},
					{
						"eptid": "e58cd9af-699b-418d-9056-5563ce672690",
						"gettime": 0,
						"ptid": "PT_MIL_HEAD_005",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 195,
						"lvl": 1,
						"zid": "1f2e7d13-09c4-4370-8cc2-2f16c3938f50"
					},
					{
						"eptid": "2dee6a06-2d8c-454a-a215-7fa44d853cfa",
						"gettime": 0,
						"ptid": "PT_SPO_BTM_002",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 604,
						"lvl": 1,
						"zid": "1f2e7d13-09c4-4370-8cc2-2f16c3938f50"
					}
					],
					"eqpts": [
					{
						"eptid": "c6e7e04a-e85c-43e6-bda0-79d97c7619de",
						"site": "EQSITE_ARML"
					},
					{
						"eptid": "6f978b8b-01f2-4efb-8320-485b7e72070d",
						"site": "EQSITE_ARMR"
					},
					{
						"eptid": "0449dbce-7d8e-4cfe-83d0-c8e1f4da26e3",
						"site": "EQSITE_BODY"
					},
					{
						"eptid": "e58cd9af-699b-418d-9056-5563ce672690",
						"site": "EQSITE_HEAD"
					},
					{
						"eptid": "2dee6a06-2d8c-454a-a215-7fa44d853cfa",
						"site": "EQSITE_LEGS"
					}
					],
					"psskls": [],
					"mstlvl": [],
					"eqskls": [],
					"rwd": {
						"money": 80,
						"spirit": 0,
						"pts": [],
						"msrs": [],
						"items": [],
						"tbtp": ""
					},
					"stat": {
						"elms": []
					},
					"bodylvl": {
						"lvl": 30,
						"hp": 6,
						"str": 6,
						"dex": 6,
						"vit": 6,
						"stm": 6,
						"luk": 5,
						"skill": 0,
						"bag": 0
					},
					"bodybonus": {
						"hp_bonus": 0,
						"str_bonus": 0,
						"dex_bonus": 0,
						"vit_bonus": 0,
						"stm_bonus": 0,
						"luk_bonus": 0
					},
					"hunter": 0,
					"hp": 288,
					"emblem": "",
					"teamname": "",
					"isduring": 0,
					"isfriend": 0,
					"bodymaxlvl": 60,
					"unit": "START_V03",
					"pntid": "MET_ZMB_TGT_16"
				},
				{
					"zid": "d665585f-2bd9-4d48-a089-37bb75c753a9",
					"did": -1,
					"uid": -1,
					"clazz": 0,
					"name": "",
					"cname": "",
					"body": {
						"id": "BODY_FEMALE_003",
						"gender": "GENDER_FEMALE",
						"baid": "ASSET_FEMALE_BODY_003",
						"haid": "ASSET_FEMALE_HAIR_003",
						"colr": 1,
						"colg": 1,
						"colb": 1,
						"voicep": 3,
						"voiceb": 6,
						"provoke": 7
					},
					"gasmask": "",
					"attp": "ZMBATTP_PLAYER",
					"eqtp": "ZMBEQTP_CUSTOM",
					"lvl": 8,
					"type": "OLD",
					"grade": 1,
					"limit_break": 0,
					"atkup": 0,
					"defup": 0,
					"exp": 20,
					"abp": 0,
					"prio": 0,
					"zako": 0,
					"path": "",
					"state": 1,
					"vip": 0,
					"pspts": [
					{
						"eptid": "60cb42f1-a307-42a6-9767-a4ea76a6ebdf",
						"gettime": 0,
						"ptid": "PT_ARM_WP013_001",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 1288,
						"lvl": 1,
						"zid": "d665585f-2bd9-4d48-a089-37bb75c753a9"
					},
					{
						"eptid": "88de137b-6d66-4560-bdf0-7b7e51010b00",
						"gettime": 0,
						"ptid": "PT_DIY_TOPS_002",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 481,
						"lvl": 1,
						"zid": "d665585f-2bd9-4d48-a089-37bb75c753a9"
					},
					{
						"eptid": "6d2a23a6-b7c9-4f8e-bcc6-59138e28a224",
						"gettime": 0,
						"ptid": "PT_DIY_HEAD_004",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 470,
						"lvl": 1,
						"zid": "d665585f-2bd9-4d48-a089-37bb75c753a9"
					}
					],
					"eqpts": [
					{
						"eptid": "60cb42f1-a307-42a6-9767-a4ea76a6ebdf",
						"site": "EQSITE_ARMR"
					},
					{
						"eptid": "88de137b-6d66-4560-bdf0-7b7e51010b00",
						"site": "EQSITE_BODY"
					},
					{
						"eptid": "6d2a23a6-b7c9-4f8e-bcc6-59138e28a224",
						"site": "EQSITE_HEAD"
					}
					],
					"psskls": [],
					"mstlvl": [],
					"eqskls": [],
					"rwd": {
						"money": 74,
						"spirit": 0,
						"pts": [],
						"msrs": [],
						"items": [],
						"tbtp": ""
					},
					"stat": {
						"elms": []
					},
					"bodylvl": {
						"lvl": 8,
						"hp": 3,
						"str": 2,
						"dex": 2,
						"vit": 2,
						"stm": 2,
						"luk": 2,
						"skill": 0,
						"bag": 0
					},
					"bodybonus": {
						"hp_bonus": 0,
						"str_bonus": 0,
						"dex_bonus": 0,
						"vit_bonus": 0,
						"stm_bonus": 0,
						"luk_bonus": 0
					},
					"hunter": 0,
					"hp": 233,
					"emblem": "",
					"teamname": "",
					"isduring": 0,
					"isfriend": 0,
					"bodymaxlvl": 60,
					"unit": "START_V03",
					"pntid": "MET_ZMB_TGT_09"
				}
				],
				"tbms": [],
				"tbps": [
				{
					"unit": "A18_ST_V01",
					"pntid": "MET_TB_TGT_10",
					"type": "TBTP_MEDIUM",
					"apid": "TBAP_FACE_DOWN",
					"prio": 4,
					"eptid": "39e76395-7155-4a5f-a105-dfa9a2b8c669",
					"rest": 0,
					"spare": 0,
					"grade": 0,
					"dur": 462,
					"pt": {
						"eptid": "39e76395-7155-4a5f-a105-dfa9a2b8c669",
						"gettime": 0,
						"ptid": "PT_ARM_WP001_001",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 462,
						"lvl": 1
					},
					"genid": ""
				},
				{
					"unit": "A18_ST_V01",
					"pntid": "MET_TB_TGT_13",
					"type": "TBTP_MEDIUM",
					"apid": "TBAP_FACE_DOWN",
					"prio": 3,
					"eptid": "ca32dd8e-ed15-4b81-b9bd-01734a5f7a08",
					"rest": 10,
					"spare": 5,
					"grade": 0,
					"dur": 434,
					"pt": {
						"eptid": "ca32dd8e-ed15-4b81-b9bd-01734a5f7a08",
						"gettime": 0,
						"ptid": "PT_ARM_WP004_001",
						"rest": 10,
						"spare": 5,
						"grade": 0,
						"dur": 434,
						"lvl": 1
					},
					"genid": ""
				},
				{
					"unit": "A18_ST_V01",
					"pntid": "MET_TB_TGT_14",
					"type": "TBTP_MEDIUM",
					"apid": "TBAP_FACE_DOWN",
					"prio": 2,
					"eptid": "ad38e43d-98bf-4167-a35d-e3333a20842d",
					"rest": 0,
					"spare": 0,
					"grade": 0,
					"dur": 518,
					"pt": {
						"eptid": "ad38e43d-98bf-4167-a35d-e3333a20842d",
						"gettime": 0,
						"ptid": "PT_ARM_WP005_001",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 518,
						"lvl": 1
					},
					"genid": ""
				},
				{
					"unit": "A18_ST_V01",
					"pntid": "MET_TB_TGT_15",
					"type": "TBTP_MEDIUM",
					"apid": "TBAP_FACE_DOWN",
					"prio": 5,
					"eptid": "88893bde-1341-46c7-8396-33c530fd2510",
					"rest": 6,
					"spare": 7,
					"grade": 0,
					"dur": 462,
					"pt": {
						"eptid": "88893bde-1341-46c7-8396-33c530fd2510",
						"gettime": 0,
						"ptid": "PT_ARM_WP017_001",
						"rest": 6,
						"spare": 7,
						"grade": 0,
						"dur": 462,
						"lvl": 1
					},
					"genid": ""
				},
				{
					"unit": "A18_ST_V01",
					"pntid": "MET_TB_TGT_20",
					"type": "TBTP_MEDIUM",
					"apid": "TBAP_FACE_DOWN",
					"prio": 1,
					"eptid": "fab72dbe-d796-4e24-9ee9-2e7f7bbca0c1",
					"rest": 0,
					"spare": 0,
					"grade": 0,
					"dur": 490,
					"pt": {
						"eptid": "fab72dbe-d796-4e24-9ee9-2e7f7bbca0c1",
						"gettime": 0,
						"ptid": "PT_ARM_WP043_001",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 490,
						"lvl": 1
					},
					"genid": ""
				}
				],
				"tbis": [],
				"shps": [],
				"mbss": [],
				"zks": [],
				"ffms": [],
				"msrs": [
				{
					"unit": "A02_CV_V01",
					"pntid": "MET_MSR_TGT_02",
					"msr": {
						"emsrid": "19d56a66-2d47-46b7-89d5-72510cdc4a7b",
						"msrid": "MSR_013",
						"gettime": 0,
						"eefcid": "",
						"tefcid": "",
						"state": 0
					},
					"genid": "MSRGEN_51"
				}
				],
				"items": [],
				"bsts": [],
				"gates": [],
				"dusts": [
				{
					"uid": "459881",
					"flrid": "MET_FLR_01",
					"areaid": "MET_AREA_TUTRIAL",
					"unit": "START_V01",
					"pntid": "MET_DST_TGT_00",
					"type": "CHARGE",
					"edustid": "START_V01-MET_DST_TGT_00"
				}
				],
				"soupshp": 0,
				"stamp": [],
				"magazine": [],
				"cls": [],
				"sbs": [],
				"posters": [
				{
					"unit": "A21_ST",
					"tpnt": "MET_PST_TGT_00",
					"txtid": ""
				},
				{
					"unit": "BOSS",
					"tpnt": "MET_NEWS_TGT_00",
					"txtid": ""
				}
				],
				"jklsdf": [
				{
					"type": "JACKAL_X",
					"rwd": {
						"pts": [
						{
							"eptid": "0baf2f3f-1d96-4596-ad00-e035d25dae03",
							"gettime": 0,
							"ptid": "PT_JAC_BTM_001",
							"rest": 0,
							"spare": 0,
							"grade": 0,
							"dur": 322,
							"lvl": 1
						}
						],
						"money": 0,
						"spirit": 0,
						"msrs": [],
						"items": []
					},
					"isKilled": 0,
					"pspts": [
					{
						"eptid": "0baf2f3f-1d96-4596-ad00-e035d25dae03",
						"gettime": 0,
						"ptid": "PT_JAC_BTM_001",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 322,
						"lvl": 1
					}
					],
					"eqpts": [
					{
						"eptid": "0baf2f3f-1d96-4596-ad00-e035d25dae03",
						"site": "EQSITE_LEGS"
					}
					]
				},
				{
					"type": "JACKAL_XX",
					"rwd": {
						"pts": [],
						"money": 0,
						"spirit": 0,
						"msrs": [],
						"items": [
						{
							"eitemid": "840c66e9-bd88-4e1d-85eb-3670a29c4898",
							"itemId": "ITMT_STONE_JAC_1",
							"gettime": 0
						}
						]
					},
					"isKilled": 0,
					"pspts": [],
					"eqpts": []
				},
				{
					"type": "JACKAL_XXX",
					"rwd": {
						"pts": [],
						"money": 0,
						"spirit": 0,
						"msrs": [],
						"items": [
						{
							"eitemid": "5c6d2bd0-e08f-43a7-afc1-72c480dfc822",
							"itemId": "ITMT_STONE_JAC_2",
							"gettime": 0
						}
						]
					},
					"isKilled": 0,
					"pspts": [],
					"eqpts": []
				},
				{
					"type": "JACKAL_XXXX",
					"rwd": {
						"pts": [],
						"money": 0,
						"spirit": 0,
						"msrs": [],
						"items": [
						{
							"eitemid": "9342f75f-8f75-401a-afbd-9b168a30f32d",
							"itemId": "ITMT_STONE_JAC_5",
							"gettime": 0
						}
						]
					},
					"isKilled": 0,
					"pspts": [],
					"eqpts": []
				},
				{
					"type": "JACKAL_Y",
					"rwd": {
						"pts": [],
						"money": 1073,
						"spirit": 0,
						"msrs": [],
						"items": []
					},
					"isKilled": 0,
					"pspts": [],
					"eqpts": []
				},
				{
					"type": "JACKAL_YY",
					"rwd": {
						"pts": [],
						"money": 0,
						"spirit": 0,
						"msrs": [],
						"items": [
						{
							"eitemid": "4b42f35f-151d-48e9-9004-c1aace9bec91",
							"itemId": "ITMT_STONE_JAC_1",
							"gettime": 0
						}
						]
					},
					"isKilled": 0,
					"pspts": [],
					"eqpts": []
				},
				{
					"type": "JACKAL_YYY",
					"rwd": {
						"pts": [],
						"money": 0,
						"spirit": 0,
						"msrs": [],
						"items": [
						{
							"eitemid": "3d8babad-1ee7-47a6-a909-8f68af05e1b0",
							"itemId": "ITMT_STONE_JAC_3",
							"gettime": 0
						}
						]
					},
					"isKilled": 0,
					"pspts": [],
					"eqpts": []
				},
				{
					"type": "JACKAL_YYYY",
					"rwd": {
						"pts": [],
						"money": 0,
						"spirit": 0,
						"msrs": [],
						"items": [
						{
							"eitemid": "bf581e33-cb1b-45ff-b4ec-9eb71f82c155",
							"itemId": "ITMT_STONE_JAC_5",
							"gettime": 0
						}
						]
					},
					"isKilled": 0,
					"pspts": [],
					"eqpts": []
				},
				{
					"type": "JACKAL_Z",
					"rwd": {
						"pts": [
						{
							"eptid": "ecb6d246-bf69-4a2d-92df-89ce2070721a",
							"gettime": 0,
							"ptid": "PT_JAC_BTM_003",
							"rest": 0,
							"spare": 0,
							"grade": 0,
							"dur": 96,
							"lvl": 1
						}
						],
						"money": 0,
						"spirit": 0,
						"msrs": [],
						"items": []
					},
					"isKilled": 0,
					"pspts": [
					{
						"eptid": "ecb6d246-bf69-4a2d-92df-89ce2070721a",
						"gettime": 0,
						"ptid": "PT_JAC_BTM_003",
						"rest": 0,
						"spare": 0,
						"grade": 0,
						"dur": 96,
						"lvl": 1
					}
					],
					"eqpts": [
					{
						"eptid": "ecb6d246-bf69-4a2d-92df-89ce2070721a",
						"site": "EQSITE_LEGS"
					}
					]
				},
				{
					"type": "JACKAL_ZZ",
					"rwd": {
						"pts": [],
						"money": 0,
						"spirit": 0,
						"msrs": [],
						"items": [
						{
							"eitemid": "32072c45-13c5-4c8a-b9d7-d7fa01ffc659",
							"itemId": "ITMT_STONE_JAC_1",
							"gettime": 0
						}
						]
					},
					"isKilled": 0,
					"pspts": [],
					"eqpts": []
				},
				{
					"type": "JACKAL_ZZZ",
					"rwd": {
						"pts": [],
						"money": 0,
						"spirit": 0,
						"msrs": [],
						"items": [
						{
							"eitemid": "5167a0ba-3961-40fe-9bc4-be8c82108837",
							"itemId": "ITMT_STONE_JAC_4",
							"gettime": 0
						}
						]
					},
					"isKilled": 0,
					"pspts": [],
					"eqpts": []
				},
				{
					"type": "JACKAL_ZZZZ",
					"rwd": {
						"pts": [],
						"money": 0,
						"spirit": 0,
						"msrs": [],
						"items": [
						{
							"eitemid": "4e084903-702f-408b-80ab-0aa8c04bd659",
							"itemId": "ITMT_STONE_JAC_5",
							"gettime": 0
						}
						]
					},
					"isKilled": 0,
					"pspts": [],
					"eqpts": []
				}
				],
				"bos": [],
				"vms": [],
				"is_closed_area": -1
			},
			"user": save.getUser(),
			"msgs": [],
			"rescuelog": [],
			"deathbox": "COPPER",
			"playlog": save.getPlaylog(),
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
		});*/
	});
}