# [Stop gninnipS My sdroW!](https://www.codewars.com/kata/5264d2b162488dc400000001)

# Problem

Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

```JS
spinWords( "Hey fellow warriors")  => returns "Hey wollef sroirraw"
spinWords( "This is a test")       => returns "This is a test"
spinWords( "This is another test") => returns "This is rehtona test"
```

# Solution

First successful solution

JavaScript

```JS
function spinWords(str){
  let fmtStr = str.split(' ');
  let wordArr = [];

  for (let i = 0; i < fmtStr.length; i++) {
    let tempWord = "";

    if (fmtStr[i].length >= 5) {
      tempWord += fmtStr[i].split('').reverse().join('');
      wordArr.push(tempWord);
    }
    else {
      tempWord += fmtStr[i];
      wordArr.push(tempWord);
    }
  }

  let newStr = wordArr.join(" ");

  return newStr;
}
```

Note: Below is a better solution. Instead of creating an array to transfer the words into, look at the word at the index. `If >5, split > reverse > join` the word at that index. Uses original array, simply reverses letters and joins at the end.

```JS
function spinWords(str){
  let fmtStr = str.split(' ');

  for (let i = 0; i < fmtStr.length; i++) {
    if (fmtStr[i].length >= 5) {
      fmtStr[i] = fmtStr[i].split('').reverse().join('');
    }
  }

  let newStr = fmtStr.join(' ');

  return newStr;
}
```

# Sample Test

JavaScript

```JS
Test.assertEquals(spinWords("Welcome"), "emocleW");
Test.assertEquals(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
Test.assertEquals(spinWords("This is a test"), "This is a test");
Test.assertEquals(spinWords("This is another test"), "This is rehtona test");
Test.assertEquals(spinWords("You are almost to the last test"), "You are tsomla to the last test");
Test.assertEquals(spinWords("Just kidding there is still one more"), "Just gniddik ereht is llits one more");
Test.assertEquals(spinWords("Seriously this is the last one"), "ylsuoireS this is the last one");
```
