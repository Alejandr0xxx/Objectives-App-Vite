import React, { createContext, useReducer } from "react";
import PropTypes from 'prop-types';
const AuthVerify = localStorage.getItem('Auth');

const authState = AuthVerify ? JSON.parse(AuthVerify) : {
    token: '',
    isAuth: false
};


function authReducer( state, action ) {
    switch (action.type) {
        case 'set': {
            const newState = {
                token: action.token,
                isAuth: true
            };
            localStorage.setItem('Auth', JSON.stringify(newState));
            return newState
        }
        case 'logout': {
            const newState = {
                token: '',
                isAuth: false
            };
            localStorage.setItem('Auth', JSON.stringify(newState));
            return newState
        }
        default:
            throw new Error()
    }
}

export let authContext = createContext(null);

export default function AuthMemory({ children }) {
    const [state, dispatch] = useReducer(authReducer, authState);
    return (
        <authContext.Provider value={[state, dispatch]}>
            {children}
        </authContext.Provider>
    )
}

AuthMemory.propTypes = {    
    children: PropTypes.node
}