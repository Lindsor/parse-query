# ln-parse-query #

Parse a given query strning into its equivalent object.

## Installing ##
```bash
npm install --save ln-parse-query
```

## Using ##
Just load the module and call the parser.
```javascript
const parser = require("ln-parse-query");

parser("hello=goodbye&foo=bar%20all%20day&novalue");
/*
* {
*   hello: "goodbye",
*   foo: "bar all day",
*   novalue: ""
* }
*/
```

The module removes trailing '?' or '#' so that it can be used in the browser with `window.location.hash` or `window.location.search`