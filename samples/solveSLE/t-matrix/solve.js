const Matrix = require( 't-matrix' );
const wMathMatrix = require( 'wmathmatrix' );
const wFiles = require( 'wFiles' );

const randomInteger = require('../../data/randomInteger');
// const matrix = require('../../data/System1000.json');

try {
  wFiles.fileProvider.fileRead({ 
    filePath : `${__dirname}/../../data/System1000.json`,
    encoding : 'json', 
    sync : 0 })
  .finally( function( err, data )
  {
    if( err )
    throw err;
    
    const dataArr = data.split(',');
    const dimensions =  Math.sqrt(dataArr.length);
    console.log(dataArr, dimensions);
    const matrix = wMathMatrix.Matrix.Make([ dimensions, dimensions ])
      .copy(dataArr);

    console.log(matrix);
    return null;
  });
} catch (error) {
  console.log(error);
}


const vector = [];

for (let i = 0; i < 1000; i++) {
  vector.push(randomInteger(-1000, 1000));
}

const result = Matrix.ldiv(matrix, vector);
console.log(result);