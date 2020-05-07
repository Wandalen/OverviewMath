const Matrix = require('t-matrix');

const randomInteger = require('../../data/randomInteger');
const matrix = require('../../data/System1000');

const vector = [];

for (let i = 0; i < 1000; i++) {
  vector.push(randomInteger(-1000, 1000));
}

const result = Matrix.ldiv(matrix, vector);
console.log(result);