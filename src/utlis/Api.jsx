

// get location
export const getUserLocation = async () => {
    if (!navigator.geolocation) {
        throw new Error("Geolocation is not supported by your browser.");
    }

    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                resolve({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                });
            },
            (error) => reject(error)
        );
    });
};

export const searchAirport = async (airport) => {
    const API_KEY = "800af80d9fmshc7d1062f251e6d4p1e6276jsnb70929c26782";
    const url = `https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport?query=${airport}&locale=en-US`;

    const options = {
        method: "GET",
        headers: {
            "x-rapidapi-key": API_KEY,
            "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
        },
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        const { skyId, entityId } = result.data[0] || {};

        return { skyId, entityId };
    } catch (error) {
        console.error(error);
    }
};

export const getAvailableFlights = async (formData) => {
    const {
        passengers,
        flightClass,
        departureDate,
        returnDate,
        fromSkyId,
        fromEntityId,
        toSkyId,
        toEntityId,
    } = formData;
    const API_KEY = "800af80d9fmshc7d1062f251e6d4p1e6276jsnb70929c26782";
    const url = `https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlights?originSkyId=${fromSkyId}&destinationSkyId=${toSkyId}&originEntityId=${fromEntityId}&destinationEntityId=${toEntityId}&date=${departureDate}&returnDate=${returnDate}&cabinClass=${flightClass}&adults=${passengers}&sortBy=best&currency=NGN&market=en-US&countryCode=NG&limit=10`;

    const options = {
        method: "GET",
        headers: {
            "x-rapidapi-key": API_KEY,
            "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
        },
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
    }
};

