import React from 'react';
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import {Login} from "./page/Login";
import {Profile} from "./page/Profile";
import {SignUp} from "./page/SignUp";
import {Error404} from "./page/Error404";
import {Test} from "./page/Test";
import {PassRecovery} from "./page/PassRecovery";
import {NewPass} from "./page/NewPass";
import {Header} from "./components/Header/Header";

function App() {
    return (
        <div className="App">
            <Header buttonName={'Sign in'}/>

            <Routes>
                <Route path='/' element={<Test/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/signup' element={<SignUp/>}/>
                <Route path='/404' element={<Error404/>}/>
                <Route path='/recovery' element={<PassRecovery/>}/>
                <Route path='/newpass' element={<NewPass/>}/>
                <Route path='*' element={<Navigate to={'/404'}/>}/>

            </Routes>

        </div>
    );
}

export default App;
