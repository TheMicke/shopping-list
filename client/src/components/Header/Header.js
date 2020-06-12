import React from 'react';
import { Route, Switch } from 'react-router';


const Header = () => {

    return (
        <>
            <a href="/">Home</a> |
            <a href="/register"> Register</a> |
            <a href="/login"> Login</a> |
            <a href="/logout"> Log out</a> |
        </>
    )
};

export default Header;