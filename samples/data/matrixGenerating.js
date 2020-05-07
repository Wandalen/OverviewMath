const path = require('path');
const fs = require('fs');
const _ = require( 'wmathmatrix' );

const randomInteger = require('./randomInteger');

function generateMatrix( rows, columns )
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
    const row1 = randomInteger( 0, dimensions - 1 );
    let row2;
  
    while ( true ) 
    {
      row2 = randomInteger( 0, dimensions - 1 );
  
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

  matrix.forEach(row => result.push(...row));
  
  return result;
}

function nonZeroDeterminant(matrix)
{
  return true;
}

const dimensions = 1000;
let matrix;

while (true)
{
  matrix = _.Matrix.Make([ dimensions, dimensions ])
    .copy(generateMatrix( dimensions, dimensions ));

  if (nonZeroDeterminant(matrix))
  break;
}

console.log();

fs.writeFile(
  path.join(__dirname, 'System1000.js'),
  JSON.stringify(Object.values(matrix.buffer)),
  err => 
  {
    if (err) 
    throw err

    console.log('New matrix created!');
  }
)
