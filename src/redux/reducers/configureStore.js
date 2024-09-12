// configureStore.js
import { configureStore } from '@reduxjs/toolkit';
import reducers from './index'; // Import the combined reducers as "reducers"

// Configure the store using Redux Toolkit
const store = configureStore({
  reducer: reducers, // Use the imported reducers here
});

export default store;
 