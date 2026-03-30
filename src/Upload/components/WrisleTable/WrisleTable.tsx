import { type ReactElement } from "react";
import {Table, TableHeader, Column, TableBody, Row, Cell} from 'react-aria-components';
import styles from './WrisleTable.module.scss';

interface WrisleTableProps<T> {
     columns:{
        key:keyof T;
        label:string;
        render?:(value:T[keyof T])=> ReactElement;
     }[];
     rows:T[]
}





const WrisleTable=<T extends {[key:string]:string|number|null, id:string},>({columns, rows}:WrisleTableProps<T>)=>{
    
    if(columns.length ===0 || rows.length ===0) return(
        <div>
            <h3>
                Error: Data is incomplete Colums or Rows are Empty.
            </h3>
        </div>
    )
    return(
    <Table
    aria-label='data'
    className={styles.wrisleTable}
    >
        <TableHeader columns={columns} >
            {column =>(
                <Column isRowHeader={true}>
                    {column.label}
                </Column>
            )}
        </TableHeader>
        <TableBody items={rows}>
            {item=>(
                <Row columns={columns}>
                    {column =><Cell>{item[column.key] as string|number|null}</Cell> }
                </Row>
            )}
        </TableBody>
    </Table>
    )
}

export default WrisleTable;