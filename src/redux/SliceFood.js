import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   Food: [],
   FoodFruits:[],
  
};

export const SliceFood = createSlice({
  name: 'Food',
  initialState,
  reducers: {
    fetchDataFood(state,action) {
      state.Food = action.payload
    },
    fetchDataFoodFruits(state,action) {
      state.FoodFruits = action.payload
    },

    
  
    
  },
});

// eslint-disable-next-line react-refresh/only-export-components
export const {  fetchDataFood, fetchDataFoodFruits } = SliceFood.actions;

