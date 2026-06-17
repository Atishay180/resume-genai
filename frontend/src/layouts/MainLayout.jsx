// layouts/MainLayout.jsx

import { Outlet } from "react-router";
import Navbar from "../components/features/Navbar";

const MainLayout = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <main className="container mx-auto lg:px-4 lg:py-4 px-2 py-2">
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;