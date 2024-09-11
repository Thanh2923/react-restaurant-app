import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong,faBroom } from '@fortawesome/free-solid-svg-icons';
import imgCart from '../assets/imgCart.svg'

const CartContainer = () => {
  return (
    <div className="fixed top-0 py-5 px-5 right-0 w-[27%] shadow-lg rounded-sm z-20 h-screen bg-white ">
      <div className="w-full mb-10  flex justify-between items-center">
       
        <FontAwesomeIcon icon={faLeftLong} className='font-bold text-xl' />
       
        <p className='text-2xl font-semibold text-textColor'>Cart</p>
        <div className='flex justify-center items-center bg-slate-100 py-1 px-2  gap-2 rounded-md '>
                <p className='text-base '>Clear</p>
                <FontAwesomeIcon icon={faBroom} />
        </div>
      </div>
      <div className='w-full  py-5'>
           <div className='flex flex-col mt-10 justify-center items-center'>
            <img src={imgCart} alt="imgCart" />
           </div>
           <p className='text-textColor font-semibold flex justify-center items-center py-5 text-xl'>Add some items to your cart</p>
      </div>
    </div>
  )
}

export default CartContainer
