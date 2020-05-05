const triper = require('solve-periodic-tridiagonal');

const matrix = require('../../data/System1000');
console.log(matrix);

var d = [32, 25, 3, 41]

triper(4, [7, -1, 2, 1], [2, 7, -3, 8], [1, 4, 2, 6], d, []);
// => d = [ 1, 2, 3, 4 ]
console.log(d);