(function () {
  'use strict';

  const _ = require( 'wTools' );
  require( 'wFiles' );
  require( 'warraysorted' );

  const sortTable = require('./SortTable');

  function abs() { return _.path.s.join( __dirname, ... arguments ) }

  let mainContent = `
### Public math modules
| №  | Module | Binding | Solves SLE | Dependents | Node.js | Browser |
|:---|:------:|:------------:|:----------:|:-------:|:----------:|:-------:|`;

  let data = _.fileProvider.fileRead({
    filePath : abs('../data/GeneralPurpose.yml'),
    encoding : 'yaml',
  });

  let sortedData = sortTable(data);

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

  sortedData = sortTable(data);

  sortedData.forEach((lib, index) =>
  {
    mainContent += `| ${index + 1} | [${lib.npmName}](${lib.repoUri}) | ${lib.binding ? '+' : '-'} | ${lib.solvesSLE ? '+' : '-'} |` +
` ${lib.dependents} | ${lib.supportsNodejs ? '+' : '-'} | ${lib.supportsBrowser ? '+' : '-'} |
`;
  });

  const title = _.fileProvider.fileRead({
    filePath : abs('../doc/title.md')
  });

  const links = _.fileProvider.fileRead({
    filePath : abs('../doc/resources.md'),
  });

  _.fileProvider.fileWrite({
    filePath : abs('../README.md'),
    data : title + mainContent + links
  });

  console.log( 'ReadMe created!' );
})();
