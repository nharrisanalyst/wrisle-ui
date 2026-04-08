import {test,expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import WrisleTable from './WrisleTable';


test('this is a smoke test for the table', ()=>{
    render(<WrisleTable columns={[]} rows={[]} />);
})


export const rows = [
            {name:'Liz', age:22, superID:'1'}, {name:'Sam', age:15, superID:'2'}
        ]
export const columns = Object.keys(rows[0]).map(k=>({
    key:k as keyof typeof rows[0],
    label:k,
}))

export const props ={
    rows,
    columns
}
test('a table is shown when data and columns are provided', async ()=>{
    
    render(<WrisleTable<{[key:string]:string|number|null, superID:string,}> 
           {...props } itemHeight={25}
        />)

    await expect(screen.getByRole('grid')).toBeVisible();
    const columns = screen.getAllByRole('columnheader')
    expect(columns.length).toBeGreaterThan(0);
    const rows = screen.getAllByRole('row');
    expect(rows.length).toBeGreaterThan(0);
    
})

