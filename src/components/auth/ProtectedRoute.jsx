import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
function ProtectedRoute() {
    const isAuthenticated = localStorage.getItem('userLoggedIn'); 
    // let isAuthenticated;
    // useEffect(() => {
    //     async () => {
    //         const req = await fetch(`${import.meta.env.VITE_API_BASE_URL}/islogin`);
    //         const res = await req.json();
    //         (res.status) ? (isAuthenticated == 'ture') : (isAuthenticated == 'ture');
    //     }
    // }, [])
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
    return <Outlet/>
}
export default ProtectedRoute;





