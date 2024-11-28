import AnimotionItemPro from "./AnimotionItemPro"

import ItemProduct from "./ItemProduct"
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getDataFoodFruitsByCategory } from '../redux/Food_Thunk';
import { addCart } from '../redux/SliceCart'; // Import the addCart action

const AllOurFreshItem = () => {
  const dispatch = useDispatch();
  const FoodFruits = useSelector(state => state.Food.FoodFruits);
  
  useEffect(() => {
    dispatch(getDataFoodFruitsByCategory(5)); // Fetch food items of category 5
  }, [dispatch]);

  // Function to handle adding an item to the cart
  const handleClickAddCart = (item) => {
    dispatch(addCart(item)); // Dispatch the addCart action with the item data
  }
  return (
    <AnimotionItemPro animotion={"animotion-left-to-right"} >
<div className="flex flex-wrap justify-center gap-3 items-center my-10">


     <ItemProduct data={FoodFruits} onAddProduct={handleClickAddCart}/>

    </div>

    </AnimotionItemPro>
    
  )
}

export default AllOurFreshItem
