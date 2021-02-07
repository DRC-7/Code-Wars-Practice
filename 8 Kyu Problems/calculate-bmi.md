# [Calculate BMI](https://www.codewars.com/kata/57a429e253ba3381850000fb)

# Problem

Write function bmi that calculates body mass index `(bmi = weight / height^2)`

```JS
if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
```

# Solution

JavaScript

```JS
function bmi(weight, height) {
  let str = ""
  const calcBmi = weight / (height * height)

  if (calcBmi <= 18.5){str = "Underweight";}
  else if (calcBmi <= 25.0){str = "Normal";}
  else if (calcBmi <= 30.0){str = "Overweight";}
  else if (calcBmi > 20.0){str = "Obese";}

  return str;
}
```

# Sample Test

JavaScript

```JS
Test.assertEquals(bmi(80, 1.80), "Normal");
```
