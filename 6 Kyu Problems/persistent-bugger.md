# [Persistent Bugger.](https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec)

# Problem

Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example:

```JS
 persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit

 persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2

 persistence(4) === 0 // because 4 is already a one-digit number
```

# Solution

JavaScript

Note: Was challenging to figure out how this logically worked, to re-split and multiply the initial number.

```JS
function persistence(num) {
  let number = num.toString().split('');
  let count = 0;

  while (number.length > 1) {
    let tempNum = 1;

    for (let digit of number) {
      tempNum = tempNum * digit;
      number = tempNum.toString().split('');
    }
    count++;
  }

  return count;
}
```

# Sample Test

JavaScript

```JS
describe('Initial Tests', function () {
  Test.assertEquals(persistence(39),3);
  Test.assertEquals(persistence(4),0);
  Test.assertEquals(persistence(25),2);
  Test.assertEquals(persistence(999),4);
});
```
