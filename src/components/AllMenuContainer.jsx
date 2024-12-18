import { Pagination } from 'antd';
import ItemProduct from './ItemProduct'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect,useCallback,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllDataFoodByCategory } from '../redux/Food_Thunk';
import { addCart } from '../redux/SliceCart'; 
import { throttle } from 'lodash';// Import the addCart action
import AnimotionItemPro from './AnimotionItemPro';
import GetUser from '../auth/GetUser';
const AllMenuContainer = () => {
  const navigate = useNavigate();
  const user = GetUser();
  
  const [animationState, setAnimationState] = useState({});
    const dispatch = useDispatch();
    const {dataFood,total} = useSelector(state => state.Food.Food);
    useEffect(() => {
      dispatch(getAllDataFoodByCategory({page:1,limit:8 })); 
    }, [dispatch,]);
  
    
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

    const handleUrlPage = (page, pageSize) => {
      navigate(`?page=${page}`); // Cập nhật URL
      dispatch(getAllDataFoodByCategory({ page, limit: pageSize })); // Gọi action để lấy dữ liệu
    };

  
    
  return (
   <>
    <div className='w-full p-6 lg:px-16 px-5 mt-20 '>
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
         <p className="text-textColor font-semibold text-3xl capitalize relative before:rounded-md before:absolute before:left-0 before:w-40 before:h-1 before:bg-orange-500 before:-bottom-2 ">
         Food, fresh fruit & beverages</p>
    </div>
    <AnimotionItemPro animotion={"animotion-bottom-to-top"} >

    <div className="flex lg:w-[95%] w-[98%] py-10 rounded-lg m-auto bg-purple-100 flex-wrap justify-center mb-10  gap-8 items-center mt-5">
      <ItemProduct user={user} data={Array.isArray(dataFood) ? dataFood : []} onAddProduct={handleClickAddCart} animationState={animationState}/> 
    </div>
    </AnimotionItemPro>
 
    <Pagination
  className="flex my-5 justify-center"
  onChange={handleUrlPage} // Truyền hàm handleUrlPage
  pageSize={8} // Số item trên mỗi trang
  defaultCurrent={1} // Trang mặc định
  total={total} // Tổng số item
/>

   
   </>
  )
}

export default AllMenuContainer
