"use client";
import React, { createContext, useContext, useState } from "react";


// Define the context type


const initialTicketData = {
    status: false,
    timestamp: 0,
    sessionId: "",
    data: "",
};

// Create the context
const GlobalContext = createContext({
    showTickets: false,
    setShowTickets: () => { },
    ticketsData: initialTicketData,
    setTicketsData: () => { },
    isLoading: false,
    setIsLoading: () => { },
});

// Custom hook
export const useGlobalContext = () =>
    useContext(GlobalContext);

// Provider
export const GlobalContextProvider = ({
    children,
}) => {
    const [showTickets, setShowTickets] = useState(false);
    const [ticketsData, setTicketsData] =
        useState(initialTicketData);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <GlobalContext.Provider
            value={{
                showTickets,
                setShowTickets,
                ticketsData,
                setTicketsData,
                isLoading,
                setIsLoading,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};