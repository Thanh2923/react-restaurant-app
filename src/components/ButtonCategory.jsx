import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {   faBowlFood} from '@fortawesome/free-solid-svg-icons';
import { useSelector,useDispatch } from "react-redux"
import { getDataCategories } from '../redux/Categories_Thunk';
import { useEffect } from 'react';
import { getDataFoodByCategory } from '../redux/Food_Thunk';
const ButtonCategory = () => {
       const dispatch = useDispatch()
  const data = useSelector(state=>state.Categories.Categories)

  useEffect(()=>{
      dispatch(getDataCategories())
  },[dispatch])

  const handlClick =(id)=>{
      dispatch(getDataFoodByCategory(id))
  }


  return (
    
        data.map(item=>
        (<>
        <div onClick={()=>handlClick(item.id)} key={item.id} className="flex my-5 group hover:cursor-pointer hover:bg-red-600 hover:text-white flex-col justify-center items-center w-24 h-28 bg-cardOverplay rounded-lg">
              <div className="   w-10 h-10 rounded-full bg-red-600 group-hover:bg-white flex flex-col justify-center items-center">
              <FontAwesomeIcon icon={ faBowlFood} className='text-white  group-hover:text-black '  />
              </div>
              <p className="flex flex-col justify-center items-center pt-3  text-textColor font-semibold">{item.name}</p>
       </div>
        </>)
        )
       

    
  )
}

export default ButtonCategory
