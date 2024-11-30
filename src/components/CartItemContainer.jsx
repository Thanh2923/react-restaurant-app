
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus,faPlus } from '@fortawesome/free-solid-svg-icons';
import { useSelector,useDispatch} from 'react-redux';
import { decrementQuantity, incrementQuantity } from '../redux/SliceCart';



const CartItemContainer = ({setIsModalOpen,setIdCartItem}) => {
  const dispatch = useDispatch();
  const Cart = useSelector(state => state.Cart.Cart);
   
  const handClickIncrease = (id)=>{
    dispatch(incrementQuantity(id))    
  }
  const handClickReduce = (id,quantily)=>{
    if(quantily===1){
      setIdCartItem(id)
      setIsModalOpen(true)
    }else{
      dispatch(decrementQuantity(id)) 
      
    }
     
  }
  return (
    <div className=" mb-10 absolute overflow-y-scroll scrollbar-none scrollbar-hidden  right-0 flex flex-col gap-3 bottom-0 0 w-full py-10 px-5 h-[80%] rounded-t-[2rem]  shadow-lg bg-cartBg" >
  { Cart.map(item=>(
    <>
       <div className="w-full  flex rounded-md flex-col justify-center items-center gap-1 bg-cartItem ">
    <div className="w-full flex gap-1 py-1 px-3 items-center">
        <img src={item.img} alt="c1" className='w-20 h-20 max-w-[60px]' />
        <div className='flex flex-col '>
            <p className='text-gray-50 font-semibold text-base'>{item.name}</p>
            <p className='text-sm text-gray-300 font-semibold'>${item.price}</p>
        </div>
        <div className='flex ml-auto items-center gap-5'>
            <button onClick={()=> handClickReduce(item.id,item.quantily)}  ><FontAwesomeIcon className='text-gray-300' icon={faMinus} /></button>
            <span className='text-gray-300 font-semibold'> {item.quantily}</span>
            <button onClick={()=> handClickIncrease(item.id)} ><FontAwesomeIcon className='text-gray-300' icon={ faPlus} /></button>
        </div>
    </div>
    
    
    
</div>
    </>
  ))}
    
    </div>
  )
}

export default CartItemContainer
