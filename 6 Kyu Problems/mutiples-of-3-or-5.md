# [Multiples of 3 or 5](https://www.codewars.com/kata/514b92a657cdc65150000006)

# Problem

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

```
10 -> 3, 5, 6, 8, 9

3 + 5 + 6 + 8 + 9 = 23
```

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a number is negative, return 0 (for languages that do have them)

# Solution

JavaScript

Note: Overcomplicated this problem, the 2 arrays that were created were definitely not needed to solve this problem. Will reattempt at a later date.

```JS
function solution(number) {
  let initArr = [];
  let sortedArr = [];
  let sum = 0;

  for (let i = 0; i < number; i++) {
    initArr.push(i);
  }

  for (let i of initArr) {
    if (i % 3 == 0 || i % 5 == 0) {
      sortedArr.push(i);
    }
  }

  for (let i = 0; i < sortedArr.length; i++) {
    sum += sortedArr[i];
  }

  return sum;
}
```

# Sample Test

JavaScript

```JS
function test(n, expected) {
  let actual = solution(n)
  Test.assertEquals(actual, expected, `Expected ${expected}, got ${actual}`)
}

Test.describe("basic tests", function(){
  test(10,23)
})
```
