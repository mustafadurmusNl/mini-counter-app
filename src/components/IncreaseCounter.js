// IncreaseCounter.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseCounter } from '../redux/actions/counterActions'; // 

function IncreaseCounter() {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseCounter()); // Dispatch the correct action
  };

  return (
    <div>
      <button onClick={handleIncrease}>Increase Counter</button>
    </div>
  );
}

export default IncreaseCounter;
