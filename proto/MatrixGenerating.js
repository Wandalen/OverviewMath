const _ = require( 'wTools' );
require( 'wmathmatrix' );
require( 'wFiles' );

const isCorrectSystem = require('./SystemChecker');
const isNonZeroDeterminant = require('./IsNonZeroDeterminant');

function generateM( rows, columns )
{
  'use strict';

  const matrix = [];

  for ( let i = 0; i < rows; i++ )
  {
    const row = [];
    for ( let j = 0; j < columns; j++ )
    {
      let value = i === j ? 1 : 0;
      row.push( value );
    }
    matrix.push( row );
  }

  for ( let i = 0; i < 100000; ++i ) {
    const row1 = _.intRandom([ 0, dimensions - 1 ])
    let row2;

    do
    {
      row2 = _.intRandom([ 0, dimensions - 1 ]);
    }
    while ( !(row1 !== row2) )

    const k = Math.random() / 5;

    for ( let j = 0; j < dimensions; j++ )
    {
      matrix[ row2 ][ j ] += matrix[ row1 ][ j ] * k;
    }
  }

  const result = [];

  matrix.forEach( (row) => result.push( ... row ) );

  return result;
}

const dimensions = 1000;
let M;

do
{
  M = _.Matrix.Make( [ dimensions, dimensions ] )
    .copy(generateM( dimensions, dimensions ));
}
while ( !isNonZeroDeterminant( M ) )

let x = [];

for ( let i = 0; i < 1000; i++ )
{
  x.push( _.intRandom([ -100, 100 ]) );
}

x = _.Matrix.Make( [ 1000, 1 ] ).copy( x );

const b = _.Matrix.Mul( null, [ M, x ] );

if ( !isCorrectSystem(M, x, b) )
throw _.err( 'Error:', new Error('incorrect system') );

_.fileProvider.fileWrite
({
  filePath : `${__dirname}/../data/System1000.json`,
  data : {
    M : Object.values(M.buffer),
    x : Object.values(x.buffer),
    b : Object.values(b.buffer)
  },
  encoding : 'json'
})
console.log( 'New matrix created!' );
