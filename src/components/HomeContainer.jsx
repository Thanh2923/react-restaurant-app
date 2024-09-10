import motobyce from '../assets/motobyce.png'
import heroBg from '../assets/heroBg.png'

import ItemProductHome from './ItemProductHome'
const HomeContainer = () => {
  return (
    <section className="grid grid-cols-1  w-full gap-6 md:grid-cols-2">
    <div className=" w-full  gap-6 justify-center flex-col flex-1  ">
       <div className="bg-orange-100 flex  justify-center gap-2 px-4 py-1  rounded-full">
           <p className="text-base text-orange-600 font-semibold">Bike Delivery</p>
           <div className="w-8 h-8 bg-white rounded-full drop-shadow-xl ">
     <img src={motobyce} alt="" />
       </div>
       </div>
       <p className='text-[5rem] font-bold text-textColor'> 
      The Fastest Delivery in
      </p>
      <p className='text-[5rem] font-bold text-orange-600'>
      Your City
      </p>
      <p className='text-base text-text-textColor'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt consectetur, odio dolor quo aspernatur eum optio, tempore, voluptate iure atque quia reprehenderit! Aliquid, necessitatibus aspernatur. Tempore sapiente error nobis illum.</p>
     
       <button type='button' className='bg-orange-500 py-2 px-4 text-base font-semibold rounded-lg mt-7 hover:drop-shadow-lg'>Order Now</button>
      
    </div>
    <div className='w-full  gap-6 justify-center flex-1 flex-col relative'>
          <img src={heroBg}  className='h-50 w-[70%] ml-auto ' alt="" />
          <div className='absolute w-full top-0 left-0 justify-center flex-wrap flex items-center gap-3  '>
            <ItemProductHome/>
            <ItemProductHome/>
            <ItemProductHome/>
            <ItemProductHome/>
            
           
            
             
             
          </div>
    </div>
 
</section>
  )
}

export default HomeContainer
