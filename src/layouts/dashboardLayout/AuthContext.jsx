import React, { createContext, useContext, useState, useEffect } from 'react';

// Create AuthContext
const AuthContext = createContext();

// AuthProvider Component
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Simulate loading user (replace with actual API call)
        setTimeout(() => {
            setUser({ userId: '12345', name: 'John Doe' });
            setIsLoaded(true);
        }, 1000);
    }, []);

    const login = (userData) => {
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, isLoaded, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook to use Auth
export const useAuth = () => {
    return useContext(AuthContext);
};
