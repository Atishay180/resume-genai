import { Link, NavLink } from "react-router";
import { FileText, LayoutDashboard, Info, History } from "lucide-react";
import Logout from "./Logout";

const Navbar = () => {
    const navItems = [
        {
            label: "Home",
            path: "/",
            icon: LayoutDashboard,
        },
        {
            label: "About",
            path: "/about",
            icon: Info,
        },
        {
            label: "Previous Reports",
            path: "/reports",
            icon: History,
        },
    ];

    return (
        <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">

                {/* Logo */}
                <Link
                    to="/"
                    className="flex items-center gap-2"
                >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-primary to-primary/70 text-primary-foreground shadow-md">
                        <FileText className="h-5 w-5" />
                    </div>

                    <div>
                        <h1 className="text-lg font-bold">
                            ResumeAI
                        </h1>

                        <p className="text-xs text-muted-foreground">
                            Interview Preparation
                        </p>
                    </div>
                </Link>

                {/* Navigation */}
                <nav className="hidden items-center gap-2 md:flex">
                    {navItems.map((item) => {
                        const Icon = item.icon;

                        return (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={({ isActive }) =>
                                    `flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all
                                    ${isActive
                                        ? "bg-primary text-primary-foreground"
                                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                    }`
                                }
                            >
                                <Icon className="h-4 w-4" />
                                {item.label}
                            </NavLink>
                        );
                    })}
                </nav>

                {/* Right Actions */}
                <div className="flex items-center gap-3">
                    <Logout props={{ className: "" }} />
                </div>
            </div>
        </header>
    );
};

export default Navbar;