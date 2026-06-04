import { useAuth } from '@/src/hooks/useAuth';
import { Navigate, Outlet } from 'react-router';

export function ProtectedRoute() {
    const { user, isLoading } = useAuth();

    // Prevent flashes of the login screen while checking cookies on refresh
    if (isLoading) {
        return <div>Loading layout...</div>;
    }

    // If no user object exists in cache, bounce them to login
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    // If logged in, render the child component routes
    return <Outlet />;
}
