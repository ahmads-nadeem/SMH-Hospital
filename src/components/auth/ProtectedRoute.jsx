import { useEffect, useState } from 'react';
import { Navigate, Outlet, useLocation  } from 'react-router-dom';
function ProtectedRoute() {
    const [session, setSession] = useState(null)
    const location = useLocation();
    async function check() {
        const req = await fetch(`${import.meta.env.VITE_API_BASE_URL}/islogin/pre-auth`, {
            method: 'GET',
            credentials: 'include',
        });
        setSession(req.ok)
        // const result =await req.json();        
    }
    useEffect(() => {
        check()
        const interval = setInterval(() => {
            check();
        }, 60000);

        // Cleanup interval on unmount
        return () => clearInterval(interval);
    }, [location.pathname])
    if (session === null) {
        return <div>Loading...</div>;
    }
    return (session) ? <Outlet /> : <Navigate to="/login" replace />;
}
export default ProtectedRoute;





