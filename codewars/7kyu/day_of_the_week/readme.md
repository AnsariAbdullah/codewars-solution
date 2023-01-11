Your task is easy, write a function that takes an date in format d/m/Y(String) and return what day of the week it was(String).
```
"21/01/2017" // returns "Saturday"
"31/03/2017" // returns  "Friday"
```
Have fun!

## Solution
Format the date using `split()` and `join()`. Use an array of days and use `new Date().getDay()` to find the correct day.

Also, `.toLocaleString('en-us', {weekday: 'long'})` can be used to find the day