import React from "react";
import Header from "../component/header";
import Footer from "../component/footer";
import { Outlet } from "react-router";





const Website: React.FC = () => {
    return (
    <div className="page-holder">
                <Header/>

                    <Outlet />
                <Footer />
    </div>
    )
}
export default Website