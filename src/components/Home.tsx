import React, {useState} from 'react';
import { Box, Stack, Typography} from '@mui/material';
import ExerciseDetail from './ExerciseDetail';
import Exercise from './Exercise';
import HeroBanner from './HeroBanner';

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <ExerciseDetail/>
      <Exercise />
    </Box>
  )
}

export default Home