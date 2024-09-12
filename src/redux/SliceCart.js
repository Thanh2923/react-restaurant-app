import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    showCart: true,
};

export const SliceCart = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    setCart(state,action) {
      state.showCart = action.payload
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

export const { setCart } = SliceCart.actions;

