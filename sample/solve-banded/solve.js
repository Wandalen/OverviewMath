var solveBanded = require( 'solve-banded' );
const _ = require( 'wTools' );

const b = [];
const diagonalMain = [];
const diagonalUnder = [];
const diagonalAbove = [];

for( let i = 0; i < 100; i++ )
{
  b.push( _.intRandom( [ -100, 100 ] ) );
  diagonalMain.push( _.intRandom( [ -100, 100 ] ) );
  diagonalUnder.push( _.intRandom( [ -100, 100 ] ) );
  diagonalAbove.push( _.intRandom( [ -100, 100 ] ) );

  if( i === 0 )
  diagonalUnder[ 0 ] = 0;

  if( i === 99 )
  diagonalAbove[ 100 ] = 0;
}

solveBanded( [ diagonalUnder, diagonalMain, diagonalAbove ], 1, 1, b, 100 )
console.log( b );
