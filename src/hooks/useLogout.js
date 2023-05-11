import {useContext} from "react";
import {AuthContext} from "../context";

export const useLogout = () => {
    const {setIsAuth, setIsAdmin} = useContext(AuthContext);

    return () => {
        setIsAuth(false)
        setIsAdmin(false)
        localStorage.setItem("auth", "")
        localStorage.setItem("role", "")
    }

}