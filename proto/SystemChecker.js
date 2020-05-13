const _ = require( 'wTools' );
require( 'wequaler' );
require( 'wmathmatrix' );

function isCorrectSystem( M, x, b )
{
  'use strict';

  const result = _.Matrix.Mul( null, [ M, x ] );
  return _.equivalent( result, b );
}

module.exports = isCorrectSystem;
