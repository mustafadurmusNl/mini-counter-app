import React from 'react'
import { useDispatch } from 'react-redux';
import{decreaseCounter} from '../redux/actions/counterActions';

function DecreaseCounter() {
  const dispatch = useDispatch();
  const handleDecrease = () => {
    dispatch(decreaseCounter());
  };  

  return (
    <div>
      <button onClick={handleDecrease}>Decrease Counter</button>
    </div>
  )
}

export default DecreaseCounter
