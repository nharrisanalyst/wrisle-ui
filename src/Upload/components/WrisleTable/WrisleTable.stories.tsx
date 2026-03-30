import type { Meta, StoryObj } from '@storybook/react-vite';

import FileUpload from './WrisleTable';
import type WrisleTable from './WrisleTable';


const meta ={
    title:'Upload/components/WrisleTable',
    component:FileUpload,
    parameters: {
        layout:'centered',
    },
    tags: ['autodocs'],

} satisfies Meta<typeof WrisleTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary:Story = {
    args:{
        columns:[
            {
                key:'name',
                label:'Name'
            },
            {
                key:'age',
                label:'Age'
            }
        ],
        rows:[
            {name:'Liz', age:22, id:'1'}, {name:'Sam', age:15, id:'2'}
        ]
    },
};

