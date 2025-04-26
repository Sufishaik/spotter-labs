"use client";
import React, { useState } from "react";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Container,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useLocationContext } from "../context/LocationContext";


const faqs = [
    {
        question: "What are some good flight destinations from Abuja?",
        answer:
            "Popular destinations from Abuja include Lagos, Dubai, London, New York, and Nairobi.",
    },
    {
        question: "What is the best airport to fly out of Abuja?",
        answer:
            "Nnamdi Azikiwe International Airport (ABV) is the primary airport serving Abuja.",
    },
    {
        question:
            "How long before a flight should I arrive at the airport in Abuja?",
        answer:
            "It's recommended to arrive 2 hours before domestic flights and 3 hours before international flights.",
    },
    {
        question: "How can I find last-minute flight deals from Abuja?",
        answer:
            "Check online travel platforms, airline websites, or use apps specializing in last-minute deals.",
    },
    {
        question: "What is the cheapest place to fly from Abuja?",
        answer:
            "Domestic flights to Lagos are generally the cheapest, while international flights to Accra are cost-effective.",
    },
];

const FAQComponent = () => {
    const [expanded, setExpanded] = useState(false);
    const { userLocation } = useLocationContext();

    const handleChange =
        (panel) => (isExpanded) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <Container sx={{ py: 4 }}>
            {/* Title */}
            <Typography variant="h6" gutterBottom>
                Frequently asked questions about flying from {userLocation.state}
            </Typography>

            {/* FAQ Accordions */}
            {faqs.map((faq, index) => (
                <Accordion
                    key={index}
                    expanded={expanded === index}
                    onChange={handleChange(index)}
                    sx={{
                        mb: 1,
                        background: "none",
                        boxShadow: "none",
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${index}-content`}
                        id={`panel${index}-header`}
                    >
                        <Typography>{faq.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ color: "#9fa3a7" }}>{faq.answer}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Container>
    );
};

export default FAQComponent;