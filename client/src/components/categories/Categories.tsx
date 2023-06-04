import React, {memo} from "react";
import styles from './Categories.module.scss'


const categories = ['Popular', 'Notebooks', 'Smartphones', 'Tablets', 'Accessories',]

type TypeCategoriesProps = {
    categoryId: number;
    onChangeCategory: (index: number) => void;
}

const Categories: React.FC<TypeCategoriesProps> = memo(({categoryId, onChangeCategory}) => {


        return (
            <div className={styles.categories}>
                <ul>
                    {
                        categories.map((categoryName, index) => (
                            <li
                                key={index}
                                onClick={() => onChangeCategory(index)}
                                className={categoryId === index ? styles.active : ''}
                            >
                                {categoryName}
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
);

export default Categories;