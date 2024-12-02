import logo from '../assets/logo.0f99324454e3c3ccba98.png';
import Cookies from 'js-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useDispatch,useSelector } from 'react-redux';
import { useState,useEffect } from 'react';
import { fetchCartForUser, setCart } from '../redux/SliceCart';
import { Link } from 'react-router-dom';
import GoogleLoginButton from './GoogleLogin';
import { TbMenu2 } from "react-icons/tb";
import Avatar2 from '../assets/avata2.jpg'
const Header = () =>  {
  const [user, setUser] = useState(null);
  const [isMenu,setIsMenu]= useState(false);
  const Cart = useSelector(state => state.Cart.Cart);
  const dispatch = useDispatch()
 
    const handlCickShowCart = ()=>{
      dispatch(setCart(false))
    }

    const handleSetIsMenu = ()=>{
      if(isMenu === false){
        setIsMenu(true)
      }else{
        setIsMenu(false)
      }
    }
    const handleLogout = () => {
      // Xóa token và thông tin người dùng từ cookie
      Cookies.remove('google_access_token');
      Cookies.remove('user_info');
      setUser(null); 
      window.location.reload()
    };

    useEffect(() => {
      // Lấy thông tin người dùng từ cookie
      const userInfo = Cookies.get('user_info');
      if (userInfo) {
        setUser(JSON.parse(userInfo));  // Chuyển đổi chuỗi JSON thành đối tượng
      }
    }, []);

    
  useEffect(()=>{
    dispatch(fetchCartForUser())
  },[dispatch])
  


  return (
    
    <div className="p-6 lg:px-16 px-4 w-full fixed flex z-10 bg-white  shadow-sm justify-between">
       
      <div className="flex gap-2">
        <img className="w-[2rem] motion-preset-oscillate  h-[2rem]" src={logo} alt="Logo" />
        <h3 className="text-xl motion-preset-oscillate  font-bold">City</h3>
      </div>
      <div className="flex gap-8 motion-preset-bounce animotion-top-to-bottom  items-center">
       <div className='hidden lg:block'>
       <ul className=" gap-8 flex    ">
       <Link to="/">  <li className="relative list-none py-2 text-base font-medium text-textColor hover:cursor-pointer hover:before:w-full before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-orange-500 before:transition-all before:duration-300">
            Home
          </li>
          </Link>
          <Link to="/menu"><li className="relative list-none py-2 hover:cursor-pointer hover:before:w-full text-base font-medium text-textColor before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-orange-500 before:transition-all before:duration-300">
            Menu
          </li></Link>
          <li className="relative list-none py-2 hover:cursor-pointer hover:before:w-full text-base font-medium text-textColor before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-orange-500 before:transition-all before:duration-300">
            About Us
          </li>
          <li className="relative list-none py-2 hover:cursor-pointer hover:before:w-full text-base font-medium text-textColor before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-orange-500 before:transition-all before:duration-300">
            Service
          </li>
        </ul>
       </div>
       {isMenu }
       <div  className='lg:hidden  z-30 relative block'>
       <TbMenu2 onClick={()=>handleSetIsMenu()} className='text-[25px] cursor-pointer ' />
       {isMenu && <div className=' absolute w-[130px] bg-purple-100 top-8 left-0 '>
       <ul className=" py-5 px-5  ">
       <Link to="/">  <li className="relative list-none py-2 text-base font-medium text-textColor hover:cursor-pointer hover:before:w-full before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-orange-500 before:transition-all before:duration-300">
            Home
          </li>
          </Link>
          <Link to="/menu"><li className="relative list-none py-2 hover:cursor-pointer hover:before:w-full text-base font-medium text-textColor before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-orange-500 before:transition-all before:duration-300">
            Menu
          </li></Link>
          <li className="relative list-none py-2 hover:cursor-pointer hover:before:w-full text-base font-medium text-textColor before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-orange-500 before:transition-all before:duration-300">
            About Us
          </li>
          <li className="relative list-none py-2 hover:cursor-pointer hover:before:w-full text-base font-medium text-textColor before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-orange-500 before:transition-all before:duration-300">
            Service
          </li>
        </ul>
       </div>}
       </div>
    
        <div onClick={()=>handlCickShowCart()} className="cart relative hover:cursor-pointer flex justify-center">
          <FontAwesomeIcon   icon={faCartShopping} />
           <div className='absolute top-[-1rem] right-[-1rem] w-5 h-5 rounded-full flex flex-col justify-center items-center bg-red-600 ' >
           <span className='text-white text-sm font-semibold' >{user ===null ? "0" : Cart.length}</span>
           </div>
        </div>
        <div className="avata flex relative group  items-center hover:cursor-pointer">
          {user !== null ? <>
            <img src={Avatar2 } className='w-15  h-10 rounded-full' alt="" />  
            <span className='w-15'> {user.name}</span>
            <div className="logout-text absolute top-10 mt-2 left-0 bg-white text-black px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button onClick={handleLogout}>Đăng xuất</button>
          </div>
          </>
          : <GoogleLoginButton/>
          
          
         
          }
          
        </div>
      </div>
    </div>
  );
};

export default Header;
