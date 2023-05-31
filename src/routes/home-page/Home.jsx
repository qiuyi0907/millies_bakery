import React from "react";
import CategoryDir from "../../components/category-directory/CategoryDir";
import HomeImg from "../../components/home-img/HomeImg";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <HomeImg />
      <CategoryDir />
      <Footer />
    </div>
  );
};

export default Home;
