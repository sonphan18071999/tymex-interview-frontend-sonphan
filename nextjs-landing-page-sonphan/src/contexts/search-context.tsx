"use client"
import {createContext, useContext, useState, ReactNode} from "react";
import {FilterFormFields} from "@/models/filter-form";

interface SearchContextType {
    filters: FilterFormFields;
    setFilters: (filters: FilterFormFields) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({children}: { children: ReactNode }) => {
    const [filters, setFilters] = useState<FilterFormFields>({});
    
    return (
        <SearchContext.Provider value={{filters, setFilters}}>
            {children}
        </SearchContext.Provider>
    );
};

export const useSearch = (): SearchContextType => {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error("useSearch must be used within a SearchProvider");
    }
    return context;
};
