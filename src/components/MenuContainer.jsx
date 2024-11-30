import AnimotionItemPro from "./AnimotionItemPro"
import ButtonCategory from "./ButtonCategory"
import ItemMenu from "./ItemMenu"
import { useSelector, useDispatch } from 'react-redux';
import { useEffect,useState,useCallback } from 'react';
import { getDataFoodByCategory } from '../redux/Food_Thunk';
import { addCart } from '../redux/SliceCart'; // Import the addCart action

import { throttle } from 'lodash';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import GetUser from "../auth/GetUser";
const MenuContainer = () => {
   const user = GetUser();
   const dispatch = useDispatch();
   const dataFood = useSelector(state => state.Food.Food);
   useEffect(() => {
     dispatch(getDataFoodByCategory(1));
   }, [dispatch]);
 
  
   const Food =  Array.isArray(dataFood) ? dataFood : []
   const [animationState, setAnimationState] = useState({});
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
     <section className="w-full h-auto my-10">
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
            <div className="w-full flex flex-col justify-center items-center">
                <p className="text-3xl font-semibold flex flex-col relative before:absolute before:w-12 before:-bottom-2 before:rounded-md before:h-1 before:bg-orange-600 w-full text-textColor">Our Hot Dishes</p>
                 <AnimotionItemPro animotion={"animotion-right-to-left"}>
                 <div className="w-full  py-10 md:flex  justify-center gap-7 items-center" > 
                <ButtonCategory/>
                
                 </div>
                 </AnimotionItemPro>
                
               <AnimotionItemPro animotion={"animotion-bottom-to-top"}>
               <div className="flex flex-wrap justify-center mb-10  gap-3 items-center mt-5">
                  <ItemMenu user={user} Food={Food} handleClickAddCart={handleClickAddCart} animationState={animationState}/>
                  

                  </div>
               </AnimotionItemPro>
            </div>
     </section>
  )
}

export default MenuContainer
