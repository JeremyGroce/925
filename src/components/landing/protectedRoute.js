import React, { Children } from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "./AuthContext";

const ProtectedRoute = ({children}) => 
{
    const { isAuth } = useContext(AuthContext);

    if (isAuth===false)
    {
        return <Navigate to = "/" replace/>;
    }


    return children;
};

export default ProtectedRoute;