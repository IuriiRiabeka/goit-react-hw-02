import { Children, useState } from 'react'
import './App.css'
import Description from './components/Description/Description';
import Options
      from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';

const DEFAULT_FEEDBACK_DATA = {
	good: 0,
	neutral: 0,
	bad: 0,
};

const App = () => {
	


  return (
    <>
              <Description></Description>
			<Options></Options>
			
      
    </>
  );
};


export default App
