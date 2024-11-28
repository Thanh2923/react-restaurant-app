import logo from '../assets/logo.0f99324454e3c3ccba98.png';
import avtata from '../assets/avata.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useDispatch,useSelector } from 'react-redux';

import { setCart } from '../redux/SliceCart';
import { Link } from 'react-router-dom';
const Header = () =>  {
  const cartItems = useSelector(state => state.Cart.showCart);
  const Cart = useSelector(state => state.Cart.Cart);
  const dispatch = useDispatch()
 
    const handlCickShowCart = ()=>{
      dispatch(setCart(false))
    }


  return (
    <div className="p-6 px-16 w-full fixed flex z-10 bg-white  shadow-sm justify-between">
      <div className="flex gap-2">
        <img className="w-[2rem] motion-preset-oscillate  h-[2rem]" src={logo} alt="Logo" />
        <h3 className="text-xl motion-preset-oscillate  font-bold">City</h3>
      </div>
      <div className="flex gap-8 motion-preset-bounce animotion-top-to-bottom  items-center">
       <div className='hidden md:block'>
       <ul className=" gap-8 flex    ">
       <Link to="/react-restaurant-app/">  <li className="relative list-none text-base font-medium text-textColor hover:cursor-pointer hover:before:w-full before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-orange-500 before:transition-all before:duration-300">
            Home
          </li>
          </Link>
          <Link to="/react-restaurant-app/menu"><li className="relative list-none hover:cursor-pointer hover:before:w-full text-base font-medium text-textColor before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-orange-500 before:transition-all before:duration-300">
            Menu
          </li></Link>
          <li className="relative list-none hover:cursor-pointer hover:before:w-full text-base font-medium text-textColor before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-orange-500 before:transition-all before:duration-300">
            About Us
          </li>
          <li className="relative list-none hover:cursor-pointer hover:before:w-full text-base font-medium text-textColor before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-orange-500 before:transition-all before:duration-300">
            Service
          </li>
        </ul>
       </div>
        <div onClick={()=>handlCickShowCart()} className="cart relative hover:cursor-pointer flex justify-center">
          <FontAwesomeIcon   icon={faCartShopping} />
           <div className='absolute top-[-1rem] right-[-1rem] w-5 h-5 rounded-full flex flex-col justify-center items-center bg-red-600 ' >
           <span className='text-white text-sm font-semibold' >{Cart.length}</span>
           </div>
        </div>
        <div className="avata hover:cursor-pointer">
          <img className="w-[2.5rem] h-[2.5rem]" src={avtata} alt="Avatar" />
        </div>
      </div>
    </div>
  );
};

export default Header;
