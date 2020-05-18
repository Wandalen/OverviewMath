function createRow( columns, lib, index )
{
  'use strict';

  let row = `|${index + 1}|`;

  columns.forEach( ( column ) =>
  {
    if ( column.dataTitle === 'npmName' )
    {
      row += `[${lib.npmName}](${lib.repoUri})|`
    }
    else if ( lib[ column.dataTitle ] === true )
    {
      row += '+|';
    }
    else if ( lib[ column.dataTitle ] === false )
    {
      row += '-|';
    }
    else
    {
      row += `${lib[ column.dataTitle ]}|`;
    }
  } )

  return row;
}

module.exports = createRow;
