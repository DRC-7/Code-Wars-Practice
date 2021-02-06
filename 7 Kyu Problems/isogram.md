# [Isograms](https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript)

# Problem

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

```JS
isIsogram("Dermatoglyphics") == true
isIsogram("aba") == false
isIsogram("moOse") == false // -- ignore letter case
```

# Solution

JavaScript - WILL REATTEMPT

```JS
function isIsogram(str) {

  let inputStr = str.toLowerCase().split('');
  let array = [];
  let boolChk = true

  for (let s of inputStr) {
    array.push(s);
  }

  let checkedArr = [];

  array.forEach(function (string) {
    if (checkedArr[string]) {
      boolChk = false;
    }
    else {
      checkedArr[string] = true;
    }
  })

  return boolChk;
}
```

# Sample Test

JavaScript

```JS
Test.assertSimilar( isIsogram("Dermatoglyphics"), true );
Test.assertSimilar( isIsogram("isogram"), true );
Test.assertSimilar( isIsogram("aba"), false, "same chars may not be adjacent" );
Test.assertSimilar( isIsogram("moOse"), false, "same chars may not be same case" );
Test.assertSimilar( isIsogram("isIsogram"), false );
Test.assertSimilar( isIsogram(""), true, "an empty string is a valid isogram" );
```
