// layouts/MainLayout.jsx

import { Outlet } from "react-router";
import Logout from "../components/features/Logout";

const MainLayout = () => {
    return (
        <div className="min-h-screen bg-background">
            <header className="border-b">
                <div className="container mx-auto flex h-10 items-center justify-end">
                    <Logout props={{ className: '' }} />
                </div>
            </header>

            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;