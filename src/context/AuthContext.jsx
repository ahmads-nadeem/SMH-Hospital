// import { createContext, useContext, useState, useEffect } from 'react';

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         fetch(`${import.meta.env.VITE_API_BASE_URL}/islogin/pre-auth`, { credentials: 'include' })
//             .then(res => res.ok ? res.json() : null)
//             .then(data => {
//                 if (data && data.user) setUser(data.user);
//                 setLoading(false);
//             })
//             .catch(() => setLoading(false));
//     }, []);

//     return (
//         <AuthContext.Provider value={{ user, setUser, loading }}>
//             {children}
//         </AuthContext.Provider>
//     );
// }

// export const useAuth = () => useContext(AuthContext);