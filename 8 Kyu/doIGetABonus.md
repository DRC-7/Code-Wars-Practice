# [Do I Get A Bonus?](https://www.codewars.com/kata/56f6ad906b88de513f000d96)

# Problem

It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell and Lua) or "¥" (Rust).

# Solution
JavaScript
```JS
function bonusTime(salary, bonus) {

  const currSymbol = "\u00A3"
  
  if(bonus == true){
      return currSymbol + salary * 10;}
  else{
      return currSymbol + salary;}
}
```
Python
```PY
def bonus_time(salary, bonus):
    if bonus == True:
        return '$' + str(salary * 10)
    else:
        return '$' + str(salary)
```

# Sample Test
```JS
Test.describe("Basic tests",_=>{
Test.assertEquals(bonusTime(10000, true), '£100000');
Test.assertEquals(bonusTime(25000, true), '£250000');
Test.assertEquals(bonusTime(10000, false), '£10000');
Test.assertEquals(bonusTime(60000, false), '£60000');
Test.assertEquals(bonusTime(2, true), '£20');
Test.assertEquals(bonusTime(78, false), '£78');
Test.assertEquals(bonusTime(67890, true), '£678900');
})
```

```PY
import codewars_test as test
from solution import bonus_time

@test.describe("Fixed Tests")
def basic_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(bonus_time(10000, True), '$100000')
        test.assert_equals(bonus_time(25000, True), '$250000')
        test.assert_equals(bonus_time(10000, False), '$10000')
        test.assert_equals(bonus_time(60000, False), '$60000')
        test.assert_equals(bonus_time(2, True), '$20')
        test.assert_equals(bonus_time(78, False), '$78')
        test.assert_equals(bonus_time(67890, True), '$678900')
```
