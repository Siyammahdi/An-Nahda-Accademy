import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";



const Layout = () => {

    const location = useLocation();
    const isLoginOrRegister = location.pathname.includes('login') || location.pathname.includes('register')
 

    return (
        <div>
            {isLoginOrRegister || <Navbar></Navbar>}
            <Outlet></Outlet>     
            {isLoginOrRegister || <Footer></Footer> }      
        </div>
    );
};

export default Layout;