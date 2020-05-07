let _ = require( 'wmathmatrix' );

const randomInteger = require('./randomInteger');

const matrix = _.Matrix.Make([ 5, 5 ]).copy(
  [
    1, 0, 0, 0, 0,
    0, 1, 0, 0, 0,
    0, 0, 1, 0, 0,
    0, 0, 0, 1, 0,
    0, 0, 0, 0, 1,
  ]
)

const result = matrix.determinant();
console.log( `determinant : ${ result }` );

// function generateMatrix( rows, columns )
// {
//   const matrix = [];

//   for ( let i = 0; i < rows; i++ )
//   {
//     const row = [];
//     for ( let j = 0; j < columns; j++ )
//     {
//       let value = i === j ? 1 : 0;
//       row.push( value );
//     }
//     matrix.push( row );
//   }

//   const result = [];

//   matrix.forEach(row => result.push(...row));
  
//   return result;
// }

// const dimensions = 5;

// // const m = generateMatrix( dimensions, dimensions );

// for ( let i = 0; i < 100000; ++i ) {
//   let row1 = randomInteger( 0, dimensions - 1 );
//   let row2;

//   while ( true ) 
//   {
//     row2 = randomInteger( 0, dimensions - 1 );

//     if ( row1 !== row2 ) 
//     break
//   }

//   const k = Math.random();

//   for ( let j = 0; j < dimensions; j++ ) 
//   {
//     matrix[row2][j] += matrix[row1][j] * k;
//   }
// }

// module.exports = matrix;