(function () {
  'use strict';

  const _ = require( 'wTools' );
  require( 'wFiles' );
  require( 'warraysorted' );

  function abs() { return _.path.s.join( __dirname, ... arguments ) }

  const title = _.fileProvider.fileRead({
    filePath : abs('../doc/title.md')
  });

  let mainContent = `
### Public math modules
| №  | Module | Binding | Solves SLE | Dependents | Node.js | Browser |
|:---|:------:|:------------:|:----------:|:-------:|:----------:|:-------:|`;

  let data = _.fileProvider.fileRead({
    filePath : abs('../data/GeneralPurpose.yml'),
    encoding : 'yaml',
  });

  let sortedData = [];
  for( let i = 0 ; i < data.length ; i++ )
  _.sorted.add( sortedData, data[ i ], (lib) => lib.dependents )

  // _.sorted.add( sortedData, data[ i ], (lib) => {
  //   !isNaN( lib.dependents ) ? lib.dependents : 0
  // } );

  sortedData.forEach((lib, index) =>
  {
    mainContent += `
| ${index + 1} | [${lib.npmName}](${lib.repoUri}) | ${lib.binding ? '+' : '-'} | ${lib.solvesSLE ? '+' : '-'} |` +
`${lib.dependents} | ${lib.supportsNodejs ? '+' : '-'} | ${lib.supportsBrowser ? '+' : '-'} |`;
  });

  mainContent += `
### Public symbolic expression math modules
| №  | Module | Binding | Solves SLE | Dependents | Node.js | Browser |
|:---|:-------|:------------:|:----------:|:-------:|:----------:|:-------:|
`;

  data = _.fileProvider.fileRead({
    filePath : abs('../data/SymbolicExpression.yml'),
    encoding : 'yaml',
  });

  sortedData = [];
  for( let i = 0 ; i < data.length ; i++ )
  _.sorted.add( sortedData, data[ i ], (lib) => lib.dependents );

  sortedData.forEach((lib, index) =>
  {
    mainContent += `| ${index + 1} | [${lib.npmName}](${lib.repoUri}) | ${lib.binding ? '+' : '-'} | ${lib.solvesSLE ? '+' : '-'} |` +
` ${lib.dependents} | ${lib.supportsNodejs ? '+' : '-'} | ${lib.supportsBrowser ? '+' : '-'} |
`;
  })

  const links = _.fileProvider.fileRead({
    filePath : abs('../doc/resources.md'),
  });

  _.fileProvider.fileWrite({
    filePath : abs('../README.md'),
    data : title + mainContent + links
  });

  console.log( 'ReadMe created!' );
})();
