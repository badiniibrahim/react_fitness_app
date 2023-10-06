import React, {FC, useState, useEffect} from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import {useSelector, useDispatch} from 'react-redux';
import {AppDispatch, RootState} from '../store'
import {getAllExercices} from '../actions/exercises/exercises.actions'
import { getBodyPartList } from '../actions/bodyPartList/bodyPartList.actions';
import HorizontalScrollbar from './HorizontalScrollbar';

type SearchExerciseProps = {
  setExercises: (item: any) => void;
  setBodyPart: (item: any) => void;
  bodyPart:string;

}
const SearchExercise:FC<SearchExerciseProps> = ({setBodyPart,setExercises, bodyPart}) => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const {exercises,} = useSelector((state:RootState) => state)
  const {bodyPartList} = useSelector((state:RootState) => state.bodyPartList)


  useEffect(() => {
      dispatch(getBodyPartList())
  },[dispatch])




  const handleSearch = () => {
    if(search){
        dispatch(getAllExercices())
        const searchedExercises = exercises.exercices.filter(
          (item) => item.name.toLowerCase().includes(search)
                 || item.target.toLowerCase().includes(search)
                 || item.equipment.toLowerCase().includes(search)
                 || item.bodyPart.toLowerCase().includes(search),
        );
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
        setSearch('');
        setExercises(searchedExercises);
    }
  }

  return (
      <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
          <Typography
              fontWeight={700}
              sx={{ fontSize: { lg: '44px', xs: '30px' } }}
              mb="49px"
              textAlign="center"
          >
              Find the exercise
          </Typography>
          <Box position="relative" mb="72px">
              <TextField
                  sx={{
                      input: {
                          fontWeight: '700',
                          border: 'none',
                          borderRadius: '4px',
                      },
                      width: { lg: '1170px', xs: '350px' },
                      backgroundColor: '#fff',
                      borderRadius: '40px',
                  }}
                  value={search}
                  onChange={(e) => setSearch(e.target.value.toLowerCase())}
                  placeholder="Search Exercises"
                  type="text"
              />
              <Button
                  className="search-btn"
                  sx={{
                      bgcolor: '#FF2625',
                      color: '#fff',
                      textTransform: 'none',
                      width: { lg: '173px', xs: '80px' },
                      height: '56px',
                      position: 'absolute',
                      right: '0px',
                      fontSize: { lg: '20px', xs: '14px' },
                  }}
                  onClick={handleSearch}
              >
                  Search
              </Button>
          </Box>
          <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
              <HorizontalScrollbar
                  data={bodyPartList}
                  bodyParts
                  setBodyPart={setBodyPart}
                  bodyPart={bodyPart}
              />
          </Box>
      </Stack>
  );
}

export default SearchExercise