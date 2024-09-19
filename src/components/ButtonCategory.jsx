import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlFood } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from 'react';
import { getDataCategories } from '../redux/Categories_Thunk';
import { getDataFoodByCategory } from '../redux/Food_Thunk';

const ButtonCategory = () => {
    const [activeid, setActiveId] = useState(1);
    const dispatch = useDispatch();
    const data = useSelector(state => state.Categories.Categories);

    useEffect(() => {
        dispatch(getDataCategories());
    }, [dispatch]);

    const handlClick = (id) => {
        setActiveId(id);
        dispatch(getDataFoodByCategory(id));
    };

    return (
        data.map(item => (
            <div 
                onClick={() => handlClick(item.id)} 
                key={item.id} 
                className={`flex my-5  flex-col justify-center items-center w-24 h-28 rounded-lg group
                ${activeid === item.id ? 'bg-red-600  viewButton' : 'bg-cardOverplay hover:bg-red-600 hover:text-white'} 
                cursor-pointer`}
            >
                <div 
                    className={`w-10 h-10 rounded-full flex flex-col justify-center items-center  group-hover:bg-white
                    ${activeid === item.id ? 'bg-white' : 'bg-red-600 hover:bg-white'}`}
                >
                    <FontAwesomeIcon 
                        icon={faBowlFood} 
                        className={` ${activeid === item.id ? 'text-black ' :    '  text-white group-hover:text-black'}`} 
                    />
                </div>
                <p className={`flex flex-col justify-center items-center pt-3 text-textColor  font-semibold  ${activeid === item.id ? 'text-white' : 'text-black group-hover:text-white'}`}>
                    {item.name}
                </p>
            </div>
        ))
    );
};

export default ButtonCategory;
