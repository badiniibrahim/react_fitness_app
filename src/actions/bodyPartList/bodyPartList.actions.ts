import {createAsyncThunk} from '@reduxjs/toolkit';
import apiResquest from '../../services/api_service';

const getBodyPartList = createAsyncThunk(
    // action type string
    '/bodyPartList',
    // callback function
    async () => {
        return apiResquest<string[]>({
            path: '/bodyPartList',
            method: 'get',
        });
    },
);

export {getBodyPartList}