import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { useLocationContext } from "../context/LocationContext";


const ExploreMap = () => {
    const { userLocation } = useLocationContext();
    return (
        <Container sx={{ py: 4 }}>
            {/* Section Title */}
            <Typography variant="h6" gutterBottom>
                Find flights from {userLocation.state} to anywhere
            </Typography>

            {/* Map Section */}
            <Box
                sx={{
                    width: "100%",
                    height: "300px",
                    backgroundColor: "#2E3B4E",
                    backgroundImage: "url(../../public/staticmap.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "8px",
                    position: "relative",
                }}
            >
                <Typography
                    variant="button"
                    sx={{
                        fontSize: "13px",
                        position: "absolute",
                        backgroundColor: "#202124",
                        color: "#aecbfa",
                        px: 2,
                        textTransform: "capitalize",
                        py: 1,
                        borderRadius: "20px",
                        cursor: "pointer",
                    }}
                >
                    Explore destinations
                </Typography>
            </Box>
        </Container>
    );
};

export default ExploreMap;