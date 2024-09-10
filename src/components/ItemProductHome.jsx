import Icecream from '../assets/Icecream.png'

const ItemProductHome = () => {
  return (
    <div className='bg-cardOverplay p-5 mt-5 flex flex-col justify-center items-center rounded-md shadow-lg '>
                    <img src={ Icecream} className='w-40 ' alt=""  />
                    <p className='text-xl text-textColor font-semibold '>Icecream</p>
                    <p className='text-lighttextGray text-base font-semibold'>Chocolate & vanilla</p>
                    <p className='text-base font-semibold'>
                      <span className='text-xs text-red-500'>$</span>
                      5.25
                    </p>
             </div>
  )
}

export default ItemProductHome
