# Mini Project: Pokemon Collector

In this assignment, you will create a Pokemon command-line game using OOP. It is up to you whether you decide to use ES6 class syntax or constructor functions. For the purposes of these instructions, we will use `class` syntax.


## Instructions

The completed game should meet the following criteria:

1. The completed game should be able to receive user input using the `inquirer` npm package.

2. Your solution should have, at minimum, three files:

* **Pokemon.js**: Contains a class, `Pokemon`. The `Pokemon` class should have the following properties:

  * `name`: A string value for the name of the pokemon

  * `hp`: number value for the pokemon's health. 

  * `atk`: number value for the pokemon's attack.

  * `level`: number value for the pokemon's level. Should always default to 1.

* **Trainer.js**: Contains a class, `Trainer`, that depends on the `Pokemon` class. The class should define:

  * `pokemon`: An array of `Pokemon` objects representing the Pokemon in their collection. Defaults to empty.

  * `name`: the name of the pokemon trainer.

  * `addPokemon`: a method that takes in a name, hp, and atk and creates a new `Pokemon` object within said trainers pokemon array.

  * `getRandomPokemon`: a method that returns a random pokemon from the trainer's collection.  

* **index.js**: The file containing the logic for the course of the game.
Should do the following:

  * On loading, prompt the user with choices of what to do next (add trainer, add pokemon, get random pokemon, etc)

  * Adding a trainer will create a new  `Trainer` instance with a name.

  * Adding a pokemon will prompt user to choose from created trainers and then add a pokemon to said  trainer's collection.

  * random pokemon will prompt user to choose from created trainers and return random info from one of that trainer's pokemon 

3. `Pokemon.js` *should not* `require` any other files.

4. `Trainer.js` *should only* require `Pokemon.js`

5. **HINT:** Write `Pokemon.js` first and test it on its own before moving on, then do the same thing with `Trainer.js`

### BONUS

 Have some fun with it.  Add some more functionality you think would be useful/fun. Sample ideas:

  * add a levelUp method.  When called on a pokemon, this method should increase the level by 1, the atk by a random number between 1 and 5, and the hp by a random number between 10 and 25.

  * Add in Pokemon types.  To do this, add a new class for each type you want to add ( `FirePokemon`,`WaterPokemon`,etc) that extends off of the `Pokemon` class.  You should add `type` and `weakness` properties to your `Pokemon` class with default values you can overwrite in your subclasses to maintain functionality thoroughout.

  * Add in the ability for pokemon to battle.  User would pick two trainers, select a pokemon from each, then have said pokemon attack each other (as in, subtract the attack value from pokemon 1 from the hp of pokemon 2) until one is defeated.  Perhaps use a `setInterval()` so the turns don't happen all at once.  

  * Utilize type advantages in your battle game.  A simple Rock Paper Scissors - style algorithim is a great place to start (grass beats water, water beats fire, fire beats grass, for example.)

  * Allow users to select a team of pokemon before the battle and switch between them on the fly.  This one will require a lot of work.  

