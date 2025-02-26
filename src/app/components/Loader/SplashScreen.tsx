"use client";

import { useState, useEffect } from "react";
import LogoCard from "./Loader"; // Import the LogoCard component

const SplashScreen = ({ children }: { children: React.ReactNode }) => {
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 1000); // Show the splash screen for 1 second

        return () => clearTimeout(timer);
    }, []);

    return showSplash ? <LogoCard /> : children;
};

export default SplashScreen;
