# [The Hashtag Generator](https://www.codewars.com/kata/52449b062fb80683ec000024)

# Problem

The marketing team is spending way too much time typing in hashtags. Let's help them with our own Hashtag Generator!

Here's the deal:

- It must start with a hashtag (`#`).

- All words must have their first letter capitalized.

- If the final result is longer than 140 chars it must `return false`.

- If the input or the result is an empty string it must `return false`.

Examples

```JS
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
```

# Solution

JavaScript

```JS
function generateHashtag(str) {
	let fmtStr = str.replace(
		/\w\S*/g,
		(txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
	);

	fmtStr = fmtStr.replace(/\s/g, "");

	if (fmtStr.length < 140 && fmtStr.length !== 0) {
		fmtStr = `#${fmtStr}`;
	} else {
		return false;
	}

	return fmtStr;
}
```

## [Link to regex reference used](https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript)

Solution above converts to arrow function.

```JS
let fmtStr = str.replace(
    /\w\S*/g,
    function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
});
```

# Sample Test

JavaScript

```JS
Test.assertEquals(generateHashtag(""), false, "Expected an empty string to return false")
Test.assertEquals(generateHashtag(" ".repeat(200)), false, "Still an empty string")
Test.assertEquals(generateHashtag("Do We have A Hashtag"), "#DoWeHaveAHashtag", "Expected a Hashtag (#) at the beginning.")
Test.assertEquals(generateHashtag("Codewars"), "#Codewars", "Should handle a single word.")
Test.assertEquals(generateHashtag("Codewars Is Nice"), "#CodewarsIsNice", "Should remove spaces.")
Test.assertEquals(generateHashtag("Codewars is nice"), "#CodewarsIsNice", "Should capitalize first letters of words.")
Test.assertEquals(generateHashtag("code" + " ".repeat(140) + "wars"), "#CodeWars")
Test.assertEquals(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"), false, "Should return false if the final word is longer than 140 chars.")
Test.assertEquals(generateHashtag("a".repeat(139)), "#A" + "a".repeat(138), "Should work")
Test.assertEquals(generateHashtag("a".repeat(140)), false, "Too long")
```
