
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
const ItemProduct = ({user,data,onAddProduct,animationState}) => {
  return (
<>
  {data.map((item) => (
        <div key={item.id} className="lg:w-[280px] w[50%] my-5  hover:drop-shadow-lg rounded-lg h-[195px] bg-cardOverplay">
          <div className="flex justify-between items-center">
            <div className='w-36 imgShowTo mx-3 drop-shadow-2xl'>
              {/* Nối đường dẫn assets với tên ảnh */}
              <img src={item.img} className='w-full h-[110px] hover-zoom' alt={item.name} />
            </div>
            <div onClick={()=>onAddProduct(item,user)} className={`w-7  hover:cursor-pointer h-7 flex justify-center items-center  bg-red-700 rounded-full lg:mx-3  ${animationState[item.id] ? 'motion-preset-expand motion-duration-500' : '' } ` }>
              <FontAwesomeIcon className='text-[0.75rem]' icon={faCartShopping} style={{ color: "#ffffff" }} />
            </div>
          </div>
          <div className='flex w-full flex-col justify-end items-end'>
            <p className='font-semibold   lg:text-xl text-md px-3'>{item.name}</p>
            <p className='text-lighttextGray px-3'>{item.calories} Calories</p>
            <p className=' px-3 font-semibold lg:text-xl text-md'>
              <span className='text-red-600 text-base'>$</span>{item.price}
            </p>
          </div>
        </div>
      ))}
</>
  )
}

export default ItemProduct
