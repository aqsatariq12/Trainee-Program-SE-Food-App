import React from "react";
import Hero from "../../components/layout/Hero";
import Benefits from "../../components/layout/Benefits";
import AboutUs from "../../components/layout/AboutUs";
import ExclusiveDealCard from "../../components/layout/ExclusiveDealCard";
import PopularCategories from "../../components/layout/PopularCategories";
import StatsSection from "../../components/layout/StatsSection";
import Footer from "../../components/layout/Footer";
import PopularRestaurants from "../../components/layout/PopularRestaurants";
import PersonalisedSection from "../../components/layout/PersonalisedSection";
export default function Home() {
  return (
    <div>
      <Hero />
      <ExclusiveDealCard />
      <PopularCategories />
      <PopularRestaurants />
      {/* <PersonalisedSection /> */}
      <Benefits />
      <AboutUs />
      <StatsSection />
      <Footer/>
    </div>
  );
}
