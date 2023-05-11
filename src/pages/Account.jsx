import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import UserInfo from "../components/UserInfo";
import AdminInfo from "../components/AdminInfo";

const Account = () => {
    return (
        <div>
            <Header/>
            {(localStorage.getItem("role") === "Admin")
            ?<AdminInfo/>
            :<UserInfo/>}
            <Footer/>
        </div>
    );
};

export default Account