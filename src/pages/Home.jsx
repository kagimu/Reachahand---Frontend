import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Section1 from "../components/home/Section1";
import Section2 from "../components/home/Section2";
import Section3 from "../components/home/Section3";
import Section4 from "../components/home/Section4";
import Section5 from "../components/home/Section5";

const Home = () => {
  return (
    <div className="w-full grid grid-cols-1">
      <div className="mb-40 w-full">
        <NavBar />
      </div>
      <div className="w-full lg:mx-0">
        <div className="mx-10 ">
          <Section1/>
          <Section2/>
          <Section3/>
          <Section4/>
          <Section5/>
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
