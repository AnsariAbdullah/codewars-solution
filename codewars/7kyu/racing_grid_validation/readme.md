## Description
In a racing series, all drivers start from a perfectly ordered starting grid. After the race, you are given the moves describing how many positions each driver gained or lost relative to their starting position. A positive value means the driver moved forward (gained places), and a negative value means the driver dropped back (lost places).

## Task
Your task is to determine whether this finishing order is **valid**, assuming that:

- No two drivers can start in the same position.
- No two drivers can finish in the same position.
- Every driver finishes the race.

## Write a function that:

- Takes an array `moves` of length `n`, where `moves[i]` is the number of positions the driver that **finished** at position `i` gained (positive) or lost (negative) compared to their starting position.
- Returns a boolean indicating whether there exists a valid race result consistent with the moves.

## Constraints
- `2 <= n <= 100.`

## Examples
### Examples

| moves               | Result | Explanation                                                                     |
|---------------------|--------|---------------------------------------------------------------------------------|
| `[2, -1, -1]`       | True   | The driver that started in last position overtook both drivers before him       |
| `[0, 0, 0, 0, 0]`   | True   | The race finished in the same order as the starting grid                        |
| `[-1, 1, -1]`       | False  | The winner lost a position, which is invalid                                    |
| `[0, 1, 0]`         | False  | The drivers that ended in second and third position both started last, invalid  |


Good luck, have fun!