Gould's sequence is an infinite integer sequence, named after Henry W. Gould, that counts how many odd numbers are in each row of Pascal's triangle. It consists only of powers of two*, and begins

`1, 2, 2, 4, 2, 4, 4, 8, 2, 4, 4, 8, 4, 8, 8, 16, ..`
Note that Gould's sequence is a fractal sequence.

The binary logarithms ( exponents in the powers of two ) of Gould's sequence form an integer sequence

`0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3, 2, 3, 3, 4, ..`

## Task
Define a generator function gould that sequentially generates the values ( the logarithms ) of this infinite sequence.

It will be tested for up to 1 000 000 values.
( Try to resist the temptation to approximate `Infinity` with a `million ! `)