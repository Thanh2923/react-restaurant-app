
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {   faChevronLeft,faChevronRight} from '@fortawesome/free-solid-svg-icons';
import AllOurFreshItem from './AllOurFreshItem';
const OurFresh = () => {
  return (
    <section className="w-full justify-center items-center ">
            <div className="flex justify-between py-10  items-center">
                <p className="text-textColor font-semibold text-3xl capitalize relative before:rounded-md before:absolute before:left-0 before:w-40 before:h-1 before:bg-orange-500 before:-bottom-2 ">
                    Our fresh & healthy fruits</p>
                    <div className="gap-3 flex items-center">
                      <div className="w-8 h-8 hover:bg-orange-600 hover:cursor-pointer justify-center items-center flex bg-orange-400 rounded-md">
                      <button>  <FontAwesomeIcon icon={ faChevronLeft} style={{color: "#ffffff"}} /></button>
                      </div>
                      <div className="w-8 h-8 hover:bg-orange-600 hover:cursor-pointer justify-center items-center flex bg-orange-400 rounded-md">
                     <button> <FontAwesomeIcon icon={ faChevronRight} style={{color: "#ffffff"}} /></button>

                      </div>
                    </div>
            </div>
            <AllOurFreshItem/>
    </section>
  )
}

export default OurFresh
