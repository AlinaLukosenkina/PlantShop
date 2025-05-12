import { createContext } from "react";
import useFetch from "../hooks/useFetch";

const CategoriesContext = createContext();

export function CategoriesProvider ({ children }) {

    const { data: categories, loading, error } = useFetch(
        'https://gist.githubusercontent.com/AlinaLukosenkina/053cec8f2ff150b6b10be1147311df4d/raw/d8bddf8a7aa4be43e5afc27fe6c2a21daff58768/data-category.json',
        'categories',
        'fileName');
        const value = { categories, loading, error };

        // console.log(plants);

        return (
            <CategoriesContext.Provider value={value}>
                {children}
            </CategoriesContext.Provider>
        )
}

export default CategoriesContext;