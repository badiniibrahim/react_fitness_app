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

const getExerciceById = createAsyncThunk(
    // action type string
    '/exercise/id',
    // callback function
    async (id:string) => {
        return apiResquest<Exercises>({
            path: `/exercise/${id}`,
            method: 'get',
        });
    },
  );

  const getEquipment = createAsyncThunk(
    // action type string
    '/equipment',
    // callback function
    async (equipment:string) => {
        return apiResquest<Exercises[]>({
            path: `/equipment/${equipment}`,
            method: 'get',
        });
    },
  );

  const getTarget = createAsyncThunk(
    // action type string
    '/target',
    // callback function
    async (target:string) => {
        return apiResquest<Exercises[]>({
            path: `/target/${target}`,
            method: 'get',
        });
    },
  );



export {getAllExercices, getAllExercicesWithBodyPart,getExerciceById, getEquipment,getTarget}