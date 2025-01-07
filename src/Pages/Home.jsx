import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import Who from "../Components/Who";
import Where from "../Components/Where";
import Footer from "../Components/Footer";

function Home () {
  const whoRef = useRef();

  const handleScrollToWho = () => {
    whoRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  };

  return (
    <>
      <Navbar />
      <HeroSection onArrowClick={handleScrollToWho} />
      <Who ref={whoRef} />
      <Where />
      <Footer />
    </>
  );
};

export default Home;
