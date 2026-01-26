import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    // useEffect(() => {
    //     axios
    //     .get("http://localhost:8081/auth/me", { withCredentials: true })
    //     .then((res) => {
    //         setUser(res.data.user);
    //     })
    //     .catch(() => {
    //         setUser(null);
    //     })
    //     .finally(() => setLoading(false));
    // }, []);
    
    return (
        <AuthContext.Provider value={{ user, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);