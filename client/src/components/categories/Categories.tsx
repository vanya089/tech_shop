import React, {memo} from "react";
import styles from './Categories.module.scss'
const categories = ['Популярные', 'Компьютеры и ноутбуки', 'Смартфоны', 'Планшеты', 'Аксессуары',]

type CategoriesProps = {
    categoryId: number;
    onChangeCategory: (index: number) => void;
}

const Categories: React.FC<CategoriesProps> = memo(({categoryId, onChangeCategory}) => {


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