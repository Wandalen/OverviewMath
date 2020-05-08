var solveBanded = require('solve-banded')

var e = [4, 25, -5]

solveBanded([[0, -1, 2], [2, 7, -3], [1, 4, 0]], 1, 1, e, 3)

console.log(e)
// => e = [ 1, 2, 3 ]