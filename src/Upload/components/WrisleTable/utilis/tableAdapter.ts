import type { Key } from 'react-aria-components';
import {type CSVDATA} from '../../../stores/useData';
import {type WrisleTableProps }  from '../WrisleTable'

export const tableAdapter =(csvData:CSVDATA['data']):WrisleTableProps<{[key:string]:string|number|null, superID:Key}>=>{
      if(csvData.length===0) return {columns:[], rows:[]};

     const keys = Object.keys(csvData[0]);
        const columns = keys.map(k=>({
            key:k,
            label:k
        }))

    return {
        columns,
        rows:csvData.map(r=>({
            ...r,
            superID:crypto.randomUUID(),
        }))
    }
}