import {createSlice} from '@reduxjs/toolkit';
import { getBodyPartList } from '../../actions/bodyPartList/bodyPartList.actions';

type BodyPartListState = Readonly<{
    loading:boolean;
    bodyPartList:string[]
    error?:any
}>

const initialState:BodyPartListState = {
    loading:false,
    bodyPartList:[],
    error:undefined
}

export const bodyPartListSlice = createSlice({
    name: 'bodyPartList',
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getBodyPartList.pending, (state) => {
            state.loading = true;
            state.bodyPartList = [];
            state.error = undefined;
        }),
            builder.addCase(getBodyPartList.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.bodyPartList = payload;
                state.error = undefined;
            }),
            builder.addCase(getBodyPartList.rejected, (state, { error }) => {
                state.loading = false;
                state.bodyPartList = [];
                state.error = error;
            });
    },
});


export const bodyPartListReducer = bodyPartListSlice.reducer