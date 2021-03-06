var save = require('../save.js');

module.exports = (req, resp) => {
	var reqData = "";
	req.on('data', function(chunk){ reqData += chunk})
	req.on('end', function(){
		save.setSoul(JSON.parse(reqData)['soul']);
		resp.send({
			"shop":[
			{
				"sklid":"SKL_ATKDEFUP_HPLOW_01",
				"lvl":1
			},
			{
				"sklid":"SKL_LESDMG_FALLING_01",
				"lvl":1
			},
			{
				"sklid":"SKL_DODGEUP_01",
				"lvl":1
			},
			{
				"sklid":"SKL_ATKUP_01",
				"lvl":1
			},
			{
				"sklid":"SKL_DRAIN_02",
				"lvl":1
			},
			{
				"sklid":"SKL_DECFIRE_01",
				"lvl":1
			},
			{
				"sklid":"SKL_DISCOUNT_STR",
				"lvl":1
			},
			{
				"sklid":"SKL_DISCOUNT_DEX",
				"lvl":1
			},
			{
				"sklid":"SKL_DISCOUNT_VIT",
				"lvl":1
			},
			{
				"sklid":"SKL_DISCOUNT_HP",
				"lvl":1
			},
			{
				"sklid":"SKL_DISCOUNT_STM",
				"lvl":1
			},
			{
				"sklid":"SKL_DISCOUNT_LUK",
				"lvl":1
			},
			{
				"sklid":"SKL_ARRNG_STATUP_DIY",
				"lvl":1
			}
			],
			"shop_exchange":[
			{
				"sklid":"SKL_DIY_UP_01",
				"lvl":1
			},
			{
				"sklid":"SKL_ATKDEFUP_SLASH_01",
				"lvl":1
			},
			{
				"sklid":"SKL_ATKDEFUP_STRK_01",
				"lvl":1
			},
			{
				"sklid":"SKL_ATKDEFUP_FIRE_01",
				"lvl":1
			},
			{
				"sklid":"SKL_ATKDEFUP_ELEC_01",
				"lvl":1
			}
			],
			"user":save.getUser(),
			"boxgachas":[
			],
			"gachas":[
			{
				"gacha_id":"SKLGACH_DEATHMETAL_200303",
				"contents":[
				{
					"skill_id":"SKL_ADVENTURE_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_ANTI_MSR_A_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_ANTI_MSR_B_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_ANTI_MSR_C_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_ARCHERY_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_ARCHERY_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_ARCWELD_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_ARCWELD_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_ARRNG_STATUP_ALL_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_ASLTRFL_BULLET_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_ATKDEFUP_HPMAX_02_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_ATKUP_02_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_ATKUP_03_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_ATKUP_ANTI_HIGHLV_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_ATKUP_FORTGUARD_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_ATKUP_NODMG_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_ATK_CHARGED_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_BATTLEAXE_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_BAT_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_BAT_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_BIKE_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_BIKE_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_BOWLING_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_BOWLING_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_BOXGLOVE_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_BOXING_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_BTLAXE_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_CHAINSAW_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_CHNSAW_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_CIRCLESAW_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_CIRCLE_SAW_DISMANT_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_CLAW_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_CLAW_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_CLEAVER_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_CLEAVER_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_CRIUP_02_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_CRIUP_03_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_CRI_ATKUP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_CROSSBOW_ATK_UP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_CRSBOW_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_DEATH_PROOF_03_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_DEFUP_02_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_DEFUP_03_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_DEFUP_NODMG_RND_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_DODGEUP_03_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_DRAIN_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_DRILL_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_DRILL_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_EMPHAND_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_EV_DISCOUNT_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_EXPLODE_ENEMYKILL_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_FASTEAT_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_FAST_RELOAD_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_FBATON_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_FINAL_BLOW_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_FIREBATON_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_FIREROD_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_FIREROD_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_FIREWKS_ATK_UP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_FIREWRK_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_FIRE_DISCOVERY_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_FLAMERAD_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_FLAMERD_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_HAMMER_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_HAMMER_ATK_UP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_HARD_STAN_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_HEADSHOTUP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_HPUP_02_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_HPUP_03_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_ICEHOCKEY_ATK_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_IHOCKEY_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_IRON_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_IRON_ATK_UP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_JUST_GUARD_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_KATANA_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_KATANA_ATK_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_KNIFE_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_KNIFE_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_LESDMG_FALLING_02_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_LESDMG_STEALTH_02_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_MACHETE_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_MACHETE_ATK_UP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_MORNSTAR_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_MSTAR_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_NAILGUN_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_NAILGUN_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_PECKER_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_PECKER_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_PITCHING_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_PITCH_M_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_POISONMASTER_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_RAGE_GAUGE_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_RESISTUP_SHOOT_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_RESISTUP_SLASH_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_RESISTUP_STRIKE_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_REVOLVER_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_REVOLVR_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_RGSPDUP_02_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_RGSPUP_RDURDOWN_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_RIFLE_ATK_UP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_ROCKET_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_ROCKET_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_R_GAUGE_FORT_UP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_SABER_ATK_UP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_SABRE_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_SANDBAG_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_SEARCHUP_ITEM_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_SHISHIMAI_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_SHORT_DROPKICK_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_SHOTGUN_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_SHOTGUN_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_SHOVEL_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_SHOVEL_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_SISIMAI_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_SNPRRFL_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_SNPRRFL_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_SPDUP_02_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_SPDUP_03_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_SPEAR_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_SPEAR_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_SQRTIMBER_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_STEALTHUP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_STIMBER_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_STMNUP_02_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_STRENGTHEN_BODY_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_STUNROD_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_STUNROD_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_ST_AILMENT_DIS_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_SWORD_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_SWORD_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_TASERGUN_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_THDRROD_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_THRWKNIFE_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_THUNDERRD_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_TSRGUN_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_TWKNIFE_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_WARRIORS_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_WDMG_DOWN_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_WEP_SPDUP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_WWEP_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_WWEP_ATKUP_EX_01_P",
					"display_priority":0
				}
				]
			},
			{
				"gacha_id":"SKLGACH_NORMAL_200228",
				"contents":[
				{
					"skill_id":"SKL_ADVENTURE_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_ANTI_MSR_A_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_ANTI_MSR_B_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_ANTI_MSR_C_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_ARCHERY_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_ARCHERY_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_ARCWELD_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_ARCWELD_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_ARRNG_STATUP_ALL_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_ARRNG_STATUP_DIY_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_ARRNG_STATUP_FAN_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_ARRNG_STATUP_MIL_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_ARRNG_STATUP_SPO_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_ASLTRFL_BULLET_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_ATKDEFUP_ELEC_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_ATKDEFUP_FIRE_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_ATKDEFUP_HPLOW_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_ATKDEFUP_HPLOW_02_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_ATKDEFUP_HPMAX_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_ATKDEFUP_HPMAX_02_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_ATKDEFUP_POISN_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_ATKDEFUP_SLASH_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_ATKDEFUP_STRK_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_ATKUP_02_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_ATKUP_03_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_ATKUP_ANTI_HIGHLV_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_ATKUP_FORTGUARD_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_ATKUP_NODMG_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_ATK_CHARGED_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_BATTLEAXE_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_BAT_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_BAT_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_BIKE_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_BIKE_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_BOWLING_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_BOWLING_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_BOXGLOVE_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_BOXING_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_BTLAXE_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_CHAINSAW_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_CHNSAW_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_CIRCLESAW_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_CIRCLE_SAW_DISMANT_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_CLAW_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_CLAW_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_CLEAVER_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_CLEAVER_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_CRIUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_CRIUP_02_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_CRIUP_03_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_CRI_ATKUP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_CROSSBOW_ATK_UP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_CRSBOW_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_DEATH_PROOF_03_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_DEATH_PROOF_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_DECELEC_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_DECFIRE_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_DEFUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_DEFUP_02_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_DEFUP_03_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_DEFUP_NODMG_RND_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_DISCOUNT_DEX_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_DISCOUNT_HP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_DISCOUNT_LUK_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_DISCOUNT_STM_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_DISCOUNT_STR_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_DISCOUNT_VIT_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_DIY_UP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_DODGEUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_DODGEUP_02_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_DODGEUP_03_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_DRAIN_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_DRAIN_02_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_DRILL_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_DRILL_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_EMPHAND_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_EV_DISCOUNT_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_EXPLODE_ENEMYKILL_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_FAN_UP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_FASTEAT_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_FAST_RELOAD_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_FBATON_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_FINAL_BLOW_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_FIREBATON_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_FIREROD_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_FIREROD_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_FIREWKS_ATK_UP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_FIREWRK_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_FIRE_DISCOVERY_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_FLAMERAD_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_FLAMERD_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_HAMMER_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_HAMMER_ATK_UP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_HARD_STAN_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_HEADSHOTUP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_HPUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_HPUP_02_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_HPUP_03_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_ICEHOCKEY_ATK_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_IHOCKEY_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_IRON_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_IRON_ATK_UP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_JUST_GUARD_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_KATANA_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_KATANA_ATK_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_KNIFE_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_KNIFE_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_LESDMG_FALLING_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_LESDMG_FALLING_02_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_LESDMG_STEALTH_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_LESDMG_STEALTH_02_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_MACHETE_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_MACHETE_ATK_UP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_MIL_UP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_MORNSTAR_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_MSTAR_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_NAILGUN_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_NAILGUN_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_PECKER_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_PECKER_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_PITCHING_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_PITCH_M_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_POISONMASTER_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_RAGE_GAUGE_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_RESISTUP_SHOOT_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_RESISTUP_SLASH_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_RESISTUP_STRIKE_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_REVOLVER_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_REVOLVR_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_RGSPDUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_RGSPDUP_02_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_RGSPUP_RDURDOWN_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_RIFLE_ATK_UP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_ROCKET_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_ROCKET_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_R_GAUGE_FORT_UP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_SABER_ATK_UP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_SABRE_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_SANDBAG_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_SEARCHUP_ITEM_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_SHISHIMAI_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_SHORT_DROPKICK_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_SHOTGUN_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_SHOTGUN_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_SHOVEL_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_SHOVEL_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_SISIMAI_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_SNOWWHITE_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_SNPRRFL_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_SNPRRFL_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_SPDUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_SPDUP_02_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_SPDUP_03_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_SPEAR_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_SPEAR_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_SPO_UP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_SQRTIMBER_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_STEALTHUP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_STIMBER_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_STMNUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_STMNUP_02_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_STRENGTHEN_BODY_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_STUNROD_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_STUNROD_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_ST_AILMENT_DIS_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_SUPER_ALLOY_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_SWORD_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_SWORD_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_TASERGUN_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_THDRROD_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_THRWKNIFE_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_THUNDERRD_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_TSRGUN_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_TWKNIFE_ABILITY_UP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_WARRIORS_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_WDMG_DOWN_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_WEP_SPDUP_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_WWEP_ATKUP_01_P",
					"display_priority":0
				},
				{
					"skill_id":"SKL_WWEP_ATKUP_EX_01_P",
					"display_priority":0
				}
				]
			}
			],
			"cautions":[
			],
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