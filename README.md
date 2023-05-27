# Jest-testing

Test snippets written with Jest, the best testing framework ever. Stored for 
easy access when one is conducting unit testing, so one can copy and paste into
their IDE and ship more frequently. 

## Getting Started

Let's say we want to write a test for the traditional way we like to fire up our
terminal for the first time - we're going to write a test for `console.log('Hello, World!');` 

We'll store our function into a file called `solution.js`

```solution.js
// @ts-check
/* eslint-disable no-console */

console.log("Hello, World!");
```

Simple enough. Now let's take a look at what that unit test function will look like in 
the `test.js` file:

```test.js
// @ts-check
/* eslint-disable no-console */

import { execSync } from 'child_process';

test('result', () => {
  const actual = execSync('node solution.js').toString().trim();
  const expected = 'Hello, World!';
  expect(actual).toBe(expected);
});
```

Well done! Let's see what the output is when we run that test:

```
make: Entering directory '/usr/src/app'
npm test -s
 PASS  ./test.js
  ✓ result (104 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.583 s
Ran all test suites.
make: Leaving directory '/usr/src/app'
```

There you have it! That is unit testing with Jest, the best JavaScript Unit Testing framework out there!

## Contribute

Feel free to fork this and contribute or just let me know what you think!
