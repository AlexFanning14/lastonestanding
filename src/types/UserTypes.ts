export type User = {
    username: string;
    expiry: string;
    'cognito:groups': string
}

export type UserContextType = {
    user: User | null;
    updateUser: (user: User) => void;
  };