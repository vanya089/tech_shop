import React from 'react';
import styles from "./Header.module.scss"

const Header: React.FC = () => {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <div className="logo">
                    <img src="" alt="logo"/>
                </div>
                <nav>
                    <a href="#">Product</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                    <a href="#">Log In</a>
                    <a href="#">Sign Up</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;