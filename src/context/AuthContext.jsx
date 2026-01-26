import {
    createContext,
    useContext,
    useEffect,
    useState
} from "react";
import axios from "axios";

axios.defaults.withCredentials = true;

// Create context
const AuthContext = createContext(null);

// Provider component
export const AuthProvider = ({
    children
}) => {
    const [auth, setAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("http://localhost:8081/auth/me")
            .then((res) => {
                console.log("auth success:", res.data);
                setAuth(true);
            })
            .catch(() => {
                console.log("auth failed");
                setAuth(false);
            })
            .finally(() => setLoading(false));
    }, []);

    return ( 
        <AuthContext.Provider value = {{auth,setAuth,loading}} > 
            {children} 
        </AuthContext.Provider>
    );
};

// // Custom hook 
// export const useAuth = () => {
//     return useContext(AuthContext);
// };

export default AuthContext;