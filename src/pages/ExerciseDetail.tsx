import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {AppDispatch, RootState} from '../store'
import {getExerciceById, getEquipment, getTarget} from '../actions/exercises/exercises.actions'

import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';
import { Box } from '@mui/material';

interface ExerciseDetailProps {
  id: string;
  name: string;
  target: string;
  equipment: string;
}

const ExerciseDetail: React.FC = () => {
  const [exerciseDetail, setExerciseDetail] = useState<ExerciseDetailProps | null>(null);
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const { exercises } = useSelector((state: RootState) => state);


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    dispatch(getExerciceById(id!))
    dispatch(getEquipment(exercises.exercice.equipment))
    dispatch(getTarget(exercises.exercice.target))

  }, [id, dispatch, exercises.exercice.equipment, exercises.exercice.target]);

  if (!exercises.exercice) return <div>No Data</div>;

  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
      <Detail exerciseDetail={exercises.exercice} />
     {/* <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />*/}
      <SimilarExercises targetMuscleExercises={exercises.target} equipmentExercises={exercises.equipment} />
    </Box>
  );
};

export default ExerciseDetail;


