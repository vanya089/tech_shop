import React from 'react';
import './App.module.scss';
import styles from './App.module.scss'
import Header from "./components/header/Header";
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import Auth from "./pages/Auth";
import PrivateRoute from "./PrivateRoute";

function App() {
    return (

        <div className={styles.content}>
            <div className={styles.wrapper}>
                <Header/>
                <Routes>
                    <Route element={<PrivateRoute/>}>
                        <Route path="/" element={<Home/>}/>
                    </Route>
                    <Route path="login" element={<Auth/>}/>
                </Routes>

            </div>

        </div>
    )
        ;
}

export default App;
