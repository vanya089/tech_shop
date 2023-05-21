import React, {useCallback, useState} from 'react';
import Categories from "../components/categories/Categories";
import Slider from "../components/Slider";


const Home: React.FC = () => {
    const[categoryId, setCategoryId] = useState(0)

    const onChangeCategory = useCallback((id: number) => {
        setCategoryId(id)
    }, [])

    return (
        <div className=' my-10 py-10 px-[40px] h-5/6'>
            <Categories categoryId={categoryId} onChangeCategory={onChangeCategory}/>
            <Slider/>
        </div>
    );
};

export default Home;