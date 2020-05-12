const ubique = require('ubique');
const _ = require( 'wTools' );
require( 'wmathmatrix' );
require( 'wFiles' );
require( 'wequaler' );

const createMatrix = require('../../proto/CreateMatrix');

var data = _.fileProvider.fileRead({
  filePath : `${__dirname}/../../data/System1000.json`,
  encoding : 'json',
});

const transp = ubique.transpose;

const result = ubique.linsolve(createMatrix(data.M), transp(data.x));
console.log(result);
console.log(data.b);

console.log(_.equivalent( result, data.b ));

// console.log(ubique.linsolve([[1, 1, -1], [1, -2, 3], [2, 3, 1]], transp([5, 6, 3])));
// [[5.846154], [-2.384615], [-1.538462]]

// console.log(ubique.linsolve([[1, 1, -1], [1, -2, 3], [2, 3, 1]], [[4], [-6], [7]]));
// [[1], [2], [-1]]

// console.log(ubique.linsolve([[1, 1, -1], [1, -2, 3], [2, 3, 1]], ubique.eye(3)));
// [[0.846154, 0.307692, -0.0769231], [-0.384615, -0.230769, 0.307692], [-0.538462, 0.0769231, 0.230769]]
