import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();

const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const getResults = async (type) => {
        setIsLoading(true);

        const response = await fetch(`${baseUrl}${type}`, {
            method: "GET",
            headers: {
                "x-user-agent": "desktop",
                // 'x-proxy-location': 'EU',
                "x-rapidapi-key": process.env.REACT_APP_API_KEY,
                "x-rapidapi-host": "google-search3.p.rapidapi.com",
            },
        });

        const data = await response.json();

        console.log(data);

        if (type.includes("/news")) {
            setResults(data.entries);
        } else if (type.includes("/image")) {
            setResults(data.image_results);
        } else {
            setResults(data.results);
        }
        setIsLoading(false);
    };

    return (
        <ResultContext.Provider
            value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}
        >
            {children}
        </ResultContext.Provider>
    );
};

export const useResultContext = () => useContext(ResultContext);
