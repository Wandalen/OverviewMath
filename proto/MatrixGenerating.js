const _ = require( 'wTools' );
require( 'wmathmatrix' );
require( 'wFiles' );

const isCorrectSystem = require('./SystemChecker');
const isNonZeroDeterminant = require('./IsNonZeroDeterminant');

function generateM( rows, columns )
{
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
    const row1 = _.intRandom([0, dimensions - 1])
    let row2;
  
    while ( true ) 
    {
      row2 = _.intRandom([0, dimensions - 1])
  
      if ( row1 !== row2 ) 
      break
    }
  
    const k = Math.random() / 5;
  
    for ( let j = 0; j < dimensions; j++ ) 
    {
      matrix[row2][j] += matrix[row1][j] * k;
    }
  }

  const result = [];

  matrix.forEach( row => result.push( ...row ) );
  
  return result;
}

const dimensions = 1000;
let M;

while ( true )
{
  M = _.Matrix.Make( [ dimensions, dimensions ] )
    .copy(generateM( dimensions, dimensions ));

  if ( isNonZeroDeterminant( M ) )
  break;
}

let x = [];

for ( let i = 0; i < 1000; i++ ) 
{
  x.push( _.intRandom([-100, 100]) );
}

x = _.Matrix.Make( [ 1000, 1 ] ).copy( x );

const b = _.Matrix.Mul( null, [ M, x ] );

if ( !isCorrectSystem(M, x, b) )
throw _.err( 'Error:', new Error('incorrect system') );

console.log(M);
console.log(x);
console.log(b);

_.fileProvider.fileWrite
({
  filePath : `${__dirname}/../data/System1000.json`,
  data: { 
    M: Object.values(M.buffer),
    x: Object.values(x.buffer), 
    b: Object.values(b.buffer)
  },
  encoding : 'json',
})
console.log( 'New matrix created!' );
