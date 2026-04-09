import { create } from 'zustand'
import { combine } from 'zustand/middleware'

export type CSVDATA = {
    id:string;
    title:string;
    data:{[key:string]:number|string|null}[];
}

type CSVDATAStore = {
    [key:CSVDATA['id']]:CSVDATA;
}

const initStore:{dataSets:CSVDATAStore}={dataSets:{}};


export const useData =create(combine(initStore,(set)=>({
    addDataSet:(dataSet:CSVDATA)=> 
        set((state)=>
            ({dataSets:
                {...state.dataSets, 
                    [dataSet['id']]:dataSet
                }}))
        })))