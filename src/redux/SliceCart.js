import { createSlice } from '@reduxjs/toolkit';
import Cookies from "js-cookie";
const initialState = {
    showCart: true,
    Cart: JSON.parse(localStorage.getItem('Cart')) || []
};

export const SliceCart = createSlice({
  name: 'Cart',
  initialState,
  reducers: {

    fetchCartForUser(state) {
      const idUser = Cookies.get('user_info') ? JSON.parse(Cookies.get('user_info')).id : null;
      if (!idUser) {
        console.log('User is not logged in.');
        return;
      }

      // Lấy giỏ hàng của người dùng từ localStorage
      const cart = JSON.parse(localStorage.getItem('Cart')) || [];
      const userCart = cart.filter(item => item.userId === idUser);

      // Cập nhật giỏ hàng trong state
      state.Cart = userCart;
    },
    setCart(state,action) {
      state.showCart = action.payload
    },
    ClearCart(state) {
      state.Cart = []; 
      localStorage.setItem("Cart", JSON.stringify(state.Cart));
    },
    
    addCart(state, action) {
      const itemToAdd = action.payload;
      const idUser = Cookies.get('user_info') ? JSON.parse(Cookies.get('user_info')).id : null; // Lấy idUser từ cookie (hoặc từ state nếu bạn lưu ở đó)

      // Kiểm tra nếu không có idUser, không thể thêm sản phẩm
      if (!idUser) {
        console.log("User is not logged in.");
        return;
      }

      const itemIndex = state.Cart.findIndex(item => item.id === itemToAdd.id && item.userId === idUser);

      state.Cart = itemIndex >= 0
        ? state.Cart.map((item, index) =>
            index === itemIndex
              ? { ...item, quantily: item.quantily + 1, 
                    tatal: item.price * (item.quantily + 1) }
              : item
          )
        : [
            ...state.Cart,
            { ...itemToAdd, quantily: 1, tatal: itemToAdd.price, userId: idUser }  // Thêm userId vào mỗi sản phẩm
          ];

      localStorage.setItem("Cart", JSON.stringify(state.Cart));  // Lưu lại giỏ hàng vào localStorage
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

export const { setCart,addCart,  fetchCartForUser, ClearCart,incrementQuantity ,decrementQuantity} = SliceCart.actions;

