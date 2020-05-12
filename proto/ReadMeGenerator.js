(function () {
  'use strict';

  const _ = require( 'wTools' );
  require( 'wFiles' );
  require( 'warraysorted' );

  // const a = [4, -2, 0, 1, 5, 7, 6];
  // const t = [];
  // for( let i = 0 ; i < a.length ; i++ )
  // _.sorted.add( t, a[ i ], (a, b) => {
  //   return a - b
  // } );
  // console.log(t);

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
  _.sorted.add( sortedData, data[ i ], (lib) => lib.dependents );

  sortedData.reverse();

  const bindingAndSolvingSLE = sortedData.filter((lib) => {
    if (lib.binding && lib.solvesSLE)
    return lib;
  });

  const onlyBinding = sortedData.filter((lib) => {
    if (lib.binding && !lib.solvesSLE)
    return lib;
  });

  const onlySolvingSLE = sortedData.filter((lib) => {
    if (!lib.binding && lib.solvesSLE)
    return lib;
  });

  const other = sortedData.filter((lib) => {
    if (!lib.binding && !lib.solvesSLE)
    return lib;
  });

  sortedData = [ ... bindingAndSolvingSLE, ... onlyBinding, ... onlySolvingSLE, ... other ];

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
