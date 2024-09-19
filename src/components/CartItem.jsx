
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus,faPlus } from '@fortawesome/free-solid-svg-icons';
import { useSelector,useDispatch} from 'react-redux';
import { decrementQuantity, incrementQuantity } from '../redux/SliceCart';


const CartItem = () => {
 const dispatch = useDispatch();
  const Cart = useSelector(state => state.Cart.Cart);
   
  const handClickIncrease = (id)=>{
    dispatch(incrementQuantity(id))    
  }
  const handClickReduce = (id)=>{
    dispatch(decrementQuantity(id))    
  }

  return (
  Cart.map(item=>(
    <>
       <div className="w-full  flex rounded-md flex-col justify-center items-center gap-1 bg-cartItem ">
    <div className="w-full flex gap-1 py-1 px-3 items-center">
        <img src={item.img} alt="c1" className='w-20 h-20 max-w-[60px]' />
        <div className='flex flex-col '>
            <p className='text-gray-50 font-semibold text-base'>{item.name}</p>
            <p className='text-sm text-gray-300 font-semibold'>${item.price}</p>
        </div>
        <div className='flex ml-auto items-center gap-5'>
            <button onClick={()=> handClickReduce(item.id)}  ><FontAwesomeIcon className='text-gray-300' icon={faMinus} /></button>
            <span className='text-gray-300 font-semibold'> {item.quantily}</span>
            <button onClick={()=> handClickIncrease(item.id)} ><FontAwesomeIcon className='text-gray-300' icon={ faPlus} /></button>
        </div>
    </div>
    
    
    
</div>
    </>
  ))
  )
}

export default CartItem
