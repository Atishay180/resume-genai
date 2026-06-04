import React from 'react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/src/hooks/useAuth';

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { toast } from "sonner";

const Logout = ({ props }) => {
    const { logout } = useAuth();

    const handleLogout = async () => {
        try {
            await logout();
            toast.success('Logged out successfully', { position: "top-center" });
        } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong", { position: "top-center" });
        }
    };

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button className={props.className}>
                    Logout
                </Button>
            </AlertDialogTrigger>

            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Are you sure you want to logout?
                    </AlertDialogTitle>

                    <AlertDialogDescription>
                        You will need to login again to access your account.
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                    <AlertDialogCancel>
                        No
                    </AlertDialogCancel>

                    <AlertDialogAction
                        variant="destructive"
                        onClick={handleLogout}
                    >
                        Yes
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default Logout;