import {BrowserRouter, Route, Routes} from "react-router-dom";
import {publicRoutes, authorizedRoutes, adminRoutes} from "../router/router.js";
import {AuthContext} from "../context";

import Home from "../pages/Home";
import {useEffect, useState} from "react";


const AppRouter = () => {
    const [isAuth, setIsAuth] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [forgetEmail, setForgetEmail] = useState("");
    const [secureString, setSecureString] = useState("");

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true)
        }
        if (localStorage.getItem('role') === "Admin") {
            setIsAdmin(true)
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isAdmin,
            setIsAdmin,
            forgetEmail,
            setForgetEmail,
            secureString,
            setSecureString
        }}>
            <BrowserRouter>
                <Routes>
                    {publicRoutes.map(route =>
                        <Route
                            element={route.element}
                            path={route.path}
                        />
                    )}
                    {isAuth && authorizedRoutes.map(route =>
                        <Route
                            element={route.element}
                            path={route.path}
                        />
                    )}

                    {isAdmin && adminRoutes.map(route =>
                        <Route
                            element={route.element}
                            path={route.path}
                        />
                    )}

                    <Route path="*" element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </AuthContext.Provider>

    );
};

export default AppRouter;