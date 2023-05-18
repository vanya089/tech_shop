import React from 'react';
import styles from "./Header.module.scss";
import icon_head from '../../assets/technology_icon.svg'

const Header: React.FC = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header__container}>
                <div className={styles.header__logo}>
                    <img className='w-12 h-12' src={icon_head} alt="logo"/>
                    <div>
                        <h1 className='text-2xl text-red-600 font-bold'>Tech shop</h1>
                        <p className="text-red-400">За техникой к нам!</p>
                    </div>
                </div>
                <nav className='text-xl text-red-600 font-medium flex gap-3'>
                    <a href="#">Product</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                    <a href="#">Log In</a>
                    <a className='' href="#">Sign Up</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;