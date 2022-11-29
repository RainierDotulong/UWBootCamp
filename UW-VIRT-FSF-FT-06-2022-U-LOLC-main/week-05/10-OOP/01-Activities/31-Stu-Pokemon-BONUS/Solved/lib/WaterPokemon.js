const Pokemon = require("./Pokemon");

class WaterPokemon extends Pokemon {
    constructor(name,hp,atk){
        super(name,hp,atk);
        this.type="water";
        this.strength="fire";
        this.weakness="grass";
        this.attackName="Water Gun"
    }

}

module.exports = WaterPokemon