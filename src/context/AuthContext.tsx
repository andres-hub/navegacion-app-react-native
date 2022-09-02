import React, { createContext, useReducer } from "react";
import { autReducer } from "./autReducer";

// Definir la informacion 
export interface AuthState{
    isLoggedIn: boolean;
    userName?: string;
    favoriteIcon?: string;
}

// Estado inicial
export const authInitialState: AuthState= {
    isLoggedIn: false
}

// Definir el contexto
export interface AuthContextProps{
    authState: AuthState;
    signIn: () => void;
    changeFavoriteIcon: (iconName: string) => void;
    logout: () => void;
    changeUserName: (userName: string) => void;
}

// Crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

// Componente proveedor del estado
export const AuthProvider = ({ children }: any) => {

    const [authState, dispatch] = useReducer(autReducer, authInitialState)
    const signIn = () =>{
        dispatch({type: 'signIn'});
    }    

    const changeFavoriteIcon = (iconName: string) =>{
        dispatch({type: 'changeFavIcon', payload: iconName});
    }

    const logout = () => {
        dispatch({ type : 'logout'});
    }

    const changeUserName = (usarName: string) => {
        dispatch({type: 'changeUserName', payload: usarName })
    }
    return(
        <AuthContext.Provider
            value={{
                authState,
                signIn,
                changeFavoriteIcon,
                logout,
                changeUserName
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}