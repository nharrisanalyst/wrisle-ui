import {columnWidth} from './columnWidth';
import testCSV from '../testData.json';
import {tableAdapter} from '../tableAdapter'



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