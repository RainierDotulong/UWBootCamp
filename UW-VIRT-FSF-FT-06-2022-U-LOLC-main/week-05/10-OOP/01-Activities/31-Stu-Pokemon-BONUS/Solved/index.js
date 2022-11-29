const inquirer = require("inquirer");
const Trainer = require("./lib/Trainer");
const trainers = [new Trainer("Joe")];

trainers.forEach(trainer => {
    trainer.addPokemon("charmnader", 100, 10, "fire");
    trainer.addPokemon("squirlte", 100, 10, "water")
    trainer.addPokemon("bulbasaur", 100, 10, "grass")
    trainer.addPokemon("snorlax", 100, 10, "normal")
})

function askQuestion() {
    inquirer.prompt([
        {
            name: "question",
            type: "list",
            choices: ["Add a Trainer", "Add a Pokemon", "See all Pokemon", "Get Random Pokemon", "Battle", "Heal", "quit"]
        }
    ]).then(answers => {
        switch (answers.question) {
            case "Add a Trainer":
                console.log("add trainer!")
                addTrainer();
                break;

            case "Add a Pokemon":
                console.log("add pokemon selected!")
                addPokemon();
                break;

            case "See all Pokemon":
                console.log("add pokemon selected!")
                showPokemon();
                break;

            case "Get Random Pokemon":
                console.log("random!")
                getRandomPokemon()
                break;

            case "Battle":
                console.log("battle!")
                battle()
                break;

            case "Heal":
                console.log("battle!")
                heal()
                break;

            default:
                console.log("thanks for playing!")
                break;
        }
    })
}

function addTrainer() {
    inquirer.prompt({
        name: "name",
        message: "What is your name?",
        type: "input"
    }).then(({ name }) => {
        console.log(name);
        const me = new Trainer(name);
        trainers.push(me)
        console.log(trainers);
        askQuestion();
    })
}

function addPokemon() {
    if (trainers.length < 1) {
        console.log("make a trainer first knucklehead")
        return askQuestion()
    }
    const inquirerTrainers = trainers.map(trainer => {
        return {
            name: trainer.name,
            value: trainer
        }
    })
    console.log(inquirerTrainers)
    inquirer.prompt([
        {
            type: "list",
            choices: inquirerTrainers,
            message: "which trainer?",
            name: "trainerChoice"
        },
        {
            type: "input",
            message: "pokemon name?",
            name: "pokemonName"
        },
        {
            type: "number",
            message: "how much hp?",
            name: "hp"
        },
        {
            type: "number",
            message: "how much atk?",
            name: "atk"
        },
        {
            type: "list",
            name: "type",
            message: "what type is this pokemon?",
            choices: ["normal", "fire", "water", "grass"]
        }
    ]).then(addPokemonAnswers => {
        addPokemonAnswers.trainerChoice.addPokemon(addPokemonAnswers.pokemonName, addPokemonAnswers.hp, addPokemonAnswers.atk, addPokemonAnswers.type)
        console.log(JSON.stringify(trainers, null, 2))
        askQuestion();
    })
}

function getRandomPokemon() {
    if (trainers.length < 1) {
        console.log("make a trainer first knucklehead")
        return askQuestion()
    }
    const inquirerTrainers = trainers.filter(trainer => {
        if (trainer.pokemon.length > 0) {
            return true
        } else {
            return false
        }
    }).map(trainer => {
        return {
            name: trainer.name,
            value: trainer
        }
    })
    if (inquirerTrainers.length < 1) {
        console.log("no trainers with pokemon")
        return askQuestion()
    }
    inquirer.prompt([
        {
            type: "list",
            choices: inquirerTrainers,
            message: "which trainer?",
            name: "trainerChoice"
        },
    ]).then(randomChoices => {
        const randomPoke = randomChoices.trainerChoice.getRandomPokemon()
        console.log(randomPoke)
        askQuestion();
    })
}

