const Pokemon = require("./Pokemon");

class FirePokemon extends Pokemon {
    constructor(name,hp,atk){
        super(name,hp,atk);
        this.type="fire";
        this.strength="grass";
        this.weakness="water";
        this.attackName="Ember";

    }
}

module.exports = FirePokemon