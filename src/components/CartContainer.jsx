import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong,faBroom } from '@fortawesome/free-solid-svg-icons';
import imgCart from '../assets/imgCart.svg'
import CartItemContainer from './CartItemContainer';
import TatalCart from './TatalCart';
import { useSelector,useDispatch } from 'react-redux';
import { setCart, ClearCart, decrementQuantity, fetchCartForUser } from '../redux/SliceCart';
import { useEffect, useState } from 'react';
import ConfirmDeleteModal from './ConfirmDeleteModal';
import GetUser from '../auth/GetUser';
const CartContainer = () => {
  const  [user,setUser] = useState(0);
  const cartItems = useSelector(state => state.Cart.showCart); 
  const Cart = useSelector(state => state.Cart.Cart); 
  const id = user ? user.id : null;
  const CartByIdUser = Cart.filter(item=>item.userId === id) 
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [idCartItem,setIdCartItem] = useState(null);
  const dispatch = useDispatch()
 
  const handlCickShowCart = ()=>{
    dispatch(setCart(true))
  }

  const handleIsOpenCart = () => {
    setIsModalOpen(true)

  };
  const handleClearCart = (idCartItem) => {
   if(idCartItem){
   dispatch(decrementQuantity(idCartItem))
   setIsModalOpen(false)
   setIdCartItem(null)
   }else{
    dispatch(ClearCart())
    setIsModalOpen(false);
   }
  };

  useEffect(()=>{
    dispatch(fetchCartForUser())
  },[dispatch])


   useEffect(()=>{
    setUser(GetUser())
  },[])
  return (

    <>
    { cartItems ? "" :   <div className="fixed top-0 py-5 px-5 right-0 lg:w-[27%] w-[50%] shadow-lg rounded-sm z-20 h-screen bg-white slide-in slide-out ">
  <div className="w-full mb-10  flex justify-between items-center">

   <button type='button'  onClick={()=>handlCickShowCart()}><FontAwesomeIcon icon={faLeftLong} className='font-bold text-xl' /> </button>  
   
    <p className='text-2xl font-semibold text-textColor'>Cart</p>
    <div onClick={()=>handleIsOpenCart()} className='cursor-pointer flex justify-center items-center bg-slate-100 py-1 px-2  gap-2 rounded-md '>
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
  
   { user && CartByIdUser.length >0 ? <>
    <CartItemContainer  setIsModalOpen={setIsModalOpen} setIdCartItem={setIdCartItem}/>
  <TatalCart/></>
 : ""
}
</div>}
 <div className='w-full'>
 <ConfirmDeleteModal
  id={idCartItem}
    isOpen={isModalOpen}
    setIsModalOpen={setIsModalOpen}
    handleClearCart={handleClearCart}
  />
 </div>
    </>
 


   
  )
}

export default CartContainer
