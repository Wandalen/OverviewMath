'use strict';

const _ = require( 'wTools' );
require( 'wFiles' );
require( 'warraysorted' );

const columns = require( './SortOrder' );

let columnTitleRow = '|№|';
let subColumnTitleRow = '|:-:|';

columns.forEach( ( column ) =>
{
  columnTitleRow += column.readMeTitle + '|';
  subColumnTitleRow += ':--:|';
} );

let mainContent = `
### Public general purpose math modules
${columnTitleRow}
${subColumnTitleRow}`;

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
${columnTitleRow}
${subColumnTitleRow}
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
${columnTitleRow}
${subColumnTitleRow}
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

  let row = `|${index + 1}|`;

  columns.forEach( ( column ) =>
  {
    if( column.dataTitle === 'npmName' )
      row += `[${lib.npmName}](${lib.repoUri})|`;
    else if( lib[ column.dataTitle ] === true )
      row += '+|';
    else if( lib[ column.dataTitle ] === false )
      row += '-|';
    else
      row += `${lib[ column.dataTitle ]}|`;
  } )

  return row;
}
