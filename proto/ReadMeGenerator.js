(function () {
  'use strict';

  const _ = require( 'wTools' );
  require( 'wFiles' );

  function abs() { return _.path.s.join( __dirname, ... arguments ) }

  const title = _.fileProvider.fileRead({
    filePath : abs('../doc/title.md')
  });

  let mainContent = `
### Public math modules
| №  | Module | Binding | Solves SLE | Dependents | Node.js | Browser |
|:---|:------:|:------------:|:----------:|:-------:|:----------:|:-------:|`;

  const generalPurposeData = _.fileProvider.fileRead({
    filePath : abs('../data/GeneralPurpose.yml'),
    encoding : 'yaml',
  });

  generalPurposeData.forEach((lib, index) =>
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

  const symbolicExpressionData = _.fileProvider.fileRead({
    filePath : abs('../data/SymbolicExpression.yml'),
    encoding : 'yaml',
  });

  symbolicExpressionData.forEach((lib, index) =>
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
