import {type WrisleTableProps} from '../../WrisleTable';






interface ColumnWidth<T extends object> extends WrisleTableProps<T>  {
    width:number;
    maxWordLength:number;
}

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



export const columnWidth =<T extends object,>(
        {columns, rows, width=13, maxWordLength=15}:ColumnWidth<T>
    ):Record<typeof columns[number]['key'],number> => {

        const dataLength = {} as Record<typeof columns[number]['key'],number>;
        columns.forEach(c=>{
            const initLength = String(c.key).length;
            let max = initLength;

            rows.forEach(r=>{
                const rLength = String(r[c.key]).length
                
                if(rLength > max){
                    max = rLength;
                }
            })

            dataLength[c.key] = max > maxWordLength ? maxWordLength * width: max * width;

        })

        return dataLength;
    
}