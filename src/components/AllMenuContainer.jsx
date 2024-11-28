import { Pagination } from 'antd';
import ItemProduct from './ItemProduct'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllDataFoodByCategory } from '../redux/Food_Thunk';
import { addCart } from '../redux/SliceCart'; // Import the addCart action
import AnimotionItemPro from './AnimotionItemPro';

const AllMenuContainer = () => {
    const dispatch = useDispatch();
    const Food = useSelector(state => state.Food.Food);
    const page= 1;
    const limit = 8
    useEffect(() => {
      dispatch(getAllDataFoodByCategory(page , limit)); 
    }, [dispatch]);
  
    // Function to handle adding an item to the cart
    const handleClickAddCart = (item) => {
      dispatch(addCart(item)); // Dispatch the addCart action with the item data
    }
  return (
   <>
    <div className='w-full p-6 px-16 mt-20 '>
         <p className="text-textColor font-semibold text-3xl capitalize relative before:rounded-md before:absolute before:left-0 before:w-40 before:h-1 before:bg-orange-500 before:-bottom-2 ">
         Food, fresh fruit & beverages</p>
    </div>
    <AnimotionItemPro animotion={"animotion-bottom-to-top"} >

    <div className="flex w-[95%] py-10 rounded-lg m-auto bg-purple-100 flex-wrap justify-center mb-10  gap-8 items-center mt-5">
    <ItemProduct data={Food} onAddProduct={handleClickAddCart}/>
    </div>
    </AnimotionItemPro>
 
  <Pagination  className='flex my-5 justify-center' defaultCurrent={1} total={50} />
  

   
   </>
  )
}

export default AllMenuContainer
