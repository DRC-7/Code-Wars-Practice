# [Get the mean of an array](https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript)

# Problem

It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.

# Solution

JavaScript

```JS
function getAverage(marks){

  let total = 0;

  for (let m of marks) {
    total += m;
  }

  return Math.floor(total / marks.length);
}
```

# Sample Test

JavaScript

```JS
Test.assertEquals(getAverage([2,2,2,2]),2);
Test.assertEquals(getAverage([1,2,3,4,5,]),3);
Test.assertEquals(getAverage([1,1,1,1,1,1,1,2]),1);
```
