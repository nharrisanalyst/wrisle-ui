import type { Meta, StoryObj } from '@storybook/react-vite';

import FileUpload from './FileUpload';


const meta ={
    title:'Upload/components/FileUpload',
    component:FileUpload,
    parameters: {
        layout:'centered',
    },
    tags: ['autodocs'],

} satisfies Meta<typeof FileUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary:Story = {
    args:{
        label:'Upload CSV Document:'
    },
};