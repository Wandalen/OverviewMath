const _ = require( 'wTools' );
require( 'wFiles' );

const title = _.fileProvider.fileRead({
  filePath : `${__dirname}/../doc/title.md`
});

let mainContent = `
### Public math modules
| №  | Module | Binding | Solves SLE | Dependants | Node.js | Browser |
|:---|:------:|:------------:|:----------:|:-------:|:----------:|:-------:|`;

const generalPurposeData = _.fileProvider.fileRead({
  filePath : `${__dirname}/../data/GeneralPurpose.yml`,
  encoding : 'yaml',
});

generalPurposeData.forEach((lib, index) =>
{
  'use strict';

  mainContent += `
  | ${index + 1} | [${lib.npmName}](${lib.repoUri}) | ${lib.binding ? '+' : '-'} | ${lib.solvesSLE ? '+' : '-'} |` +
  ` ${lib.dependants} | ${lib.supportsNodejs ? '+' : '-'} | ${lib.supportsBrowser ? '+' : '-'} |`;
});

mainContent += `
### Public symbolic expression math modules
| №  | Module | Binding | Solves SLE | Dependants | Node.js | Browser |
|:---|:-------|:------------:|:----------:|:-------:|:----------:|:-------:|
`;

const symbolicExpressionData = _.fileProvider.fileRead({
  filePath : `${__dirname}/../data/SymbolicExpression.yml`,
  encoding : 'yaml',
});

symbolicExpressionData.forEach((lib, index) =>
{
  'use strict';

  mainContent += `| ${index + 1} | [${lib.npmName}](${lib.repoUri}) | ${lib.binding ? '+' : '-'} | ${lib.solvesSLE ? '+' : '-'} |` +
  ` ${lib.dependants} | ${lib.supportsNodejs ? '+' : '-'} | ${lib.supportsBrowser ? '+' : '-'} |
  `;
})

const links = _.fileProvider.fileRead({
  filePath : `${__dirname}/../doc/resources.md`
});

_.fileProvider.fileWrite({
  filePath : `${__dirname}/../README.md`,
  data : title + mainContent + links
});

console.log( 'ReadMe created!' );
