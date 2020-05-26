'use strict';

const _ = require( 'wTools' );
require( 'wFiles' );
require( 'warraysorted' );

const columns = require( './SortOrder' );

const readMeColumnTitles = {
  npmName : 'Module',
  binding : 'Binding',
  solvesSLE : 'Solves SLE',
  dependants : 'Dependants',
  supportsNodejs : 'Node.js',
  supportsBrowser : 'Browser',
}

let columnTitlesRow = `|№|${readMeColumnTitles.npmName}|`;
let subColumnTitlesRow = '|:-:|:-:|';

columns.forEach( ( column ) =>
{
  columnTitlesRow += readMeColumnTitles[ column ] + '|';
  subColumnTitlesRow += ':--:|';
} );

let mainContent = `
### Public general purpose math modules
${columnTitlesRow}
${subColumnTitlesRow}`;

let data = _.fileProvider.fileRead
( {
  filePath : abs( '../data/GeneralPurpose.yml' ),
  encoding : 'yaml',
} );

data.forEach( ( lib, index ) =>
{
  mainContent += `
${createRow( columns, lib, index )}`;
} );


mainContent += `

### Public special purpose math modules
${columnTitlesRow}
${subColumnTitlesRow}
`;

data = _.fileProvider.fileRead
( {
  filePath : abs( '../data/Special.yml' ),
  encoding : 'yaml',
} );

data.forEach( ( lib, index ) =>
{
  mainContent += `${createRow( columns, lib, index )}
`;
} );

mainContent += `
### Public symbolic expression math modules
${columnTitlesRow}
${subColumnTitlesRow}
`;

data = _.fileProvider.fileRead
( {
  filePath : abs( '../data/SymbolicExpression.yml' ),
  encoding : 'yaml',
} );

data.forEach( ( lib, index ) =>
{
  mainContent += `${createRow( columns, lib, index )}
`;
} );

const title = _.fileProvider.fileRead
( {
  filePath : abs( '../doc/title.md' )
} );

const links = _.fileProvider.fileRead
( {
  filePath : abs( '../doc/resources.md' ),
} );

_.fileProvider.fileWrite
( {
  filePath : abs( '../README.md' ),
  data : title + mainContent + links
} );

console.log( 'ReadMe is created!' );

function abs() { return _.path.s.join( __dirname, ... arguments ) }

function createRow( columns, lib, index )
{
  'use strict';

  let row = `|${index + 1}|[${lib.npmName}](${lib.repoUri})|`;

  columns.forEach( ( column ) =>
  {
    if( lib[ column ] === true )
      row += '+|';
    else if( lib[ column ] === false )
      row += '-|';
    else
      row += `${lib[ column ]}|`;
  } )

  return row;
}
