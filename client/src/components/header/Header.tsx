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
                        <p className="text-red-400">For technology to us!</p>
                    </div>
                </div>
                <nav className='text-xl text-red-600 font-medium flex content-center items-center gap-3'>
                    <a href="#">Product</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                    <a href="#">Log In</a>
                    <a className='p-2 text-white bg-red-700 border-2 rounded-3xl' href="#">Sign Up</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;