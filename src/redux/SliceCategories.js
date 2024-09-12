import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    Categories: [],
};

export const SliceCategories = createSlice({
  name: 'Categories',
  initialState,
  reducers: {
    fetchDataCate(state, action) {
      state.Categories = action.payload;
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

export const { fetchDataCate } = SliceCategories.actions;

