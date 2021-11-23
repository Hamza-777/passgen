# passgenerate

A password generator

### Install using:

```
npm i passgenerate
```

### or

```
npm install passgenerate
```

### How to import:

```
const functions = require("passgenerate");
functions.passgen();
functions.passgenSelected();
```

### or

```
const { passgen, passgenSelected } = require("passgenerate");
passgen();
passgenSelected();
```

### Example:

#### Default arguments for passgen() are in the respective order:

- length: 7
- wantCapitalLetters: true
- wantNumbers: true
- wantSymbols: true

#### Usage:

```
const functions = require("passgenerate");
console.log(functions.passgen());
// #axG70@
```

```
console.log(functions.passgen(10, false, false, false));
// dwgnhujcbi
```

```
console.log(functions.passgen(10, false, true, true));
// dwbfoa+b4w
```

#### Default argument for passgenSelected() is:

- options: {smallCount: 3, capsCount: 3, numsCount: 3, symbolsCount: 3}

#### Usage:

```
const functions = require("passgenerate");
console.log(functions.passgenSelected());
// 04V9nd%G*V$s
```

```
options: {smallCount: 4, capsCount: 1, numsCount: 8, symbolsCount: 2}
console.log(functions.passgenSelected(options));
// q-6ghm136753R9*
```

```
options: {smallCount: 0, capsCount: 3, numsCount: 6, symbolsCount: 1}
console.log(functions.passgenSelected(options));
// 1226U6BS3*
```
