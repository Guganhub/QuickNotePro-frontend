import { useEffect } from "react";
import { useSelector } from "react-redux";
import Login from "../pages/Login";

export default function PrivateRoutes({children}){
    const {auth} = useSelector((state)=>state.userReducer)
    if(auth){
        return children
    }
    
    return <Login></Login>
}