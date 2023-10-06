import {configureStore} from '@reduxjs/toolkit';
import { exercicesReducer } from '../reducer/exercises/exercises.reducer';
import { bodyPartListReducer } from '../reducer/bodyPartList/bodyPartList.reducer';


const store = configureStore({
    reducer: {
        exercises: exercicesReducer,
        bodyPartList:bodyPartListReducer
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;