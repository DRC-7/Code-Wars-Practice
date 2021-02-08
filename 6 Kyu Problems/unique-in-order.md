# [Unique In Order](https://www.codewars.com/kata/54e6533c92449cc251001667)

# Problem

Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

```JS
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
```

# Solution

JavaScript

```JS
var uniqueInOrder = function(seg){
  let arr = [];

  for (let i = 0; i < seg.length; i++) {
    let indexBefore = seg[i - 1];

    if (seg[i] !== indexBefore) {
      arr.push(seg[i]);
    }
  }
  return arr;
}
```

# Sample Test

JavaScript

```JS
Test.assertSimilar(uniqueInOrder('AAAABBBCCDAABBB'), ['A','B','C','D','A','B'])
```
