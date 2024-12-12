"use client";
import { Products } from "@/prisma/generated/base";
import { createContext, useContext, useState } from "react";

const ProductsContext = createContext<{
    products: Products[]; // All products
    filteredProducts: Products[]; // Filtered products
    setProducts: (products: Products[]) => void;
} | null>(null);

export const ProductsProvider = ({ children }: { children: React.ReactNode }) => {
    const [products, setProducts] = useState<Products[]>([]);
    // ProductIds to display
    //
    const productIdsToDisplay = [
        '00868615-E3A4-41EE-94E3-759BC1367891',
        '1024D7C8-F1CF-43ED-94AC-D10BC3DAA1CF',
        '765F8702-6492-41DA-9B16-C373413AABF6'
    ];

    // Filter the products based on the ProductId
    //
    const filteredProducts = productIdsToDisplay.length
        ? products.filter((product) => productIdsToDisplay.includes(product.ProductsId))
        : products;

    return (
        <ProductsContext.Provider
            value={{
                products,
                filteredProducts,
                setProducts,
            }}
        >
            {children}
        </ProductsContext.Provider>
    );
};

export const useProducts = () => {
    const context = useContext(ProductsContext);
    if (!context) {
        throw new Error("useProducts must be used within a ProductsProvider");
    }
    return context;
};
