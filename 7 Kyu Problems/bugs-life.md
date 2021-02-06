# [Bugs Life](https://www.codewars.com/kata/5b71af678adeae41df00008c)

# Problem

A bug lives in a world which is a cuboid and has to walk from one corner of the cuboid to the opposite corner (see the picture below).

[Diagram of 'Cuboid Space Diagonal'](https://www.technologyuk.net/mathematics/geometry/images/geometry_0161.gif)

## Task

Define a function which takes 3 arguments: the length a , width b, and height c of the bug's "world", and finds the shortest distance needed to walk from start to finish. The dimensions will be positive numbers.

Note: The bug cannot fly and has to maintain contact with a surface at all times but can walk up walls.

## Example

```
a = 1, b = 2, c = 3 | distance = 4.242640687119285
```

## Hints

Hint 1: Consider how many different routes can be made to get from start to finish. If stuck for where to start, click here for general guidance.

Hint 2: Consider using paper and opening up the net of a cuboid (and think if there are multiple ways this can be viewed) and play around with it to find the shortest length.

# Solution

JavaScript

```JS
function shortestDistance(a, b, c) {

  function pythag(x, y, z) {
    return Math.sqrt( Math.pow(x + y, 2) + Math.pow(z, 2));
  }

  let path1 = pythag(a, b, c);
  let path2 = pythag(b, c, a);
  let path3 = pythag(c, a, b);

  let shortestPath = Math.min(path1, path2, path3);

  return shortestPath;
}
```

# Sample Test

JavaScript

```JS
Test.assertApproxEquals(shortestDistance(1, 2, 3), 4.242640687119285);
Test.assertApproxEquals(shortestDistance(1, 1, 1), 2.23606797749979);
Test.assertApproxEquals(shortestDistance(134, 191.5, 45.5), 262.47380821712477);
```
