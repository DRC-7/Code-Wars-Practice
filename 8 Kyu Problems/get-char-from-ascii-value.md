# [Cet character from ASCII Value](https://www.codewars.com/kata/55ad04714f0b468e8200001c

# Problem

Write a function which takes a number and returns the corresponding ASCII char for that value.

Example:

get_char(65) # => 'A'
For ASCII table, you can refer to http://www.asciitable.com/

# Solution

JavaScript

```JS
function getChar(c){
    return String.fromCharCode(c);
}
```

# Sample Test

JavaScript

```JS
Test.assertEquals(getChar(55),'7')
Test.assertEquals(getChar(56),'8')
Test.assertEquals(getChar(57),'9')
Test.assertEquals(getChar(58),':')
Test.assertEquals(getChar(59),';')
Test.assertEquals(getChar(60),'<')
Test.assertEquals(getChar(61),'=')
Test.assertEquals(getChar(62),'>')
Test.assertEquals(getChar(63),'?')
Test.assertEquals(getChar(64),'@')
Test.assertEquals(getChar(65),'A')
```
