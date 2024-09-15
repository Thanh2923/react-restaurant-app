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
  
    // addUsers(state, action) {
    //   state.Users = [...state.Users, action.payload];
    // },
    // editUsers(state, action) {
    //   const index = state.Users.findIndex(users => users.id === action.payload.id);
    //     index ? state.Users[index] = action.payload : state.Users
      
    // },
    // deleteUsers(state, action) {
    //   state.Users = state.Users.filter(users => users.id !== action.payload);
    // },
    
  },
});

// eslint-disable-next-line react-refresh/only-export-components
export const {  fetchDataFood, fetchDataFoodFruits } = SliceFood.actions;

