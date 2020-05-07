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

  return matrix;
}

const dimensions = 1000;

const matrix = generateMatrix( dimensions, dimensions );

for ( let i = 0; i < 100000; ++i ) {
  let row1 = randomInteger( 0, dimensions - 1 );
  let row2;

  while ( true ) 
  {
    row2 = randomInteger( 0, dimensions - 1 );

    if ( row1 !== row2 ) 
    break
  }

  const k = Math.random();

  for ( let j = 0; j < dimensions; j++ ) 
  {
    matrix[row2][j] += matrix[row1][j] * k;
  }
}

module.exports = matrix;