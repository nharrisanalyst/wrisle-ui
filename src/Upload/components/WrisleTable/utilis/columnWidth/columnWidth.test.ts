import {columnWidth} from './columnWidth';
import testCSV from '../testData.json';
import {tableAdapter} from '../tableAdapter'

/*
   columnWidth takes table data and returns the width of each column

   dependent on longest data 
   longest that data can be is 15

   @param data {columns, width}
   @param width  (per ch default is 1 )

   return 
   {key: [length:number]
   ;
   }
 
*/

test('columnWidth should take data and return width' ,()=>{
    //arange
    const {columns, rows} = tableAdapter(testCSV);
    const width = 13;
    //act
    const length = columnWidth({columns, rows}, width);

    //assert
    expect(length).toEqual({
        name:6*width,
        age:3*width,
        sex:3*width
    })
    
})