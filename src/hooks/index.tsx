import React from 'react';

import { AuthProvider } from './auth';
import { WeatherProvider } from './weather';

const AppProvider: React.FC = ({ children }) => {
    return(
        <AuthProvider>
            <WeatherProvider>
                {children}
            </WeatherProvider>
        </AuthProvider>
    );
};

export default AppProvider;