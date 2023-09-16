import React, { useEffect, useState } from "react";
import { Route, useNavigate,Navigate } from "react-router-dom";
import {getTokenInfo,hasToken} from '@/utils/storage'
import Home from "@/pages/Home";
const ProtectedRoute = (props) => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const checkUserToken = () => {
        const userToken = getTokenInfo().token;
        if (!hasToken()) {
            setIsLoggedIn(false);
            return navigate('/login');
        }
        setIsLoggedIn(true);
    }
    useEffect(() => {
            checkUserToken();
        }, [isLoggedIn]);
    return (
        <React.Fragment>
            {
                 isLoggedIn ? props.children : null
           
            }
        </React.Fragment>
    );
}
export default ProtectedRoute;

