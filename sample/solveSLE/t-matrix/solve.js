const Matrix = require( 't-matrix' );
const _ = require( 'wTools' );
require( 'wmathmatrix' );
require( 'wFiles' );
require( 'wequaler' );

var data = _.fileProvider.fileRead({
  filePath : `${__dirname}/../../data/System1000.json`,
  encoding : 'json', 
});

const Mdims = Math.sqrt( data.M.length );
const M = _.Matrix.Make([ Mdims, Mdims ]).copy(data.M);
const x = _.Matrix.Make([ data.x.length, 1 ]).copy(data.x);
const b = _.Matrix.Make([ data.b.length, 1 ]).copy(data.b);
console.log(M);
console.log(x);
console.log(b);

/*
  А тут перевірка уже не виконовується. Як я помітив - після зчитування і нового формування матриці М,
  порядок значень у буфері уже не той, який був при формування матриці М під час її генерації(до запису).
  Вектори x та b формуються так само, як і при їх генерації(до запису). Для семплів нам потрібні матриці
  у вигляді ваших матриць _.Matrix.Make([ n, m ]).copy(arr)?
 */
const result = _.Matrix.Mul( null, [ M, x ] );
console.log(_.equivalent( result, b ));