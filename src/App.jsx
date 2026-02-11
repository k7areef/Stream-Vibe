import React from "react";
import { Route, Routes } from "react-router-dom";
import Aos from "aos";
import { lazy } from 'react';

// Pages:
const HomePage = lazy(() => import('@pages/HomePage'));
const MoviesAndShowsPage = lazy(() => import('@pages/MoviesAndShowsPage'));
const MovieDetailPage = lazy(() => import('@pages/MovieDetailPage'));
const ShowDetailPage = lazy(() => import('@pages/ShowDetailPage'));
const SupportPage = lazy(() => import('@pages/SupportPage'));
const SubscriptionPage = lazy(() => import('@pages/SubscriptionPage'));
const SearchPage = lazy(() => import('@pages/SearchPage'));
// Layout Components:
import NavigraitonBar from "@components/Layout/NavigationBar";
import CTA from "@components/Layout/CTA";
import Footer from "@components/Layout/Footer";

function App() {

  React.useEffect(() => {
    Aos.init({
      once: true,
      easing: "ease-in-out",
    });
  }, [])

  return (
    <div className='App min-h-screen bg-black-08 text-white'>
      {/* Navigation Bar */}
      <NavigraitonBar />
      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies-and-shows" element={<MoviesAndShowsPage />} />
        <Route path="/movies-and-shows/movie/:id" element={<MovieDetailPage />} />
        <Route path="/movies-and-shows/show/:id" element={<ShowDetailPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/subscribtion" element={<SubscriptionPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
      {/* CTA */}
      <CTA />
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App;