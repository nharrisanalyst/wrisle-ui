import {test} from 'vitest';
import {render,screen} from '@testing-library/react';
import {Row} from './Row.WrisleTable';
import {props} from '../WrisleTable.test'

test('this is a smoke test for <Row />', ()=>{
    render(<Row columns={props.columns} rows={props.rows} index={0} /> );
})

test('row should show a data when given a row and column prop', ()=>{

    render(<Row<typeof props.rows[0]> index={0} columns={props.columns} rows={props.rows} />);
    expect(screen.getByText(/Liz/)).toBeVisible()
    expect(screen.getByText(/22/)).toBeVisible()

})