# [Square Every Digit](https://www.codewars.com/kata/546e2562b03326a88e000020/)

# Problem

Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer

# Solution

JavaScript

Note: Could have used `.map` to come up with a solution.

```JS
function squareDigits(num) {
	let newNum = 0;

	for (const n of num.toString()) {
		const temp = n ** 2;
		newNum += `${temp}`;
	}

	return parseInt(newNum);
}
```

# Sample Test

JavaScript

```JS
Test.assertEquals(squareDigits(9119), 811181);
```
