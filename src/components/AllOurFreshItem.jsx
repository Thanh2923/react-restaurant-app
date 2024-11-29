import AnimotionItemPro from "./AnimotionItemPro"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import ItemProduct from "./ItemProduct"
import { useSelector, useDispatch } from 'react-redux';
import { useEffect,useCallback,useState } from 'react';
import { getDataFoodFruitsByCategory } from '../redux/Food_Thunk';
import { addCart } from '../redux/SliceCart'; // Import the addCart action
import { throttle } from 'lodash';
const AllOurFreshItem = () => {
  const dispatch = useDispatch();
  const [animationState, setAnimationState] = useState({});
  const FoodFruits = useSelector(state => state.Food.FoodFruits);
  
  useEffect(() => {
    dispatch(getDataFoodFruitsByCategory(6)); // Fetch food items of category 5
  }, [dispatch]);

  
  const handleClickAddCart = useCallback(
      
    throttle((item) => {
      
    setAnimationState((prev) => ({
      ...prev,
      [item.id]: true,
    }));

    // Tắt hiệu ứng sau 500ms
    setTimeout(() => {
      setAnimationState((prev) => ({
        ...prev,
        [item.id]: false,
      }));
    }, 500);
      const result = dispatch(addCart(item)); 
      if (result) {
        toast.success("Thêm vào giỏ hàng thành công");
      }
    }, 2000), // Delay in milliseconds (3 seconds)
    [dispatch],

  );
  return (
    <>
    <ToastContainer
  position="top-right"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
/>

<AnimotionItemPro animotion={"animotion-left-to-right"} >
<div className="flex flex-wrap justify-center gap-3 items-center my-10">


     <ItemProduct data={FoodFruits} onAddProduct={handleClickAddCart} animationState={animationState}/>

    </div>

    </AnimotionItemPro>
    </>
    
   
    
  )
}

export default AllOurFreshItem
