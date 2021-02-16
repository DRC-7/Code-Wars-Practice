# [Get the Middle Character](https://www.codewars.com/kata/56747fd5cb988479af000028)

# Problem

You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

Examples:
``` JS
Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
```
## Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

## Output

The middle character(s) of the word represented as a string.

# Solution

JavaScript

```JS
function getMiddle(str) {
	let start = 0;
	let end = 0;

	if (str.length % 2 === 0) {
		start = str.length / 2 - 1;
		end = start + 2;
	} else {
		start = str.length / 2;
		end = start + 1;
	}
	return str.substring(start, end);
}
```

# Sample Test

JavaScript

```JS
Test.describe("GetMiddle", function() {
  Test.it("Tests", function() {
    Test.assertEquals(getMiddle("test"),"es");
    Test.assertEquals(getMiddle("testing"),"t");
    Test.assertEquals(getMiddle("middle"),"dd");
    Test.assertEquals(getMiddle("A"),"A");
  });
});
```
