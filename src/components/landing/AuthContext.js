import React, {createContext, useState, useContext} from "react";

// context
export const AuthContext = createContext();

// provider
export const AuthProvider = ({children}) =>
{
    const [isAuth, setIsAuth] = useState(false);

    const login = () => setIsAuth(!isAuth);
    const logout = ()=> setIsAuth(!isAuth);

    return (
        <AuthContext.Provider value={{isAuth, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};
