import React from 'react';
import './App.module.scss';
import styles from './App.module.scss'
import Header from "./components/header/Header";
import Home from "./pages/Home";

function App() {
    return (
        <div className={styles.content}>
            <div className={styles.wrapper}>
                <Header/>
                <Home/>
            </div>

        </div>
    )
        ;
}

export default App;
