// const Matrix = require( 't-matrix' );
const _ = require( 'wTools' );
require( 'wmathmatrix' );
require( 'wFiles' );
require( 'wequaler' );

var data = _.fileProvider.fileRead({
  filePath : `${__dirname}/../../data/System1000.json`,
  encoding : 'json',
});

const dims = Math.sqrt( data.M.length );
const M = _.Matrix({
  buffer : data.M,
  dims : [ dims, dims ],
  inputRowMajor : 0,
})

const x = _.Matrix.Make([ data.x.length, 1 ]).copy(data.x);
const b = _.Matrix.Make([ data.b.length, 1 ]).copy(data.b);

const result = _.Matrix.Mul( null, [ M, x ] );
console.log(_.equivalent( result, b ));
