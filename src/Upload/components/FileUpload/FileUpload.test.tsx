import { type ChangeEvent } from 'react';
import {test, vi} from 'vitest';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import FileUpload, {type FileUploadProps } from './FileUpload';


const props:FileUploadProps={
    label:'Upload a CSV Document',
}


test('this is a smoke test for the FileUpload', ()=>{
    render(<FileUpload  {...props}/>);
})


test('<FileUploader /> takes a file and uploads it', async ()=>{
    //arrange a file 
    const testFile = new File(['test, 1,2,3'], 'test.csv', {type: 'text/csv'})

    const user = userEvent.setup();
    render(<FileUpload {...props} />)
    const inputFile = screen.getByLabelText(/Upload a CSV Document/i) as HTMLInputElement;;

    //upload file 
    await user.upload(inputFile, testFile);
    
    expect(inputFile.files).toHaveLength(1)
    expect(inputFile.files?.[0]).toStrictEqual(testFile)
    expect(inputFile.files?.item(0)).toStrictEqual(testFile)
    

})