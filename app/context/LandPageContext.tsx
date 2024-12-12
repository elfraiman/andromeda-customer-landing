"use client";
import { LandPages } from "@/prisma/generated/base";
import { createContext, useContext, useState } from "react";

// Define the types for the contexts
interface LandPageContextType {
    landPageRowId: string | null;
    setLandPageRowId: (id: string) => void;
}

interface LandingPageDataContextType {
    landingPageData: LandPages | null;
    setLandingPageData: (data: LandPages) => void;
}

// Create contexts
const LandPageContext = createContext<LandPageContextType | null>(null);
const LandingPageDataContext = createContext<LandingPageDataContextType | null>(null);

// LandPageProvider
export const LandPageProvider = ({ children }: { children: React.ReactNode }) => {
    const [landPageRowId, setLandPageRowId] = useState<string | null>(null);
    const [landingPageData, setLandingPageData] = useState<LandPages | null>(null);

    return (
        <LandPageContext.Provider value={{ landPageRowId, setLandPageRowId }}>
            <LandingPageDataContext.Provider value={{ landingPageData, setLandingPageData }}>
                {children}
            </LandingPageDataContext.Provider>
        </LandPageContext.Provider>
    );
};

// Custom hooks
export const useLandPage = () => {
    const context = useContext(LandPageContext);
    if (!context) {
        throw new Error("useLandPage must be used within a LandPageProvider");
    }
    return context;
};

export const useLandingPageData = () => {
    const context = useContext(LandingPageDataContext);
    if (!context) {
        throw new Error("useLandingPageData must be used within a LandPageProvider");
    }
    return context;
};
