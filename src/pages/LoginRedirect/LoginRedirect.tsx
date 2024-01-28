import React, { useEffect, useContext } from "react";
import { UserContext } from "../../auth/UserContext";
import { User, UserContextType } from "../../types/UserTypes";
import { retrieveAccessToken } from '../../auth/AuthUtil';
import { jwtDecode } from 'jwt-decode';

const LoginRedirect = () => {
    const { user, updateUser } = useContext(UserContext) as UserContextType;


    useEffect(() => {
        const token = retrieveAccessToken(window.location.hash);
        const tokenDecoded : User = jwtDecode<User>(token);
        updateUser(tokenDecoded);
        console.log(tokenDecoded);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
 
    return ( 
    <div>
        My Home Page
    </div>
    )
};

export default LoginRedirect;