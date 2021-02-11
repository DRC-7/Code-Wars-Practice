# [Number to digit tiers](https://www.codewars.com/kata/586bca7fa44cfc833e00005c)

# Problem

Create a function that takes a number and returns an array of strings containing the number cut off at each digit.

Examples:

```JS
420 should return ["4", "42", "420"]
2017 should return ["2", "20", "201", "2017"]
2010 should return ["2", "20", "201", "2010"]
4020 should return ["4", "40", "402", "4020"]
80200 should return ["8", "80", "802", "8020", "80200"]
```

PS: The input is guaranteed to be an integer in the range [0, 1000000]

# Solution

JavaScript

```JS
function createArrayOfTiers(num) {
  let strArray = [];

  for (let n of num.toString()) {
    strArray.push(n);
  }

  let fmtArray = [];
  let count = "";

  for (let num of strArray) {
    count += num;
    fmtArray.push(count);
  }

  return fmtArray;
}
```

Python

```PY
def create_array_of_tiers(n):
    newArr = []

    for n in str(n):
        newArr.append(n)

    fmtArr = []
    count = ""

    for f in newArr:
        count += f
        fmtArr.append(count)

    return fmtArr
```

# Sample Test

JavaScript

```JS
describe("createArrayOfTiers", function(){
    it ("should return the correct array for 420", function(){
        Test.assertDeepEquals(createArrayOfTiers(420), ["4", "42", "420"]);
    });
    it ("should return the correct array for 2017", function(){
        Test.assertDeepEquals(createArrayOfTiers(2017), ["2", "20", "201", "2017"]);
    });
});
```

Python

```PY
import codewars_test as test

@test.it("Sample tests")
def tests():
    test.assert_equals(create_array_of_tiers(420), ["4", "42", "420"])
    test.assert_equals(create_array_of_tiers(2017), ["2", "20", "201", "2017"])
    test.assert_equals(create_array_of_tiers(2010), ["2", "20", "201", "2010"])
    test.assert_equals(create_array_of_tiers(4020), ["4", "40", "402", "4020"])
    test.assert_equals(create_array_of_tiers(80200), ["8", "80", "802", "8020", "80200"])
```
