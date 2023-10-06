import {createSlice} from '@reduxjs/toolkit';
import {Exercises} from 'Models';
import { getAllExercices, getExerciceById,getEquipment, getTarget } from '../../actions/exercises/exercises.actions';

type ExercicesState = Readonly<{
    loading:boolean;
    exercices:Exercises[]
    error?:any
    exercice:Exercises
    equipment:Exercises[]
    target:Exercises[]
}>

const initialState:ExercicesState = {
    loading:false,
    exercices:[],
    error:undefined,
    exercice:{
        bodyPart: "",
        equipment: "",
        gifUrl:"",
        id:"",
        name:"",
        target:"",
        secondaryMuscles:[],
        instructions:[],
    },
    equipment:[],
    target:[]
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
        //detail
        builder.addCase(getExerciceById.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        }),

        builder.addCase(getExerciceById.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.exercice = payload;
                state.error = undefined;
        }),
        builder.addCase(getExerciceById.rejected, (state, { error }) => {
                state.loading = false;
                state.error = error;
        })

         //equipment
         builder.addCase(getEquipment.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        }),

        builder.addCase(getEquipment.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.equipment = payload;
                state.error = undefined;
        }),
        builder.addCase(getEquipment.rejected, (state, { error }) => {
                state.loading = false;
                state.error = error;
        })
        //target
        builder.addCase(getTarget.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        }),

        builder.addCase(getTarget.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.target = payload;
                state.error = undefined;
        }),
        builder.addCase(getTarget.rejected, (state, { error }) => {
                state.loading = false;
                state.error = error;
        })

    },
});


export const exercicesReducer = exercicesSlice.reducer