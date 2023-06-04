import React from 'react';
import styles from "./Header.module.scss";
import icon_head from '../../assets/technology_icon.svg'
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {isAuthSelector, setAuth} from '../../redux/slices/userSlice';

const Header: React.FC = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(isAuthSelector)
    return (
        <div className={styles.header}>
            <div className={styles.header__container}>
                <div className={styles.header__logo}>
                    <img className='w-12 h-12' src={icon_head} alt="logo" />
                    <div>
                        <Link to={'/'}>
                            <h1 className='text-2xl text-red-600 font-bold'>Tech shop</h1>
                        </Link>
                        <p className="text-red-400">For technology to us!</p>
                    </div>
                </div>
                {isAuth ?
                    <nav className='text-xl text-red-600 font-medium flex content-center items-center gap-3'>
                        <button>Admin panel</button>
                        <button className='p-2 text-white bg-red-700 border-2 rounded-3xl'>Out</button>
                    </nav>
                    :
                    <nav className='text-xl text-red-600 font-medium flex content-center items-center gap-3'>
                        <button onClick={() => dispatch(setAuth(true))} className='p-2 text-white bg-red-700 border-2 rounded-3xl'>Sign Up</button>
                    </nav>}
            </div>
        </div>
    );
};

export default Header;