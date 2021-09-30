import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/AuthContext'
import { authReducer } from './auth/authReducer'
import { AppRouter } from './routers/AppRouter'


const init = () => {
    // se revisa en el local storage si existe un usuario, de lo contrario deja el logged en false 
    return JSON.parse(localStorage.getItem('user')) || { logged: false }
}

export const HeroesApp = () => {

    const [ user, dispatch ] = useReducer( authReducer, {}, init)

    useEffect(() => {
        localStorage.setItem( 'user', JSON.stringify(user) );
    }, [user] )

    return (

        <AuthContext.Provider value={{ user, dispatch }}>
            <AppRouter />
        </AuthContext.Provider>

    )
}

export default HeroesApp