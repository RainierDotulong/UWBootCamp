const axios = require("axios");
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writePromise = util.promisify(fs.writeFile);
const readPromise = util.promisify(fs.readFile);

const init = async () => {
    try {
        const ans = await inquirer.prompt([
            {
                type: "input",
                name: "user",
                message: "who is this?"
            }
        ])
        const res = await axios.get(`https://manateejokesapi.herokuapp.com/manatees/random`)
        const data = await readPromise("log.json", "utf-8");
        const jokeArr = JSON.parse(data);
        const newItem = {
            user: ans.user,
            setup: res.data.setup,
            punchline: res.data.punchline
        }
        jokeArr.push(newItem);
        console.log(jokeArr);
        await writePromise("log.json", JSON.stringify(jokeArr, null, 4))
        console.log("complete!")
    } catch (err) {
        console.log(err)
    }
}

init()