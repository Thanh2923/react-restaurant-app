import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    showCart: true,
    Cart: JSON.parse(localStorage.getItem('Cart')) || []
};

export const SliceCart = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    setCart(state,action) {
      state.showCart = action.payload
    },
    ClearCart(state) {
      state.Cart = []; 
      localStorage.setItem("Cart", JSON.stringify(state.Cart));
    },
    
    addCart(state, action) {
    
    const itemToAdd = action.payload;
      const itemIndex = state.Cart.findIndex(item => item.id === itemToAdd.id);
      state.Cart = itemIndex >= 0 
        ? state.Cart.map((item, index) =>
            index === itemIndex
              ? { ...item, quantily: item.quantily + 1, 
                tatal: item.price * (item.quantily + 1) 
              }
              : item
          )
        : [...state.Cart,
           { ...itemToAdd, quantily: 1, tatal: itemToAdd.price }];

      localStorage.setItem("Cart", JSON.stringify(state.Cart));
    },
    incrementQuantity(state, action) {
      const itemId = action.payload;
      state.Cart = state.Cart.map(item =>
        item.id === itemId
          ? { ...item, quantily: item.quantily + 1,
             tatal: item.price * (item.quantily + 1) }
          : item
      );
      localStorage.setItem("Cart", JSON.stringify(state.Cart));
    },
    decrementQuantity(state, action) {
      const itemId = action.payload;
      state.Cart = state.Cart.map(item =>
        item.id === itemId
          ? { ...item, quantily: item.quantily - 1,
             tatal: item.price * (item.quantily - 1) }
          : item
      ).filter(item => item.quantily > 0);
      localStorage.setItem("Cart", JSON.stringify(state.Cart));
    }
    
  },
});

export const { setCart,addCart,  ClearCart,incrementQuantity ,decrementQuantity} = SliceCart.actions;

