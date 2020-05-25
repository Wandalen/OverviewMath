const _ = require( 'wTools' );
require( 'wmathmatrix' );

function hasZeroDeterminant( matrix )
{
  'use strict';

  const determinant = matrix.determinant();
  console.log( 'determinant: ', determinant );

  return _.equivalent( determinant, 0 );
}

module.exports = hasZeroDeterminant;
