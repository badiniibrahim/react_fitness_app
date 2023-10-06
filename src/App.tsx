import React from 'react';
import './App.css';
import Box from '@mui/material/Box';
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ExerciseDetail from './pages/ExerciseDetail';


const App = () => {
  return <Box width="400px" sx={{width:{xl:'1488px'}}} m="auto">
    <Navbar />
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/exercise/:id' element={<ExerciseDetail />}/>
    </Routes>
  </Box>
}

export default App;
