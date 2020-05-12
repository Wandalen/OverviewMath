const solve = require('ndarray-linear-solve');
const show = require('ndarray-show');
const ndarray = require('ndarray');

const matrix = require('../../data/System1000');

const modifiedMatrix = [];

matrix.forEach((row) =>
{
  'use strict';

  modifiedMatrix.push(... row);
})

const vector = [];

for (let i = 0; i < 1000; i++)
{
  vector.push(randomInteger(-1000, 1000));
}

const A = ndarray(modifiedMatrix, [ 1000, 1000 ], [ 1, 5 ]);
const B = ndarray(vector);
const X = ndarray(new Float64Array(1000));
const r = solve(X, A, B);
// console.log('input:\n' + show(A), '\n');
if (r)
{
  console.log('solution:\n' + show(X));
} else {
  console.log('matrix is singular');
}
