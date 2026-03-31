import { parse } from 'papaparse';
import {type CSVDATA} from '../stores/useData';



const CSVParsed =(file:File) =>{
    return new Promise((resolve,reject)=>{
        parse(file,{
            header:true,
            skipEmptyLines:true,
            dynamicTyping:true,
            complete:(results)=>{
                resolve(results.data)
            },
            error:(error)=>{
                reject(error)
            }
        })
    })
}


export const parseCSV = async (file:File):Promise<CSVDATA>=>{
    const data = await CSVParsed(file);
    return {
        id:crypto.randomUUID(),
        title:file.name,
        data:data as {[key:string]:number|string|null}[]
    }  
}