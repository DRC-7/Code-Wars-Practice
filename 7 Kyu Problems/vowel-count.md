# [Vowel Count](https://www.codewars.com/kata/54ff3102c1bad923760001f3)

# Problem

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

# Solution

JavaScript

```JS
function getCount(str) {

  var vowelsCount = 0;

  const vowels = /[a|e|i|o|u]/i;

  for (const letters of str) {
    let search = letters.search(vowels);
    if (search == false) {
      vowelsCount++;
    }
  }

  console.log(vowelsCount);


  return vowelsCount;
}
```

# Sample Test

JavaScript

```JS
const chai = require("chai");
const assert = chai.assert;

describe("Case 1", function(){
    it ("should be defined", function(){
        assert.strictEqual(getCount("abracadabra"), 5)
    });
});
```
