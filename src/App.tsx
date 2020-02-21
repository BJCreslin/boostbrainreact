import React from 'react';
import './App.css';
import Header from './model/header/Header'
import NavPanel from "./model/navpanel/NavPanel";
import UserContent from "./model/content/users/UsersContent";

function App() {
    return (
        <div className={"app-wrapper"}>
            <Header/>
            <NavPanel/>
            <UserContent/>
        </div>
    );
}

export default App;
