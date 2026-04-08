import { type ReactElement } from "react";
import {type RowComponentProps} from 'react-window';
import styles from '../WrisleTable.module.scss';

interface RowProps<T> {
    columns:{
            key:keyof T;
            label:string;
            render?:(value:T[keyof T])=> ReactElement;
         }[]
    rows:T[];
}


export const Row =<T extends Record<string, string|number|null>,>({index, columns,rows, style}:RowComponentProps<{
columns:RowProps<T>['columns'],
rows:RowProps<T>['rows']
}>)=>{
    const row = rows[index];
  return(
    <div className={styles.wrisleTR} role='row' style={style}>
      {
        columns.map((column,i)=>(
          <div className={styles.wrisleTD} role='cell' key={i}>
            {row[column.key]}
          </div>
        ))
      }
    </div>
)
}
