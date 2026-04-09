import {useState, type ReactElement } from "react";
import {List, getScrollbarSize} from 'react-window';
import {Row} from './Row.WrisleTable/Row.WrisleTable';

import styles from './WrisleTable.module.scss';


type Column<T extends object> ={
    [K in keyof T]:{
        key:K;
        label:string;
        render?:(value:T[K])=>ReactElement;
    }
}[keyof T]

type Row<T extends object> = T;


export interface WrisleTableProps<T extends object> {
     columns:Column<T>[];
     rows:Row<T>[];
}

interface Virtualization {
    itemHeight:number;
}





const WrisleTable=<T extends {[key:string]:string|number|null|boolean, superID:string},>({columns, rows, itemHeight}:WrisleTableProps<T> & Virtualization)=>{
   const [size] = useState(getScrollbarSize);
    
    

    return(
       <div className={styles.wrisleTable} role="grid">
        <div className={styles.wrisleSubCont} >
        <div className={styles.wrisleThead} role="row" aria-rowindex={1}>
            {
                columns.map(column=>(
                    <div className={styles.wrisleTH} key={column.key as string} role="columnheader">{column.label}</div>
                ))
            }
        </div>
         <div className={styles.wrisleScrollControl} style={{width:size}} />
        </div>
        <div className={styles.wriseListCont} role="table">
           <List
          rowComponent={Row<typeof rows[0]>}
          rowCount={rows.length}
          rowHeight={itemHeight}
          rowProps={{ columns, rows }}
        />
        </div>
       </div>
    
    )
}

export default WrisleTable;