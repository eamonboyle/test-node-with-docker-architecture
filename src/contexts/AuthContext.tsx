import {
    createContext,
    useState,
    useContext,
    Dispatch,
    SetStateAction,
    ReactNode,
} from 'react';

// Define the shape of the context explicitly
interface AuthContextType {
    token: string;
    setToken: Dispatch<SetStateAction<string>>;
}

// Create the context with the defined type
export const AuthContext = createContext<AuthContextType>({
    token: '',
    setToken: () => {},
});

interface AuthContextProviderProps {
    children: ReactNode;
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
    const [token, setToken] = useState<string>('');
    return (
        <AuthContext.Provider value={{ token, setToken }}>
            {children}
        </AuthContext.Provider>
    );
};

// Correctly type the return value of useAuth
export const useAuth = (): [string, Dispatch<SetStateAction<string>>] => {
    const { token, setToken } = useContext(AuthContext);
    return [token, setToken];
};
