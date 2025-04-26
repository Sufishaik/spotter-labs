import React, { useEffect } from "react";

import {
    Card,
    CardContent,
    Typography,
    Grid,
    Box,
    Button,
} from "@mui/material";
import { useGlobalContext } from "../context/GlobalContext";

// import { useGlobalContext } from "@/context/GlobalContext";


const FlightList = () => {
    const { ticketsData } = useGlobalContext();
    useEffect(() => {
        console.log(ticketsData);
    }, [ticketsData]);

    const ticketArray =
        typeof ticketsData.data === "object" && "itineraries" in ticketsData.data
            ? ticketsData.data.itineraries
            : [];

    const numberOfTickets = ticketArray.length;

    // Transform the ticketArray into flightDetails
    const flightDetails = ticketArray.map((flight) => {
        const { legs, price } = flight;
        const { logoUrl, name: carrierName } = legs[0].carriers.marketing[0];
        const totalDuration = legs[0].durationInMinutes;
        const formattedPrice = price.formatted;
        const stops = legs.reduce(
            (acc, leg) => acc + leg.stopCount,
            0
        );
        const departureTime = legs[0].departure;
        const arrivalTime = legs[0].arrival;
        const originId = legs[0].origin.id;
        const destinationId = legs[0].destination.id;

        return {
            logoUrl,
            carrierName,
            totalDuration,
            formattedPrice,
            stops,
            departureTime,
            arrivalTime,
            originId,
            destinationId,
        };
    });

    if (numberOfTickets < 1) {
        return (
            <Typography variant="h5" className="text-center mb-2 font-medium">
                No available flights... Try searching again!
            </Typography>
        );
    }

    return (
        <Box sx={{ padding: 2, maxWidth: 800, margin: "auto" }}>
            <Typography variant="h4" sx={{ marginBottom: "1.5rem" }} className="text-center font-medium">
                Available flights
            </Typography>
            {flightDetails.map((flight, index) => (
                <Card key={index} sx={{ marginBottom: 2, borderRadius: 2 }}>
                    <CardContent >
                        <Grid container spacing={2} alignItems="center" justifyContent={"space-between"} >
                            {/* Time and Airline */}
                            <Grid item xs={12} sm={4}>
                                <Typography variant="h6" sx={{ fontWeight: 600, color: "text.primary" }}>
                                    {new Date(flight.departureTime).toLocaleTimeString([], {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    })}{" "}
                                    –{" "}
                                    {new Date(flight.arrivalTime).toLocaleTimeString([], {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    })}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {flight.carrierName}
                                </Typography>
                            </Grid>

                            {/* Duration and Stops */}
                            <Grid item xs={12} sm={3}>
                                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                    {Math.floor(flight.totalDuration / 60)} hr{" "}
                                    {flight.totalDuration % 60} min
                                </Typography>
                                <Typography variant="body2" color="error">
                                    {flight.stops} stop{flight.stops !== 1 ? "s" : ""}
                                </Typography>
                            </Grid>

                            {/* Price */}
                            <Grid item xs={12} sm={3}>
                                <Typography variant="h6" color="text.primary" sx={{ fontWeight: 700, color: "primary.main" }}>
                                    {flight.formattedPrice}
                                </Typography>
                            </Grid>

                            {/* Route */}
                            <Grid item xs={12} sm={2} textAlign="right" sx={{ textAlign: "right" }}>
                                <Typography variant="body2" color="text.secondary">
                                    {flight.originId} – {flight.destinationId}
                                </Typography>
                                <Button variant="outlined" size="small" sx={{
                                    mt: 1,
                                    textTransform: "none",
                                    borderRadius: 2,
                                }}>
                                    View details
                                </Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
};

export default FlightList;