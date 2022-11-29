const Pokemon = require("../lib/Pokemon");

describe("Pokemon class", () => {
  it("sets first agrument as name property", () => {
    expect(new Pokemon("Charmander",120,10).name).toBe("Charmander");
  });

  it("sets second argument as hp property", () => {
    expect(new Pokemon("Charmander",120,10).hp).toBe(120);
  });

  it("sets third argument as atk property", () => {
    expect(new Pokemon("Charmander",120,10).atk).toBe(10);
  });
  it("sets level to 1", () => {
    expect(new Pokemon("Charmander",120,10).level).toBe(1);
  });

});
