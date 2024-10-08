import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getDataFoodByCategory } from '../redux/Food_Thunk';
import { addCart } from '../redux/SliceCart'; // Import the addCart action

const ItemOurFresh = () => {
  const dispatch = useDispatch();
  const Food = useSelector(state => state.Food.Food);
  useEffect(() => {
    dispatch(getDataFoodByCategory(1));
  }, [dispatch]);

   // Function to handle adding an item to the cart
   const handleClickAddCart = (item) => {
    dispatch(addCart(item)); // Dispatch the addCart action with the item data
  }

  return (
    <>
      {Food.map((item) => (
        <div key={item.id} className="w-[280px] hover:drop-shadow-lg rounded-lg h-[195px] bg-cardOverplay">
          <div className="flex justify-between items-center">
            <div className='w-36 imgShowTo mx-3 drop-shadow-2xl'>
              {/* Nối đường dẫn assets với tên ảnh */}
              <img src={item.img} className='w-full h-[110px] hover-zoom' alt={item.name} />
            </div>
            <div onClick={()=>handleClickAddCart(item)} className='w-7 hover:cursor-pointer h-7 flex justify-center items-center bg-red-700 rounded-full mx-3'>
              <FontAwesomeIcon className='text-[0.75rem]' icon={faCartShopping} style={{ color: "#ffffff" }} />
            </div>
          </div>
          <div className='flex w-full flex-col justify-end items-end'>
            <p className='font-semibold text-xl px-3'>{item.name}</p>
            <p className='text-lighttextGray px-3'>{item.calories} Calories</p>
            <p className='px-3 pt-4 font-semibold text-xl'>
              <span className='text-red-600 text-base'>$</span>{item.price}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ItemOurFresh;
