import type { ChangeEvent } from "react";
import { Form, Input, Label} from "react-aria-components";
import styles from './FileUploaded.module.scss';


interface FileUploadProps {
    onUpload:(e:ChangeEvent<HTMLInputElement>)=>void;
    label:string;
}


const FileUpload =({onUpload, label }:FileUploadProps)=>(
    <Form className={styles.formUpload}>
        <Label htmlFor="fileUpload" >{label}</Label>
        <Input id='fileUpload' type="file"  accept=".csv, text/csv" onChange={onUpload}  />
    </Form>
)

export default FileUpload;