import { typedKeys } from "../../../../../types/helpers/typedKeys";



interface ColumnWidth<T>  {
    data:{
        rows:T[];
        columns:{
                key:keyof T;
                label:string;
                render?:(value:T[keyof T])=> ReactElement;
             }[];
    },
    width?:number
}



export const columnWidth =<T>(
        data:ColumnWidth<T>['data'], 
        width:ColumnWidth<T>['width'] = 1
    ):{ [P in keyof T ]: number } => {

        const dataLongest:Record<keyof T,number> = Object.create(null);
        data.columns.forEach(c=>{
            dataLongest[c.key] = String(c.key).length;
        })

        data.rows.forEach(r=>{
            data.columns.forEach(c=>{
                if(dataLongest[c.key]<15 && dataLongest[c.key] < String(r[c.key]).length){
                    dataLongest[c.key] = String(r[c.key]).length;
                }
            })
        })
        const dataLength:Record<keyof T,number> = Object.create(null);
        typedKeys(dataLongest).forEach(k =>{
            dataLength[k] = dataLongest[k] * width;
        })
        
        return dataLength;
    
}