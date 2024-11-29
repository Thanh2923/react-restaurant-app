import axios from "axios";
import { fetchDataFood, fetchDataFoodFruits } from "./SliceFood";

export function getDataFoodByCategory(id) {
  return async (dispatch) => {
    try {
      // Lấy tất cả dữ liệu từ Food
      let res = await axios.get(`https://react-restaurant-app-8c39d-default-rtdb.firebaseio.com/Food.json`);
      let allFood = res.data;
      const Food = allFood.filter(item => item.idCategories === id);
      dispatch(fetchDataFood(Food ));
    } catch (error) {
      console.log(error);
    }
  };
}
export function getDataFoodFruitsByCategory(id) {
  return async (dispatch) => {
    try {
      // Lấy tất cả dữ liệu từ Food
      let res = await axios.get(`https://react-restaurant-app-8c39d-default-rtdb.firebaseio.com/Food.json`);
      let allFood = res.data;
      const Food = allFood.filter(item => item.idCategories === id);
      dispatch(fetchDataFoodFruits(Food ));
    } catch (error) {
      console.log(error);
    }
  };
}


  export function getAllDataFoodByCategory({page = 1, limit = 8}) {
    return async (dispatch) => {
      try {
        // Lấy tất cả dữ liệu từ Food
        let res = await axios.get(`https://react-restaurant-app-8c39d-default-rtdb.firebaseio.com/Food.json`);
        let allFood = res.data;
        const total = allFood.length;
        const startIndex =parseInt( (page - 1) * limit);
       
        const endIndex = parseInt( page * limit);
        const dataFood = allFood.slice(startIndex, endIndex);
       
        const result = {dataFood,total }
    
        dispatch(fetchDataFood(result));
      } catch (error) {
        console.log(error);
      }
    };
  }

