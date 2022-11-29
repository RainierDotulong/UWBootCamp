const Pokemon = require("./Pokemon");

class GrassPokemon extends Pokemon {
    constructor(name,hp,atk){
        super(name,hp,atk);
        this.type="grass";
        this.strength="water";
        this.weakness="fire";
        this.attackName="Razor Leaf"
    }
}

module.exports = GrassPokemon