import axios from "axios";
import { fetchDataCate } from "./SliceCategories";


export function getDataCategories() {
    return async (dispatch) => {
      try {
        let res = await axios.get(`https://react-restaurant-app-8c39d-default-rtdb.firebaseio.com/Categories.json` );
        let categories = res.data;
        dispatch(fetchDataCate (categories));
      } catch (error) {
        console.log(error);
      }
    };
  }