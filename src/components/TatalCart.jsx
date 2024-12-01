import { useSelector } from 'react-redux';
import { useEffect,useState } from 'react';
import Cookies from 'js-cookie';
import { button } from 'framer-motion/client';
import { Link } from 'react-router-dom';
import GetUser from '../auth/GetUser';
const TatalCart = () => {
  const [user, setUser] = useState(0);
  useEffect(() => {
    setUser(GetUser())
  }, []);
  const id = user ? user.id : null;
  const Cart = useSelector(state => state.Cart.Cart);
  const CartByIdUser = Cart.filter(item=>item.userId === id) 
  
const subtotal = CartByIdUser.reduce((acc, item) => acc + (item.tatal), 0);
  return (
    <div className="w-full py-5 px-5 gap-2 z-30 shadow-2xl flex flex-col  rounded-t-[2rem] items-center absolute right-0 bottom-0 h-[34%] bg-cartItem">
      <div className="flex items-center justify-between w-full">
    <p className="text-lg text-gray-400 font-semibold">Sub Total</p>
      <span className="text-gray-400 text-lg">$ {parseFloat(subtotal.toFixed(2))}</span>
      </div>
      <div className="flex items-center justify-between w-full">
    <p className="text-lg text-gray-400 font-semibold">Delivery</p>
      <span className="text-gray-400 text-lg">$ 12</span>
      </div>
      <div className="border-b my-2 w-full border-gray-400"> </div>
      <div className="flex items-center justify-between w-full">
    <p className="text-xl text-white font-bold">Total</p>
      <span className=" text-white text-xl font-bold">$ {parseFloat(subtotal.toFixed(2)) + 12}</span>
      </div>
      <div className="w-full bg-orange-500 py-2 rounded-3xl">
        <p className="text-center hover:cursor-pointer font-bold text-white text-lg">{user === null ? "Login to check out":
       <Link to="pay" ><button type='button' >Pay</button></Link>
        }</p>
      </div>
    </div>
  )
}

export default TatalCart
