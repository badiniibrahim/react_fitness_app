import React, {useState} from 'react';
import { Box, Stack, Typography} from '@mui/material';
import ExerciseDetail from '../components/ExerciseDetail';
import Exercise from '../components/Exercise';
import HeroBanner from '../components/HeroBanner';
import SearchExercise from '../components/SearchExercise';

const Home = () => {
  const [exercise, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  return (
    <Box>
      <HeroBanner />
     { /*<SearchExercise setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>*/}
      <Exercise bodyPart={'all'} />
    </Box>
  )
}

export default Home