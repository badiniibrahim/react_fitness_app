import {createAsyncThunk} from '@reduxjs/toolkit';
import apiResquest from '../../services/api_service';
import { Exercises } from 'Models';

const getAllExercices = createAsyncThunk(
    // action type string
    '/exercises',
    // callback function
    async () => {
        return apiResquest<Exercises[]>({
            path: '',
            method: 'get',
        });
    },
);

const getAllExercicesWithBodyPart = createAsyncThunk(
  // action type string
  '/bodyPart',
  // callback function
  async (bodyPart:string) => {
      return apiResquest<Exercises[]>({
          path: `${'/bodyPart/'}${bodyPart}`,
          method: 'get',
      });
  },
);

export {getAllExercices, getAllExercicesWithBodyPart}