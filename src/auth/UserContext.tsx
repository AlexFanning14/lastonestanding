import React, { useState, ReactNode, FC } from 'react';
import { User, UserContextType } from '../types/UserTypes';

export const UserContext = React.createContext<UserContextType | null>(null);

interface Props {
    children?: ReactNode
}

const UserProvider : FC<Props> = ({children}: Props) => {
    const [user, setUser] = useState<User|null>(null);

    const updateUser = (user: User) => {
        setUser(user);
    };

    return <UserContext.Provider value={{ user, updateUser }}>{children}</UserContext.Provider>;
}

export default UserProvider;