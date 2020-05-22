const _ = require( 'wTools' );
require( 'wmathmatrix' );

function isNonZeroDeterminant( matrix )
{
  'use strict';

  const determinant = matrix.determinant();
  console.log( 'determinant: ', determinant );

  return !!determinant;
}

module.exports = isNonZeroDeterminant;
