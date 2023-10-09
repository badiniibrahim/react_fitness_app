import React from 'react';
import { Typography, Box, Stack } from '@mui/material';

import Loader from './Loader';
import HorizontalScrollbar from './HorizontalScrollbar';

interface SimilarExercisesProps {
  targetMuscleExercises: any[];
  equipmentExercises: any[];
}

const SimilarExercises: React.FC<SimilarExercisesProps> = ({ targetMuscleExercises, equipmentExercises }) => (
  <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
    <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }}  fontWeight={700} color="#f0c300" mb="33px">
      Similar <span style={{ color: '#f0c300', textTransform: 'capitalize' }}>Target Muscle</span> exercises
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {targetMuscleExercises.length !== 0 ? <HorizontalScrollbar data={targetMuscleExercises} setBodyPart={function (item: string): void {
                throw new Error('Function not implemented.');
            } } bodyPart={''} /> : <Loader />}
    </Stack>
    <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="#f0c300" mb="33px">
      Similar <span style={{ color: '#f0c300', textTransform: 'capitalize' }}>Equipment</span> exercises
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {equipmentExercises.length !== 0 ? <HorizontalScrollbar data={equipmentExercises} setBodyPart={function (item: string): void {
                throw new Error('Function not implemented.');
            } } bodyPart={''} /> : <Loader />}
    </Stack>
  </Box>
);

export default SimilarExercises;
