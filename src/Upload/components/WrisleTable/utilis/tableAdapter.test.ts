import {test} from 'vitest';
import testCSV from './testData.json';
import {tableAdapter} from './tableAdapter'

test('tableadapter takes in CSV parsed data and returns table column and rows', ()=>{
    //act 
    const tableData = tableAdapter(testCSV);

    expect(tableData.columns[0].key).toBe('name')
    expect(tableData.columns[1].key).toBe('age')
    expect(tableData.columns[2].key).toBe('sex')

    expect(tableData.rows).toBe(testCSV);

})