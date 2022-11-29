const Pokemon = require("./Pokemon");
const FirePokemon = require("./FirePokemon")
const WaterPokemon = require("./WaterPokemon")
const GrassPokemon = require("./GrassPokemon")
class Trainer {
    constructor(name) {
        this.name = name;
        this.pokemon = [];
    }
    addPokemon(name, hp, atk, type = "normal") {
        let myPoke
        switch (type) {
            case "normal":
                myPoke = new Pokemon(name, hp, atk)
                break;

            case "fire":
                myPoke = new FirePokemon(name, hp, atk)
                break;
            case "water":
                myPoke = new WaterPokemon(name, hp, atk)
                break;
            case "grass":
                myPoke = new GrassPokemon(name, hp, atk)
                break;

            default:
                break;
        }
        this.pokemon.push(myPoke)

    }
    getRandomPokemon() {
        const randomPoke = this.pokemon[Math.floor(Math.random() * this.pokemon.length)]
        return randomPoke;
    }
    visitPokeCenter(){
        this.pokemon.forEach((pokemon)=>{
            pokemon.hp=pokemon.maxHp
        })
        console.log("your pokemon are fully healed")
    }
}

module.exports = Trainer;

