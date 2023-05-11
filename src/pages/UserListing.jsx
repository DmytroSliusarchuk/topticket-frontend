import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import UsersList from "../components/UsersList";


const UserListing = () => {

    return (
        <div>
            <Header/>
            <UsersList/>
            <Footer/>
        </div>
    );
};

export default UserListing