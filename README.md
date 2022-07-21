# cross-dirname

Node.js / Gjs / Deno module that returns the current script dirname. Similar to `__dirname` but also works in CommonJs and ES modules.  

## Installation

On Node.js you can install the package as usual with NPM:

```
npm install cross-dirname --save
```

On Deno you just need to import this package:

```ts
import dirname from "https://deno.land/x/cross_dirname/mod.ts";
```

## Usage

### /path/to/the/script.mjs

```javascript
import dirname from 'cross-dirname'

console.log(dirname()) // outputs "/path/to/the"
```

### CommonJs

```javascript
console.log(require('cross-dirname')() === __dirname) // true
```

### Contributions

Contributions for more platforms are welcome :)

### Tests

This module has been tested on the following platforms:

| Runtime | Type   | Platform | State    |
|---------|--------|----------|----------|
| Node.js | CJS    | Linux    | ✔        |
| Node.js | CJS    | MacOS    | ✔        |
| Node.js | CJS    | Windows  | ✔        |
| Node.js | ESM    | Linux    | ✔        |
| Node.js | ESM    | MacOS    | ✔        |
| Node.js | ESM    | Windows  | ✔        |
| Deno    | ESM    | Linux    | ✔        |
| Deno    | ESM    | MacOS    | ✔        |
| Deno    | ESM    | Windows  | ✔        |
| Gjs     | ESM    | Linux    | ✔        |
| Gjs     | ESM    | MacOS    | UNTESTED |
| Gjs     | ESM    | Windows  | UNTESTED |
| Gjs     | NO-ESM | Linux    | TODO     |
| Gjs     | NO-ESM | MacOS    | TODO     |
| Gjs     | NO-ESM | Windows  | TODO     |

You can run all tests with:

```
npm run test
```

Or the tests for a special runtime:

```
npm run test:node
npm run test:deno
npm run test:gjs
```