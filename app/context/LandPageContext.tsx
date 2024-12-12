"use client";
import { createContext, useContext, useState } from 'react';

const LandPageContext = createContext<{
    landPageRowId: string | null;
    setLandPageRowId: (id: string) => void;
} | null>(null);

export const LandPageProvider = ({ children }: { children: React.ReactNode }) => {
    const [landPageRowId, setLandPageRowId] = useState<string | null>(null);

    return (
        <LandPageContext.Provider value={{ landPageRowId, setLandPageRowId }}>
            {children}
        </LandPageContext.Provider>
    );
};

export const useLandPage = () => {
    const context = useContext(LandPageContext);
    if (!context) {
        throw new Error('useLandPage must be used within a LandPageProvider');
    }
    return context;
};
