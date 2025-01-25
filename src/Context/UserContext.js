import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import usersDB from '../Mock_DataBase/Front_Database';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState(usersDB);
    const [currentUser, setCurrentUser] = useState(() => {
        const savedUser = localStorage.getItem('currentUser');
        return savedUser ? JSON.parse(savedUser) : null;
    });

    useEffect(() => {
        if (currentUser) {
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
        } else {
            localStorage.removeItem('currentUser');
        }
    }, [currentUser]);

    const login = useCallback((username, password) => {
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
            setCurrentUser(user);
            return { user, token: 'dummy-token' }; // You should implement proper token generation
        }
        return { user: null, token: null };
    }, [users]);

    const logout = useCallback(() => {
        setCurrentUser(null);
        setUsers(usersDB);
        localStorage.removeItem('currentUser');
        localStorage.removeItem('token');
    }, []);

    return (
        <UserContext.Provider value={{ users, setUsers, currentUser, setCurrentUser, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUsers = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUsers must be used within a UserProvider');
    }
    return context;
};

