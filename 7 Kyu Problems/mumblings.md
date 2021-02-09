# [Title](Link)

# Problem

This time no story, no theory. The examples below show you how to write function accum:

Examples:

```JS
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
```

The parameter of accum is a string which includes only letters from `a..z` and `A..Z`.

# Solution

JavaScript

Note: This was way more challenging than I expected. Solution isn't very nice, might reattempt later.

```JS
function accum(s) {
	const str = s.toUpperCase();
	let tempStr = "";
	let finalStr = "";

	for (let i = 0; i < str.length; i++) {
		tempStr = str[i];
		let trailLetters = "";

		for (let k = 0; k <= i; k++) {
			if (k !== 0) {
				trailLetters = str[i].toLowerCase();
			} else {
				tempStr = str[i];
			}
			tempStr += trailLetters;
		}
		finalStr = `${finalStr}${tempStr}-`;
	}

	finalStr = finalStr.substring(0, finalStr.length - 1);

	return finalStr;
}
```

# Sample Test

JavaScript

```JS
Test.describe("accum",function() {
Test.it("Basic tests",function() {
	Test.assertEquals(accum("ZpglnRxqenU"), "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
	Test.assertEquals(accum("NyffsGeyylB"), "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
	Test.assertEquals(accum("MjtkuBovqrU"), "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
	Test.assertEquals(accum("EvidjUnokmM"), "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
	Test.assertEquals(accum("HbideVbxncC"), "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");
})})
```
