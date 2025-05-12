import { createContext } from "react";
import useFetch from "../hooks/useFetch";

const PlantsContext = createContext();

export function PlantsProvider ({ children }) {

    const { data: plants, loading, error } = useFetch(
        'https://gist.githubusercontent.com/AlinaLukosenkina/376b7810284a5f440813e62ddf740c4d/raw/50c734c7081ab7a51659af23d23341e632dfc890/plant.json', 
        'plants', 
        'image');
        const value = { plants, loading, error };

        console.log(plants);

        return (
            <PlantsContext.Provider value={value}>
                {children}
            </PlantsContext.Provider>
        )
}

export default PlantsContext;
