import logo from '../assets/logo.0f99324454e3c3ccba98.png';
import avtata from '../assets/avata.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className="p-6 px-16 w-full fixed flex z-10 bg-purple-50 justify-between">
      <div className="flex gap-2">
        <img className="w-[2rem] h-[2rem]" src={logo} alt="Logo" />
        <h3 className="text-xl font-bold">City</h3>
      </div>
      <div className="flex gap-8 items-center">
        <ul className="gap-8 flex">
          <li className="relative list-none text-base font-medium text-textColor hover:cursor-pointer hover:before:w-full before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-orange-500 before:transition-all before:duration-300">
            Home
          </li>
          <li className="relative list-none hover:cursor-pointer hover:before:w-full text-base font-medium text-textColor before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-orange-500 before:transition-all before:duration-300">
            Menu
          </li>
          <li className="relative list-none hover:cursor-pointer hover:before:w-full text-base font-medium text-textColor before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-orange-500 before:transition-all before:duration-300">
            About Us
          </li>
          <li className="relative list-none hover:cursor-pointer hover:before:w-full text-base font-medium text-textColor before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-orange-500 before:transition-all before:duration-300">
            Service
          </li>
        </ul>
        <div className="cart hover:cursor-pointer flex justify-center">
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
        <div className="avata hover:cursor-pointer">
          <img className="w-[2.5rem] h-[2.5rem]" src={avtata} alt="Avatar" />
        </div>
      </div>
    </div>
  );
};

export default Header;
