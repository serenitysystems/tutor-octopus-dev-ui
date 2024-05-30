import React, { useState, useEffect } from 'react';
import { quizesData } from '../../redux/quizslice';

function QuizTime({timeRemaining,setTimeRemaining }) {
//    setTimeRemaining ((hours * 3600) + (minutes * 60));




  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prevTime => {
        if (prevTime <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    const hrs = Math.floor(time / 3600);
    const mins = Math.floor((time % 3600) / 60);
    const secs = Math.floor(time % 60);
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      {/* <h1>Countdown Timer</h1> */}
      <p>{formatTime(timeRemaining)}</p>
    </div>
  );
}

export default QuizTime;
