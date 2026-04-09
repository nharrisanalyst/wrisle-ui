import * as path from 'path';
import {test, expect} from '@playwright/test';
import { URLHOME } from './env'

test('a user can upload a csv file and see it in a table', async ({page})=>{
    await page.goto(URLHOME);
    const CSVNAME = 'us_cities.csv';
    const __dirname = path.resolve();
    const inputFile = path.join(__dirname,'e2e/utilis', CSVNAME);
     
    //find input and upload file 
    await page.getByLabel(/Upload a CSV/).setInputFiles(inputFile)

    //a table is shown of the csv data 
     await expect(page.getByRole('grid')).toBeVisible();
     //the title is also shown
     await expect(page.getByText(CSVNAME)).toBeVisible();


}) 