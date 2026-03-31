import {type CSVDATA} from '../../../stores/useData';
import {type WrisleTableProps }  from '../WrisleTable'

export const tableAdapter =(csvData:CSVDATA['data']):WrisleTableProps<typeof csvData[0]>=>{
      if(csvData.length===0) return {columns:[], rows:[]};

     const keys = Object.keys(csvData[0]).map(k=>k);
        const columns = keys.map(k=>({
            key:k,
            label:k
        }))

    return {
        columns,
        rows:csvData
    }
}