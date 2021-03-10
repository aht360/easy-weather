import React, { createContext, useCallback, useContext, useState } from 'react';

interface User {
    id: string;
    name: string;
    email: string;
    avatar_url: string;
    givenName: string;
    familyName: string;
}

interface AuthState {
    token: string;
    user: User;
}
  

interface AuthContextData {
    user: User;
    signIn(token: string, user: User): void;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {

    const [ data, setData ] = useState<AuthState>(() => {
        const token = localStorage.getItem('@easy-weather:token');
        const user = localStorage.getItem('@easy-weather:user');
        
        

        if(token && user){
            return { token, user: JSON.parse(user) }
        }

        return {} as AuthState;
    });

    const signIn = useCallback( ( token, user ) => {
        localStorage.setItem('@easy-weather:token', token);
        localStorage.setItem('@easy-weather:user', JSON.stringify(user));

        setData({ token, user });
    }, []);

    const signOut = useCallback(() => {

        localStorage.removeItem('@easy-weather:token');
        localStorage.removeItem('@easy-weather:user');

        setData({} as AuthState);
    }, []);

    return(
        <AuthContext.Provider
            value={{ user: data.user, signIn, signOut }}
        >
            {children}
        </AuthContext.Provider>
    );

}

function useAuth(): AuthContextData {
    const context = useContext(AuthContext);
    return context;
}

export { AuthProvider, useAuth };