import motobyce from '../assets/motobyce.png';
import heroBg from '../assets/heroBg.png';
import ItemProductHome from './ItemProductHome';
import TextCarousel from './TextCarousel';

const HomeContainer = () => {
  return (
    <section className="grid grid-cols-1 w-full gap-6 md:grid-cols-2 min-h-screen">
      
      <div className="w-full gap-6 justify-center flex-col flex-1 flex">
        <div className="bg-orange-100  bike-animotion flex w-[200px] justify-center gap-2 px-4 py-1 rounded-full">
          <p className="text-base  text-orange-600 font-semibold">Bike Delivery</p>
          <div className="w-8 h-8 bg-white rounded-full drop-shadow-xl">
            <img src={motobyce} alt="Bike" />
          </div>
        </div>
      
        <p className="text-[5rem] font-bold text-textColor">
        <TextCarousel/>
        </p>
       
        <p className="text-base animotion-left-to-right transform motion-duration-500 text-textColor">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt consectetur, odio dolor quo aspernatur eum optio, tempore, voluptate iure atque quia reprehenderit! Aliquid, necessitatibus aspernatur. Tempore sapiente error nobis illum.
        </p>
        <button
          type="button"
          className="bg-orange-500  w-[150px] py-2 px-4 text-base font-semibold rounded-lg mt-7 hover:drop-shadow-lg"
        >
          Order Now
        </button>
      </div>

      
      <div className="w-full animotion-right-to-left gap-6 justify-center flex-1 flex-col relative">
        <img src={heroBg} className="h-50 w-[70%] hidden md:block ml-auto" alt="Hero Background" />
        <div className="flex md:absolute flex-wrap w-full top-0 left-0 justify-center items-center gap-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-auto">
            <ItemProductHome />
            <ItemProductHome />
            <ItemProductHome />
            <ItemProductHome />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
