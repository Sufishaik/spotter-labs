// import { searchAirport, getAvailableFlights } from "@/utils/api";

import { getAvailableFlights, searchAirport } from "../utlis/Api";


const GetTickets = async (
    data,
    setShowTickets,
    setTicketsData,
    setIsLoading
) => {
    const {
        from,
        passengers,
        to,
        tripTypefrom,
        flightClassfrom,
        departureDatefrom,
        returnDatefrom,
    } = data;


    console.log("from", from)
    console.log("to", to)
    try {
        const [fromDetails, toDetails] = await Promise.all([
            searchAirport(from),
            searchAirport(to),
        ]);

        if (!fromDetails || !toDetails) {
            throw new Error("Could not fetch airport details.");
        }

        // get airports sky and entity ids
        const { skyId: fromSkyId, entityId: fromEntityId } = fromDetails;
        const { skyId: toSkyId, entityId: toEntityId } = toDetails;

        try {
            const newData = {
                ...data,
                fromSkyId,
                fromEntityId,
                toSkyId,
                toEntityId,
            };

            // get available flights
            const result = await getAvailableFlights(newData);
            //   console.log(result);

            if (result) setShowTickets(true);
            setTicketsData(result);
            setIsLoading(false);
        } catch (error) {
            console.error("Error getting available flights:", error);
        }
    } catch (error) {
        console.error("Error in getTickets:", error);
    }
};

export default GetTickets;