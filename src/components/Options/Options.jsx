import "./Options.module.css";
import { useState } from "react";

import Feedback
  from "../Feedback/Feedback";



const Options = () => {
  let [feedBackType, setFeedback] = useState({ good: 0, bad: 0, neutral: 0 })
  const handleClickGood = () => {
   
    setFeedback({ ...feedBackType, good: feedBackType.good + 1 })
  };
  const handleClickNeutral = () => { setFeedback({ ...feedBackType, neutral: feedBackType.neutral + 1 }) };
  const handleClickBad = () => {
   
    setFeedback({ ...feedBackType, bad: feedBackType.bad + 1 })
    
  };
    const handleClickReset = () => {
   
      setFeedback({ ...feedBackType, good: 0, bad:0, neutral:0 })
    
  };


  
  return (
    <div className="options-container">
      		
      <div className="options-buttons-board">
        <button  className="options-button" onClick={handleClickGood}>Good</button>
        <button  className="options-button" onClick={handleClickNeutral}>Neutral</button>
        <button className="options-button" onClick={handleClickBad}>Bad</button>
         <button className="options-button" onClick={handleClickReset}>Reset</button>
        
       
      
      </div>
      <Feedback feedback={feedBackType} ></Feedback>
    </div>
  );


  };


export default Options;