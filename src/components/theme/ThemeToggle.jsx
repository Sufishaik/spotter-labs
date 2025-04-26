"use client";

import React from "react";
import Button from "@mui/material/Button";
import { useThemeContext } from "../../context/ThemeContext";

const ThemeToggle = () => {
    const { isDarkMode, toggleTheme } = useThemeContext();

    return (
        <Button sx={{ margin: "1rem", textAlign: "center" }} variant="contained" onClick={toggleTheme}>
            Switch to {isDarkMode ? "Light" : "Dark"} Mode
        </Button>
    );
};

export default ThemeToggle;