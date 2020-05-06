// const triper = require('solve-periodic-tridiagonal');
// let _ = require('wmathmatrix');

// const matrix = require('../../data/System1000');
// console.log(matrix);

var tdiag = require('solve-tridiagonal')

var d = [4, 25, -5]

tdiag([0, -1, 2], [2, 7, -3], [1, 4, 0], d)
// => d = [ 1, 2, 3 ]