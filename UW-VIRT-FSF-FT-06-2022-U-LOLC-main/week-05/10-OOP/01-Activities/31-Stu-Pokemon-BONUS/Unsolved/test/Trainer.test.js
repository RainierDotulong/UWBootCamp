const Trainer = require("../lib/Trainer");

describe("Trainer class", () => {
  it("should create a new trainer with a name property",()=>{
    expect(new Trainer("Joe").name).toBe("Joe")
  });
  it("should default to an empty pokemon array",()=>{
    expect(new Trainer("Joe").pokemon.length).toBe(0)
  })
  describe("addPokemon", () => {
    it("should add pokemon to the array", () => {
      const me = new Trainer("fish")
      me.addPokemon("pika",100,12)
      expect(me.pokemon.length).toBe(1);
    });
  });

  describe("getRandomPokemon ", () => {
    it("should return random pokemon from array", () => {
      const me = new Trainer("fish")
      me.addPokemon("pika",100,12)
      me.addPokemon("chu",120,1)
      expect(typeof me.getRandomPokemon()).toBe('object');
    });
  });
});
