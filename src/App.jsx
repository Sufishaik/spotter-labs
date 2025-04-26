import React, { useEffect } from 'react'
import ThemeToggle from './components/theme/ThemeToggle'
import ThemedImage from './components/ThemedImage'
import FlightSearchBar from './components/Filters'
import { useGlobalContext } from './context/GlobalContext';
import Loading from './components/Loading';
import FlightList from './components/FlightList';
import CheapFlights from './components/CheapFlights';
import ExploreMap from './components/ExploreMap';
import FAQComponent from './components/Faq';
import MoreFlights from './components/MoreFlights';
import LanguageLocationCurrency from './components/Footer';

function App() {
  const { showTickets, isLoading } = useGlobalContext();
  useEffect(() => {
    console.log("showTickets", showTickets);
  }, [showTickets]);
  return (
    <>
      <div className='max-w-6xl my-0 mx-auto'>
        <ThemeToggle />
        <ThemedImage />
        <main className='px-2 md:px-4 lg:px-20'>
          <h1 className='capitalize text-center mt-5 font-normal text-5xl leading-[44px]'>
            flights
          </h1>
          <div>
            <FlightSearchBar />
          </div>
          {isLoading && <Loading />}
          {showTickets && <FlightList />}
          <CheapFlights />
          <ExploreMap />
          <FAQComponent />
          <MoreFlights />
          <LanguageLocationCurrency />
        </main>
      </div>
    </>
  )
}

export default App
