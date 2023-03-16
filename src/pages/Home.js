import React from 'react'
import {Box} from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';
import { useState } from 'react';

const Home = () => {
  
  const[exercises,setExercises]=useState([]);
  const[bodyPart,setBodyPart]=useState('all');
  console.log(bodyPart)
  return (
   <Box>
    
    <HeroBanner/>
    <SearchExercises
    setExercises={setExercises}
    setBodyPart={setBodyPart}
    bodyPart={bodyPart}
    />
    <Exercises
    setExercises={setExercises}
    exercises={exercises}
    bodyPart={bodyPart}
    />
   
   </Box>

  );
};

export default Home;
