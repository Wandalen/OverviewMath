const tdma = require('tdma');
const _ = require( 'wTools' );
require( 'wmathmatrix' );
require( 'wFiles' );
require( 'wequaler' );

const createMatrix = require('../../proto/CreateMatrix');

var data = _.fileProvider.fileRead({
  filePath : `${__dirname}/../../data/System1000.json`,
  encoding : 'json',
});

const matrix = createMatrix(data.M);

const coefficientMatrix = [
  [ 2, 3, 0, 0 ],
  [ 6, 3, 9, 0 ],
  [ 0, 2, 5, 2 ],
  [ 0, 0, 4, 3 ]
];

const rigthHandSideVector = [ 21, 69, 34, 22 ];
const x = [ 3, 5, 4, 2 ];
const answer = tdma.solver(coefficientMatrix, rigthHandSideVector);
console.log(answer);

// const m = _.Matrix.Make([ 4, 4 ]).copy([ 2, 3, 0, 0, 6, 3, 9, 0, 0, 2, 5, 2, 0, 0, 4, 3 ]);
// const x = _.Matrix.Make([ 4, 1 ]).copy([ 3, 5, 4, 2 ]);
// const b = _.Matrix.Mul( null, [ m, x ] );
// console.log(b);

// const answer = tdma.solver(matrix, data.b);
// console.log(answer);
