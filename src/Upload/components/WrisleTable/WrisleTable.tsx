import {useState, type ReactElement } from "react";
import {List, getScrollbarSize} from 'react-window';
import {Row} from './Row.WrisleTable/Row.WrisleTable';

import styles from './WrisleTable.module.scss';



export interface WrisleTableProps<T> {
     columns:{
        key:keyof T;
        label:string;
        render?:(value:T[keyof T])=> ReactElement;
     }[];
     rows:T[]
}

interface Virtualization {
    itemHeight:number;
}





const WrisleTable=<T extends {[key:string]:string|number|null, superID:string},>({columns, rows, itemHeight}:WrisleTableProps<T> & Virtualization)=>{
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
         <div className={styles.wrisleScorllControl} style={{width:size}} />
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