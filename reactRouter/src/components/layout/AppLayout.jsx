import { Outlet } from "react-router-dom";
import { Footer } from "./Footer"
import { Header } from "./Header"

const AppLayout =() =>{
    return (
    <>
    <Header />
    {/*Outlet for rendering children */}
    <Outlet />  
    <Footer />
    </>
    );
};

export default AppLayout;