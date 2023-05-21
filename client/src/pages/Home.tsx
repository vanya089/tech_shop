import React, {useCallback, useState} from 'react';
import Categories from "../components/categories/Categories";

const Home: React.FC = () => {
    const[categoryId, setCategoryId] = useState(0)

    const onChangeCategory = useCallback((id: number) => {
        setCategoryId(id)
    }, [])

    return (
        <div className=' my-10 py-10 h-5/6'>
            <h1>Content</h1>
            <Categories categoryId={categoryId} onChangeCategory={onChangeCategory}/>
        </div>
    );
};

export default Home;