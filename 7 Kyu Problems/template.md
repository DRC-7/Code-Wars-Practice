# [Disemvowel Trolls](https://www.codewars.com/kata/52fba66badcd10859f00097e)

# Problem

Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string: `"This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!"`

Note: for this kata y isn't considered a vowel.

# Solution

JavaScript

Note: Using Regex I could've done a `.replace(/[aeiou]/gi, '')` - see 2nd block.

```JS
function disemvowel(str) {

  let vowels = /[aeiou]/i
  let newStr = "";

  for (let s of str) {
    if (s.search(vowels)) {
      newStr += s;
    }
  }

  return newStr;
}
```

More slick solution...

```JS
function disemvowel(str) {

  let vowels = /[aeiou]/gi;
  //str.replace(vowels, '') -> if char matches vowel(s), replace with whitespace
  let newStr = str.replace(vowels, '');

  return newStr;
}
```

# Sample Test

JavaScript

```JS
Test.assertEquals(disemvowel("This website is for losers LOL!"),
  "Ths wbst s fr lsrs LL!")
```
