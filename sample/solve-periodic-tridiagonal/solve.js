var spt = require( 'solve-periodic-tridiagonal' );
const _ = require( 'wTools' );

let b = [];
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

console.log( spt( 100, diagonalUnder, diagonalMain, diagonalAbove, b, [] ) );
console.log( b );
