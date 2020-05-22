const _ = require( 'wTools' );
require( 'wmathmatrix' );

function isNonZeroDeterminant( matrix )
{
  'use strict';

  const determinant = Math.round( matrix.determinant() );
  console.log( determinant );

  return !!determinant;
}

module.exports = isNonZeroDeterminant;
