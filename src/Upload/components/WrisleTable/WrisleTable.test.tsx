import {test,expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import WrisleTable from './WrisleTable';


test('this is a smoke test for the table', ()=>{
    render(<WrisleTable columns={[]} rows={[]} />);
})

test('there is an error when columsn or header is empty',()=>{
    const {rerender} =render(<WrisleTable<{[key:string]:unknown}> 
        columns={
            [
                {
                    key:'name',
                    label:'Name'
                }
            ]
        }
        rows={[]} 
        />);

        expect(screen.getByText(/Error/)).toBeVisible();
    
    rerender(<WrisleTable<{[key:string]:unknown}> 
        columns={[]}
        rows={[{name:'string'}]} 
        />)
    
})

test('a table is shown when data and columns are provided', async ()=>{
    const props ={
        columns:[
            {
                key:'name',
                label:'Name'
            },
            {
                key:'age',
                label:'Age'
            }
        ],
        rows:[
            {name:'Liz', age:22, id:'1'}, {name:'Sam', age:15, id:'2'}
        ]
    }
    render(<WrisleTable<{[key:string]:string|number|null, id:string}> 
           {...props}
        />)

    await expect(screen.getByRole('grid')).toBeVisible();
    const columns = screen.getAllByRole('columnheader')
    expect(columns.length).toBeGreaterThan(0);
    const rows = screen.getAllByRole('row');
    expect(rows.length).toBeGreaterThan(0);
    
})

