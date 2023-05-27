// This test checks to see if the developer has written
// `console.log('Hellow, World!');` correctly.


// @ts-check
/* eslint-disable no-console */

import { execSync } from 'child_process';

test('result', () => {
  const actual = execSync('node solution.js').toString().trim();
  const expected = 'Hello, World!';
  expect(actual).toBe(expected);
});

