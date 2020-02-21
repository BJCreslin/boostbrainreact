import React from 'react';
import classes from './NavPanel.module.css';
import NavItem from "./navitems/NavItem";
import NavPanelHeader from "./navitems/NavPanelHeader";

let NavPanel = () => {
    return (
        <div className={classes.main}>
            <NavPanelHeader/>
            <NavItem/>
            <NavItem/>
        </div>
    )
};
export default NavPanel;
