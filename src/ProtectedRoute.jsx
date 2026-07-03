import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute({ children }) {
    // Browser ki storage se check karo ke token majood hai ya nahi
    const isAuthenticated = localStorage.getItem('userLoggedIn'); 

    // Agar token nahi hai, to safely /login par redirect kar do
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    // Agar login hai, to use dashboard ya baki component dikhao
    return <Outlet />;
}

export default ProtectedRoute;