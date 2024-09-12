import React from 'react'
import { useDispatch } from 'react-redux';
import{increaseByTwoCounter} from '../redux/actions/counterActions';

function IncreaseByTwoCounter() {
  const dispatch = useDispatch();
  const handleIncreaseByTwo = () => {
    dispatch(increaseByTwoCounter());
  };

  return (
    <div>
      <button onClick={handleIncreaseByTwo}>Increase By Two Counter</button>
    </div>
  )
}

export default IncreaseByTwoCounter
