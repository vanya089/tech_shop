import React from 'react';
import './App.module.scss';
import styles from './App.module.scss'
import Header from "./components/header/Header";
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import Auth from "./pages/Auth";
import PrivateRoute from "./router/PrivateRoute";
import Admin from "./pages/Admin";
import Basket from "./pages/Basket";
import DevicePage from "./pages/DevicePage";
import Registration from "./pages/Registration";


const App: React.FC = () => {
    return (
        <div className={styles.content}>
            <div className={styles.wrapper}>
                <Header/>
                <Routes>
                    <Route element={<PrivateRoute/>}>
                        <Route path="/admin" element={<Admin/>}/>
                        <Route path="/basket" element={<Basket/>}/>
                        <Route path="/device/:id" element={<DevicePage/>}/>
                    </Route>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Auth/>}/>
                    <Route path="/registration" element={<Registration/>}/>
                </Routes>

            </div>

        </div>
    )
        ;
}

export default App;
