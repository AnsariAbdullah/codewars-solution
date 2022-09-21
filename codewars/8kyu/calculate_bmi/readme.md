Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"

## Solution
Calculate hight by dividing weigth with height square, get height square using `Math.pow`. Return text conditionally based on bmi value.