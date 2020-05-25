'use strict';

const _ = require( 'wTools' );
require( 'wmathmatrix' );
require( 'wFiles' );

const isCorrectSystem = require( './SystemChecker' );
const hasZeroDeterminant = require( './hasZeroDeterminant' );

const dimensions = Number( process.argv.slice( 2 ) );

if( dimensions !== 100 && dimensions !== 1000 )
throw _.err( 'Error:', new Error( 'specify after command correct matrix dimensions - 100 or 1000' ) );

let M;

do
{
  M = _.Matrix.Make( [ dimensions, dimensions ] )
  .copy( generateM( dimensions, dimensions ) );
}
while( hasZeroDeterminant( M ) )

let x = [];

for( let i = 0; i < dimensions; i++ )
{
  x.push( _.intRandom( [ -dimensions, dimensions ] ) );
}

x = _.Matrix.Make( [ dimensions, 1 ] ).copy( x );

const b = _.Matrix.Mul( null, [ M, x ] );

if( !isCorrectSystem( M, x, b ) )
throw _.err( 'Error:', new Error( 'incorrect system' ) );

_.fileProvider.fileWrite
( {
  filePath : `${__dirname}/../data/${dimensions === 100 ? 'System100.json' : 'System1000.json'}`,
  data : {
    M : Object.values( M.buffer ),
    x : Object.values( x.buffer ),
    b : Object.values( b.buffer )
  },
  encoding : 'json'
} );

console.log( `New matrix ${dimensions + 'x' + dimensions} created!` );

function generateM( rows, columns )
{
  'use strict';

  const matrix = [];

  for( let i = 0; i < rows; i++ )
  {
    const row = [];
    for( let j = 0; j < columns; j++ )
    {
      let value = i === j ? 1 : 0;
      row.push( value );
    }
    matrix.push( row );
  }

  const end = dimensions === 100 ? 10000 : 100000;

  for( let i = 0; i < end; ++i )
  {
    const row1 = _.intRandom( [ 0, rows ] )
    let row2;

    do
    {
      row2 = _.intRandom( [ 0, rows ] );
    }
    while( !( row1 !== row2 ) )

    const k = Math.random() / 5;

    for( let j = 0; j < rows; j++ )
    {
      matrix[ row2 ][ j ] += matrix[ row1 ][ j ] * k;
    }
  }

  const result = [];

  matrix.forEach( ( row ) => result.push( ... row ) );

  return result;
}
