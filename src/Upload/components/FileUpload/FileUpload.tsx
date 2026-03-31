import type { ChangeEvent } from "react";
import {useData} from '../../stores/useData';
import { Form, Input, Label} from "react-aria-components";
import styles from './FileUploaded.module.scss';
import { parseCSV } from "../../utilis/parseCSV";



export interface FileUploadProps {
    label:string;
}


const FileUpload =({label}:FileUploadProps)=>{
    const addDataSet = useData((state)=> state.addDataSet)


    const onUpload = (e:ChangeEvent<HTMLInputElement>)=>{
       
        const parse = async (file:File) => {
            //parses file async
            const uploaded = await parseCSV(file);
            console.log(uploaded)
            addDataSet(uploaded)
       }
        //gets file and parses and loads into state
        const files = e.target.files 
        if(files?.length){
            try{
            const file = files[0];
            parse(file);
            }catch(err){
                console.error(err)
            }

        }else{
            console.error('no files uploaded')
        }
    }
 
 return(
    <Form className={styles.formUpload}>
        <Label htmlFor="fileUpload" >{label}</Label>
        <Input id='fileUpload' type="file"  accept=".csv, text/csv" onChange={onUpload}  />
    </Form>
  )
}

export default FileUpload;