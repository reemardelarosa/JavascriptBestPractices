# Javascript**Best***Practices*

- [Why Best Practices](#why-best-practices)
- [Syntax](#syntax)
- [Behaviors](#behaviors)
- [Async Patterns](#async-patterns)
- [Production Code](#production-code)

## Why Best Practices
    *Javascript is taking over the web, mobile, server, desktop, cryptocurrency, etc.*

    Take you Javascript Knowledge to the next level.

    Understand syntax to write a maintainable codes.

    What is "this", strict mode and closure?

    How to write code in easier way?

    You are always working with other developers.

    Abide in standard practices so that all developers can talk the same language.

    You don't need to reinvent the wheel, packages are available in githubs.

    Familiarize yourself with best practices to become an effective developer.

# Syntax
    Javascript is different compare to most of the mainstream languages.

    Understand syntax how and why it is working.

### Semicolons `;`

> *Semicolons are optional in JS* - Lot of people.

> *Certain ECMAScript statements (...) must be terminated with semicolons.* - EcmaScript Standards

> *For convenience, however, suc semicolons may be omitted from the source text in cetain situations.* - EcmaScript Standards

> *These situations are decribed by saying that semicolons are automatically inserted...* - EcmaScript Standards

> **Rule 1a** *When, as a Script or Module is parsed from left to right, a token (called the `offending token`) is encountered that is `not allowed` by any production of the grammar.* - EcmaScript Standards

> **Rule 1b** *The `offending token is separated from the previous token` by at least one LineTerminator* - EcmaScript Standards

> **Rule 2** *When, as the Script or Module is parsed from the left to right, the `end of the input stream` of token is encountered, then a semicolon is automatically inserted at the end of the input stream.* - EcmaScript Standards

> **Rule 3** *When, a token is encoutnered that is allowede by some production of the grammar, `but the production is a restricted production` and the token would be the first token of is separated from the previous token by `at least one LineTerminator`, then a s`emicolon is automatically inserted before the restricted token`.* - EcmaScript Standard

#### Restricted Production
> *continue, break, return, or throw*

    Be consistent with other languages.

### Linting
> A linter scans your code to detect `potential problems` and  `errors`.

    [JS Lint](http://www.jslint.com/) - created by Douglas Crockford

    [JS Hint](http://jshint.com/) - fork of `JS Lint`

    [ES Lint](https://eslint.org/) - ES Compatible

#### JS Hint
    1. In the Browser - [jshint.com](http://jshint.com/)
    2. Brackets - [Brackets JS Hint](https://github.com/cfjedimaster/brackets-jshint)
        - run `npm install -g jshint` in command prompt
    3. Visual Studio Code - [VS Code JSHint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.jshint)
        - run `npm install -g jshint` in VS Code Terminal
    4. Atom - [Atom JS Hint](https://atom.io/packages/atom-jshint)
        - run `npm install -g jshint` in command prompt

### Curly Braces
    Be consistent with `curly braces`
```
function service() {
    var get = function() {
        console.log('get');
    };
    var set = function() {
        console.log('set');
    };
    return {
        get: get,
        set: set
    }
}
```

### Equality
> `==` || `===`

    `==` *If variables are two different types, it will convert to the same type.*

    `===` *There will be no type conversion.* **Use as default**

> Create a new file `.jshintrc', and add json object for js rules. [Documentation here!](https://gist.github.com/danbruegge/3424112)

*.jshintrc*
```
{
    "eqeqeq": true, // Require triple equals i.e. `===`
    "strict": true // Require `use strict` pragma in every file.
}
```
    

### Variables
> *Don't neglect variables.*

> **Hoisting** is Javascript's default behavior of moving all declarations to the top of the current scope.

> *A var statement declares variables that are scoped to the running execution context's VariableEnvironment. Var `variables are created when their containing Lexical Environement is instantiated` and are `initialized to undefined when created`.* - EcmaScript Standards


### Functions
> Function in Javascript is a first class objects.

> Function is a type.

*Two Ways of Function Creation*
- Declarations
- Expressions



## Behaviors
## Async Patterns
## Production Code