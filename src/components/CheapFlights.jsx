import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardMedia, Typography, Container } from "@mui/material";
import { useLocationContext } from "../context/LocationContext";
// import { useLocationContext } from "@/context/LocationContext";
import NewYorkImg from "../../public/newyork.jpeg"
import LondonImg from "../../public/london.jpeg"
import SingImg from "../../public/singapore.jpeg"
import ParisImg from "../../public/paris.jpeg"

const flightData = [
    {
        destination: "New York",
        price: "NGN 1,484,966",
        dates: "Feb 2 – Feb 9",
        stops: "1 stop · 18 hr 25 min",
        airline: "Royal Air Maroc",
        image: NewYorkImg,
    },
    {
        destination: "Paris",
        price: "NGN 1,440,337",
        dates: "Jan 24 – Jan 30",
        stops: "1 stop · 9 hr 45 min",
        airline: "Royal Air Maroc",
        image: ParisImg,
    },
    {
        destination: "London",
        price: "NGN 1,051,512",
        dates: "Jan 31 – Feb 7",
        stops: "1 stop · 10 hr 15 min",
        airline: "Royal Air Maroc",
        image: LondonImg,
    },
    {
        destination: "Singapore",
        price: "NGN 1,858,238",
        dates: "Nov 29 – Dec 5",
        stops: "1 stop · 27 hr 50 min",
        airline: "Turkish Airlines",
        image: SingImg,
    },
];

const CheapFlights = () => {
    const { userLocation } = useLocationContext();
    return (
        <Container sx={{ py: 4 }}>
            <Typography variant="h5" gutterBottom>
                Cheap flights from {userLocation.state}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                Popular trips from {userLocation.state}
            </Typography>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
                {flightData.map((flight, index) => (
                    <Grid columns={{ xs: 12, sm: 4 }} key={index}>
                        <Card
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                boxShadow: "none",
                                background: "transparent",
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="140"
                                image={flight.image}
                                alt={flight.destination}
                                sx={{ height: "120px", borderRadius: "15px" }}
                            />
                            <CardContent
                                className=""
                                sx={{
                                    paddingX: "0px",
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <Typography gutterBottom sx={{ fontWeight: "500" }}>
                                        {flight.destination}
                                    </Typography>
                                    <Typography sx={{ fontWeight: "500" }}>
                                        {flight.price}
                                    </Typography>
                                </Box>

                                <Typography variant="body2" color="textSecondary">
                                    {flight.dates}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {flight.stops}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {flight.airline}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </div>
        </Container>
    );
};

export default CheapFlights;