import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t bg-background">
            <div className="container mx-auto max-w-7xl px-4 py-5">
                <p className="text-center text-sm text-muted-foreground">
                    © {currentYear}{" "}
                    <span className="font-medium text-primary">
                        Atishay Jain
                    </span>
                    . All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;