"use client";
import { Companies } from '@/prisma/generated/base';
import { createContext, useContext, useState } from 'react';

const CompanyContext = createContext<{
    companyData: Companies | null;
    setCompanyData: (data: Companies | null) => void;
} | null>(null);

export const CompanyDataProvider = ({ children }: { children: React.ReactNode }) => {
    const [companyData, setCompanyDataState] = useState<Companies | null>(null);

    const setCompanyData = (data: Companies | null) => {
        console.log(data, 'data in context');
        setCompanyDataState(data);
    };

    return (
        <CompanyContext.Provider value={{ companyData, setCompanyData }}>
            {children}
        </CompanyContext.Provider>
    );
};

export const useCompany = () => {
    const context = useContext(CompanyContext);
    if (!context) {
        throw new Error('useCompany must be used within a CompanyDataProvider');
    }
    return context;
};
