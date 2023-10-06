import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';
import {useSelector, useDispatch} from 'react-redux';
import {AppDispatch, RootState} from '../store'
import {getAllExercices, getAllExercicesWithBodyPart} from '../actions/exercises/exercises.actions'

import ExerciseCard from './ExerciseCard';
import Loader from './Loader';

interface ExercisesProps {
    bodyPart: string;
}

const Exercises: React.FC<ExercisesProps> = ({  bodyPart }) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [exercisesPerPage] = useState<number>(6);
    const dispatch = useDispatch<AppDispatch>();
    const { exercises } = useSelector((state: RootState) => state);

    useEffect(() => {
        if(bodyPart === 'all'){
            dispatch(getAllExercices())
        }else {
          dispatch(getAllExercicesWithBodyPart(bodyPart))
        }
    },[bodyPart, dispatch])




    // Pagination
    const indexOfLastExercise: number = currentPage * exercisesPerPage;
    const indexOfFirstExercise: number = indexOfLastExercise - exercisesPerPage;
    const currentExercises: any[] = exercises.exercices.slice(
        indexOfFirstExercise,
        indexOfLastExercise,
    );

    const paginate = (event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);

        window.scrollTo({ top: 1800, behavior: 'smooth' });
    };

    if (!currentExercises.length) return <Loader />;

    return (
        <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
            <Typography
                variant="h4"
                fontWeight="bold"
                sx={{ fontSize: { lg: '44px', xs: '30px' } }}
                mb="46px"
            >
                Showing Results
            </Typography>
            <Stack
                direction="row"
                sx={{ gap: { lg: '107px', xs: '50px' } }}
                flexWrap="wrap"
                justifyContent="center"
            >
                {currentExercises.map((exercise, idx) => (
                    <ExerciseCard key={idx} exercise={exercise} />
                ))}
            </Stack>
            <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
                {exercises.exercices.length > 9 && (
                    <Pagination
                        color="standard"
                        shape="rounded"
                        defaultPage={1}
                        count={Math.ceil(
                            exercises.exercices.length / exercisesPerPage,
                        )}
                        page={currentPage}
                        onChange={paginate}
                        size="large"
                    />
                )}
            </Stack>
        </Box>
    );
};

export default Exercises;
