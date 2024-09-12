import axios from "axios";
import { fetchDataFood } from "./SliceFood";

export function getDataFoodByCategory(idCategories) {
  return async (dispatch) => {
    try {
      // Lấy tất cả dữ liệu từ Food
      let res = await axios.get(`https://react-restaurant-app-8c39d-default-rtdb.firebaseio.com/Food.json`);
      let allFood = res.data;

      // Lọc những món ăn có idCategories bằng 1
      let filteredFood = Object.keys(allFood)
        .filter(key => allFood[key].idCategories === idCategories)
        .map(key => ({
          id: key, 
          ...allFood[key]
        }));

      // Dispatch dữ liệu đã lọc
      dispatch(fetchDataFood(filteredFood));
    } catch (error) {
      console.log(error);
    }
  };
}
