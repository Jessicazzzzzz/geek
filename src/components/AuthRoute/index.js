import React, { useEffect, useState } from "react";
import { Route, useNavigate,Navigate, useLocation } from "react-router-dom";
import {getTokenInfo,hasToken} from '@/utils/storage'
import Home from "@/pages/Home";
const ProtectedRoute = (props) => {
    const navigate = useNavigate();
    const location = useLocation()
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const checkUserToken = () => {
        // const userToken = getTokenInfo().token;
        if (!hasToken()) {
            setIsLoggedIn(false)
            location.state = {from:location.pathname}
            console.log('auth',location)
            return navigate('/login',{replace:true})
        }
        setIsLoggedIn(true)
    }
    useEffect(() => {
            checkUserToken()
        }, [isLoggedIn])
    return (
        <React.Fragment>
            {
                 isLoggedIn ? props.children : null
           

            }
        </React.Fragment>
    );
}
export default ProtectedRoute;

