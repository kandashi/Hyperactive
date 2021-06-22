class HyperactiveConfig {
    constructor() {
        this.dnd5e = {
            "@str": "data.abilities.str.value",
            "@con": "data.abilities.con.value",
            "@dex": "data.abilities.dex.value",
            "@int": "data.abilities.int.value",
            "@wis": "data.abilities.wis.value",
            "@cha": "data.abilities.cha.value",
            "@ac": "data.attributes.ac.value",
            "@walk" :"data.attributes.movement.walk",
            "@fly" :"data.attributes.movement.fly",
            "@climb" :"data.attributes.movement.climb",
            "@burrow" :"data.attributes.movement.burrow",
            "@swim" :"data.attributes.movement.swim",
            "@msak" : "data.bonuses.msak.attack",
            "@msdmg" : "data.bonuses.msak.damage",
            "@mwak" : "data.bonuses.mwak.attack",
            "@mwdmg" : "data.bonuses.mwak.damage",
            "@rsak" : "data.bonuses.rsak.attack",
            "@rsdmg" : "data.bonuses.rsak.damage",
            "@rwak" : "data.bonuses.rwak.attack",
            "@rwdmg" : "data.bonuses.rwak.damage",
            "@spelldc" : "data.bonuses.spell.dc",
            "@primaryValue" : "data.resources.primary.value",
            "@primaryMax" : "data.resources.primary.max",
            "@secondaryValue" : "data.resources.secondary.value",
            "@secondaryMax" : "data.resources.secondary.max",
            "@tertiaryValue" : "data.resources.tertiary.value",
            "@tertiaryMax" : "data.resources.tertiary.max",
            "@dmgImm" : "data.traits.di.value",
            "@damRes" : "data.traits.dr.value",
            "@damVul" : "data.tratis.dv.value",
            "@languages" : "data.traits.languages.value"
        }
        this.currentSystem = this[game.system.id]

    }

    backTrack(input) {
        return Object.keys(this.currentSystem).find(key => this.currentSystem[key] === input);
    }

}