# [Char Code Calculation](https://www.codewars.com/kata/57f75cc397d62fc93d000059)

# Problem

Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:
```
'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
```
Then replace any incidence of the number ``7`` with the number ``1``, and call this number 'total2':

```
total1 = 656667
              ^
total2 = 656661
              ^
```

Then return the difference between the sum of the digits in ``total1`` and ``total2``:

```
  (6 + 5 + 6 + 6 + 6 + 7)
- (6 + 5 + 6 + 6 + 6 + 1)
-------------------------
                       6
```

# Solution
JavaScript
```JS
function calc(x){
  
  let total1 = '';

  for (let i = 0; i < x.length; i++) {
    total1 += x.charCodeAt(i);
  }

  let total2 = total1.split('7').join('1');
    
  let newT1 = 0;
  let newT2 = 0;
  
  for(let i = 0; i < total1.length; i++){
    newT1 += parseInt(total1[i]);
    newT2 += parseInt(total2[i]);
  }
  
  let difference = newT1 - newT2;

  return difference;
}
```

# Sample Test 
```JS
Test.describe("Example tests",_=>{
Test.assertEquals(calc('ABC'), 6);
Test.assertEquals(calc('abcdef'), 6);
Test.assertEquals(calc('ifkhchlhfd'), 6); 
Test.assertEquals(calc('aaaaaddddr'), 30); 
Test.assertEquals(calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'), 96);
});
```
