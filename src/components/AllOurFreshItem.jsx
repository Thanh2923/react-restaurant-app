import AnimotionItemPro from "./AnimotionItemPro"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import ItemProduct from "./ItemProduct"
import { useSelector, useDispatch } from 'react-redux';
import { useEffect,useCallback,useState } from 'react';
import { getDataFoodFruitsByCategory } from '../redux/Food_Thunk';
import { addCart } from '../redux/SliceCart'; // Import the addCart action
import { throttle } from 'lodash';
import GetUser from "../auth/GetUser";
const AllOurFreshItem = () => {
  const user = GetUser();
  const dispatch = useDispatch();
  const [animationState, setAnimationState] = useState({});
  const FoodFruits = useSelector(state => state.Food.FoodFruits);

  useEffect(() => {
    dispatch(getDataFoodFruitsByCategory(6)); // Fetch food items of category 5
  }, [dispatch]);

 
  const handleClickAddCart = useCallback(
      
    throttle((item,user) => {
      
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
    if(user !== null){
      dispatch(addCart(item)); 
      toast.success("Thêm vào giỏ hàng thành công");
      
    }else{
   
      toast.warning("Bạn chưa login, vui lòng ấn vào avatar để login bằng google");
    }

     
    }, 2000), // Delay in milliseconds (3 seconds)
    [dispatch],

  );
  return (
    <>
    <ToastContainer
     className="top-0 left-[35%]"
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
<div className="  grid grid-cols-2 lg:w-[95%] w-[98%] lg:grid-cols-4 lg:gap-3 justify-center gap-5 items-center my-10">
     <ItemProduct user={user} data={FoodFruits} onAddProduct={handleClickAddCart} animationState={animationState}/>

    </div>

    </AnimotionItemPro>
    </>
    
   
    
  )
}

export default AllOurFreshItem
