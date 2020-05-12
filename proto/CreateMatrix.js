function createMatrix(arr)
{
  'use strict';

  const rowLength = Math.sqrt(arr.length);
  const matrix = [];

  for (let i = 0; i < arr.length; i += rowLength) {
    matrix.push(arr.slice(i, i + rowLength))
  }

  return matrix;
}

module.exports = createMatrix;
