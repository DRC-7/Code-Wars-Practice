# [Who likes it?](https://www.codewars.com/kata/5266876b8f4bf2da9b000362/)

# Problem

You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement a function `likes :: [String] -> String`, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

```JS
likes [] -- must be "no one likes this"
likes ["Peter"] -- must be "Peter likes this"
likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"
```

# Solution

JavaScript

Note: Challenged myself to use a `.forEach` and template literals (`${}`), solution could've been simpler - using switch statements.

```JS
function likes(names) {
  let msg = "";

  if (names.length === 0) {
    msg = "no one likes this";
  } else {
    names.forEach((n) => {
      if (names.length === 1) {
        msg = `${names[0]} likes this`;
      } else if (names.length === 2) {
        msg = `${names[0]} and ${names[1]} like this`;
      } else if (names.length === 3) {
        msg = `${names[0]}, ${names[1]} and ${names[2]} like this`;
      } else {
        const extra = names.length - 2;
        msg = `${names[0]}, ${names[1]} and ${extra} others like this`;
      }
    });
  }
  return msg;
}
```

# Sample Test

JavaScript

```JS
describe('example tests', function() {
  it('should return correct text', function() {
    Test.assertEquals(likes([]), 'no one likes this');
    Test.assertEquals(likes(['Peter']), 'Peter likes this');
    Test.assertEquals(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
    Test.assertEquals(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
    Test.assertEquals(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');
  });
});
```