function battle() {
    if (trainers.length < 1) {
        console.log("make a trainer first knucklehead")
        return askQuestion()
    }
    const inquirerTrainers = trainers.filter(trainer => {
        if (trainer.pokemon.length > 0) {
            return true
        } else {
            return false
        }
    }).map(trainer => {
        return {
            name: trainer.name,
            value: trainer
        }
    })
    if (inquirerTrainers.length < 2) {
        console.log("no trainers with pokemon")
        return askQuestion()
    }
    inquirer.prompt([
        {
            name: "player1",
            message: "who are you?",
            type: "list",
            choices: inquirerTrainers,
        }, {
            name: "player2",
            message: "who are you battling?",
            type: "list",
            choices: inquirerTrainers,
        }
    ]).then(({ player1, player2 }) => {
        const p1Pokemon = player1.pokemon.map(poke => {
            return {
                name: poke.name,
                value: poke
            }
        })
        const p2Pokemon = player2.pokemon.map(poke => {
            return {
                name: poke.name,
                value: poke
            }
        })

        inquirer.prompt([
            {
                name: "firstMon",
                message: `which pokemon will ${player1.name} use?`,
                choices: p1Pokemon,
                type: "list"
            },
            {
                name: "secondPokemon",
                message: `which pokemon will ${player2.name} use?`,
                choices: p2Pokemon,
                type: "list"
            }
        ]).then(({ firstMon, secondPokemon }) => {
            console.log(`I, ${player1.name}, choose you, ${firstMon.name}!`)
            console.log(`I, ${player2.name}, choose you, ${secondPokemon.name}!`)
            let counter = 0;
            const battleInterval = setInterval(() => {
                if (firstMon.hp <= 0) {
                    console.log(`${firstMon.name} has fainted!`)
                    console.log(`${player2.name} is the winner!`)
                    clearInterval(battleInterval)
                    askQuestion()
                }
                else if (secondPokemon.hp <= 0) {
                    console.log(`${secondPokemon.name} has fainted!`)
                    console.log(`${player1.name} is the winner!`)
                    clearInterval(battleInterval)
                    askQuestion()
                }
                else if (counter % 2 === 0) {
                    console.log(`${firstMon.name} used ${firstMon.attackName}!`)
                    if (firstMon.strength === secondPokemon.type) {
                        console.log(`${firstMon.name} attacks for ${2 * firstMon.atk}!`)
                        console.log("its super effective!")
                        secondPokemon.hp -= (2 * firstMon.atk)
                        console.log(`${secondPokemon.name} has  ${secondPokemon.hp} left!`)
                    } else if (firstMon.weakness === secondPokemon.type) {
                        console.log(`${firstMon.name} attacks for ${firstMon.atk / 2}!`)
                        console.log("its not very effective......")
                        secondPokemon.hp -= (firstMon.atk / 2)
                        console.log(`${secondPokemon.name} has  ${secondPokemon.hp} left!`)
                    } else {
                        console.log(`${firstMon.name} attacks for ${firstMon.atk}!`)
                        secondPokemon.hp -= (firstMon.atk)
                        console.log(`${secondPokemon.name} has  ${secondPokemon.hp} left!`)
                    }
                } else {
                    console.log(`${secondPokemon.name} used ${secondPokemon.attackName}!`)
                    if (secondPokemon.strength === firstMon.type) {
                        console.log(`${secondPokemon.name} attacks for ${2 * secondPokemon.atk}!`)
                        console.log("its super effective!")
                        firstMon.hp -= (2 * secondPokemon.atk)
                        console.log(`${firstMon.name} has  ${firstMon.hp} left!`)
                    } else if (secondPokemon.weakness === firstMon.type) {
                        console.log(`${secondPokemon.name} attacks for ${secondPokemon.atk / 2}!`)
                        console.log("its not very effective......")
                        firstMon.hp -= (secondPokemon.atk / 2)
                        console.log(`${firstMon.name} has  ${firstMon.hp} left!`)
                    } else {
                        console.log(`${secondPokemon.name} attacks for ${secondPokemon.atk}!`)
                        firstMon.hp -= secondPokemon.atk
                        console.log(`${firstMon.name} has  ${firstMon.hp} left!`)
                    }
                }
                counter++
            }, 1000)
        })
    })
}

function showPokemon() {
    if (trainers.length < 1) {
        console.log("make a trainer first knucklehead")
        return askQuestion()
    }
    const inquirerTrainers = trainers.filter(trainer => {
        if (trainer.pokemon.length > 0) {
            return true
        } else {
            return false
        }
    }).map(trainer => {
        return {
            name: trainer.name,
            value: trainer
        }
    })
    if (inquirerTrainers.length < 1) {
        console.log("no trainers with pokemon")
        return askQuestion()
    }
    inquirer.prompt([{
        type: "list",
        choices: inquirerTrainers,
        message: "whose pokemon",
        name: "trainer"
    }]).then(({ trainer }) => {
        trainer.pokemon.forEach(mon => {
            console.log(mon)
        })
        askQuestion()
    })
}

function heal() {
    if (trainers.length < 1) {
        console.log("make a trainer first knucklehead")
        return askQuestion()
    }
    const inquirerTrainers = trainers.filter(trainer => {
        if (trainer.pokemon.length > 0) {
            return true
        } else {
            return false
        }
    }).map(trainer => {
        return {
            name: trainer.name,
            value: trainer
        }
    })
    if (inquirerTrainers.length < 1) {
        console.log("no trainers with pokemon")
        return askQuestion()
    }
    inquirer.prompt([
        {
            name: "trainer",
            type: "list",
            choices: inquirerTrainers,
            message: "whos pokemon need healing?"
        }
    ]).then(({ trainer }) => {
        console.log("one moment while we take care of your pokemon.....")
        setTimeout(() => {
            trainer.visitPokeCenter();
            askQuestion()
        }, 3000)
    })
}

askQuestion()