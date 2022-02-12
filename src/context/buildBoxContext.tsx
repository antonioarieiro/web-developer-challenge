import { createContext } from "react";

interface Publication {
    id: number;
    name: string;
    description: string;
    photo: File | undefined;
}


interface Content { 
    publications?: Publication[],
    total_publications?: number;
}

export const buildBoxContext = createContext<Content>({
    publications:[],
    total_publications: 0,
});

