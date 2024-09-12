// Counter.js
import React from 'react';
import { connect } from 'react-redux';

function Counter({ counter }) {
  return (
    <div>
      <h1>{counter}</h1>
    </div>
  );
}

// Map state to props to access the counter value from the Redux store
function mapStateToProps(state) {
  return { counter: state.counterReducer };
}

export default connect(mapStateToProps)(Counter);
