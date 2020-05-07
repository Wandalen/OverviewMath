const ubique = require('ubique');

const randomInteger = require('../../data/randomInteger');
const matrix = require('../../data/System1000');

const transp = ubique.transpose;

const vector = [];

for (let i = 0; i < 1000; i++) 
{
  vector.push(randomInteger(-1000, 1000));
}

console.log(ubique.linsolve(matrix, transp(vector)))

// console.log(ubique.linsolve([[1, 1, -1], [1, -2, 3], [2, 3, 1]], transp([5, 6, 3])));
// [[5.846154], [-2.384615], [-1.538462]]

// console.log(ubique.linsolve([[1, 1, -1], [1, -2, 3], [2, 3, 1]], [[4], [-6], [7]]));
// [[1], [2], [-1]]

// console.log(ubique.linsolve([[1, 1, -1], [1, -2, 3], [2, 3, 1]], ubique.eye(3)));
// [[0.846154, 0.307692, -0.0769231], [-0.384615, -0.230769, 0.307692], [-0.538462, 0.0769231, 0.230769]]