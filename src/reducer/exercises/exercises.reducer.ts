import {createSlice} from '@reduxjs/toolkit';
import {Exercises} from 'Models';
import { getAllExercices, getAllExercicesWithBodyPart } from '../../actions/exercises/exercises.actions';

type ExercicesState = Readonly<{
    loading:boolean;
    exercices:Exercises[]
    error?:any
}>

const initialState:ExercicesState = {
    loading:false,
    exercices:[],
    error:undefined
}

export const exercicesSlice = createSlice({
    name: 'exercices',
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getAllExercices.pending, (state) => {
            state.loading = true;
            state.exercices = [];
            state.error = undefined;
        }),

        builder.addCase(getAllExercices.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.exercices = payload;
                state.error = undefined;
        }),
        builder.addCase(getAllExercices.rejected, (state, { error }) => {
                state.loading = false;
                state.exercices = [];
                state.error = error;
        })
            //getAllExercicesWithBodyPart
        builder.addCase(getAllExercicesWithBodyPart.pending, (state) => {
                state.loading = true;
                state.exercices = [];
                state.error = undefined;
        }),
        builder.addCase(getAllExercicesWithBodyPart.fulfilled, (state, { payload }) => {
                    state.loading = false;
                    state.exercices = payload;
                    state.error = undefined;
        }),
        builder.addCase(getAllExercicesWithBodyPart.rejected, (state, { error }) => {
                    state.loading = false;
                    state.exercices = [];
                    state.error = error;
        });
    },
});


export const exercicesReducer = exercicesSlice.reducer