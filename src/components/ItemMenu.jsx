import T1 from '../assets/t1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {    faCartShopping} from '@fortawesome/free-solid-svg-icons';

const ItemMenu = () => {
  
    
  return (
    <div className="w-[280px] hover:drop-shadow-lg rounded-lg h-[195px] bg-cardOverplay ">
    <div className="flex justify-between items-center">
      <div className='w-36 imgShowTo mx-3 drop-shadow-2xl'>
      <img src={T1} className='w-full hover-zoom' alt="t1" />
      </div>
      <div className='w-7 hover:cursor-pointer h-7 flex justify-center items-center bg-red-700 rounded-full mx-3'>
      <FontAwesomeIcon className='text-[0.75rem]' icon={faCartShopping} style={{color: "#ffffff",}} />
      </div>
    </div>
    <div className='flex w-full flex-col justify-end items-end'>
       <p className=' font-semibold text-xl px-3'>Strawberry</p>
       <p className='text-lighttextGray px-3'>120 Calories</p>
       <p className='px-3 pt-4 font-semibold text-xl'>
           <span className='text-red-600 text-base'> $</span>32
       </p>

    </div>
  </div>
  )
}

export default ItemMenu
