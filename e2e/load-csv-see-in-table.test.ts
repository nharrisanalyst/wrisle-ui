import * as path from 'path';
import {test, expect} from '@playwright/test';
import { URLHOME } from './env'

test('a user can upload a csv file and see it in a table', async ({page})=>{
    await page.goto(URLHOME);
    const CSVNAME = 'us_cities.csv';
    const __dirname = path.resolve();
    const inputFile = path.join(__dirname,'e2e/utilis', CSVNAME);

    console.log(inputFile)
     
    //find input and upload file 
    await page.getByLabel('Upload CSV').setInputFiles(inputFile)

    //a table is shown of the csv data 
     expect(page.getByRole('table')).toBeVisible();
     //the title is also shown
     expect(page.getByText(CSVNAME)).toBeVisible();


}) 