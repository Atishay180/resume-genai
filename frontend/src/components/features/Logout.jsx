import { Button } from '@/components/ui/button'
import { useAuth } from '@/src/hooks/useAuth';
import React from 'react'

const Logout = ({ props }) => {
    const { logout } = useAuth();

    const handleLogout = async () => {
        try {
            await logout();
            console.log('Logged out successfully');
        } catch (error) {
            // In a real app, you'd want to show this error in the UI instead of an alert
            alert(error.response?.data?.message || 'Logout failed');
        }
    };
    return (
        <Button onClick={handleLogout} className={`${props.className}`}>
            Logout
        </Button>
    )
}

export default Logout
