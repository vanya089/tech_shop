import React from 'react';
import './App.module.scss';
import styles from './App.module.scss'
import Header from "./components/header/Header";

function App() {
    return (
        <div className={styles.content}>
            <div>
                <Header/>
                <h1 className={styles.header}>Learning TailWind.css</h1>
                <button className={styles.button}>
                    Login
                </button>
            </div>

        </div>
    )
        ;
}

export default App;
