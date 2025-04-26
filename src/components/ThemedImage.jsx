

import React from "react";

import Image1 from "../../public/flights_nc_dark_theme_4.svg"
import Image2 from "../../public/flights_nc_4.svg"
import { useThemeContext } from "../context/ThemeContext";

const ThemedImage = () => {
    const { isDarkMode } = useThemeContext();
    const imageSrc = isDarkMode
        ? Image1
        : Image2;
    return (
        <img
            src={imageSrc}
            alt="flights-header-image"
            width={300}
            height={300}
            className="w-full"
            priority
        />
    );
};

export default ThemedImage;