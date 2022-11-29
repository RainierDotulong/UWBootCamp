# Convert to async await

in the `index.js` file, you have a function that performs 4 asynchronous actions:

1. use the `inquirer` package to ask user for their name
2. use the `axios` package to then get a random manatee joke
3. use `fs.readFile` to read data saved to the `log.json` file
4. use `fs.writeFile` to save data to the `log.json` file with the new joke and user added.

These methods use a combination of callbacks and promises to handle their asynchronicity.  Refactor to code to use the modern `async/await` and `try/catch` syntax instead.

HINT: `async/await` can be used on any method that returns a promise: [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)