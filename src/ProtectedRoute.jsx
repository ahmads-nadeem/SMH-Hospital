import { Navigate, Outlet } from 'react-router-dom';
function ProtectedRoute() {
    const isAuthenticated = localStorage.getItem('userLoggedIn'); 
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
    // return <Outlet/>
}
export default ProtectedRoute;





