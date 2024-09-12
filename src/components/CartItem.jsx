import C1 from '../assets/ChickenKebab.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus,faPlus } from '@fortawesome/free-solid-svg-icons';


const CartItem = () => {
  return (
    <div className="w-full flex rounded-md flex-col justify-center items-center gap-3 bg-cartItem ">
    <div className="w-full flex gap-3 py-1 px-3 items-center">
        <img src={C1} alt="c1" className='w-20 h-20 max-w-[60px]' />
        <div className='flex flex-col  '>
            <p className='text-gray-50 font-semibold text-base'>Chicken Mani</p>
            <p className='text-sm text-gray-300 font-semibold'>$35</p>
        </div>
        <div className='flex ml-auto items-center gap-5'>
            <button ><FontAwesomeIcon className='text-gray-300' icon={faMinus} /></button>
            <span className='text-gray-300 font-semibold'> 1</span>
            <button ><FontAwesomeIcon className='text-gray-300' icon={ faPlus} /></button>
        </div>
    </div>
    
    
    
</div>
  )
}

export default CartItem
