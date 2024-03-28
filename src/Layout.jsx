import React from "react";
import { Outlet } from "react-router-dom";
import {Header} from './Components/Header/Header.jsx'
import {Footer} from './Components/Footer/Footer.jsx'
export const Layout = () => {
    return (
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    )
}