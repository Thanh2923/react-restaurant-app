import motobyce from '../assets/motobyce.png'

const MainContent = () => {
  return (
   <main className="w-full h-full p-6 px-16 mt-20">
      <div className="w-full h-auto flex-col flex items-center justify-center">
        <section className="grid grid-cols-1 w-full md:grid-cols-2">
            <div className=" w-full gap-6 justify-center flex-col flex-1  ">
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
             
               
              
            </div>
         
        </section>

      </div>
   </main>
  )
}

export default MainContent
