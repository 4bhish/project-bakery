import React from "react";
import "./styles/Home.css";

import Carousel from "react-material-ui-carousel";
import CategoryCard from "../components/categorycard/CategoryCard";

function Home() {
  const arrOfCategory = [
    {
      name: "Breads",
      imgSrc:
        "https://media.istockphoto.com/id/474679296/photo/organic-homemade-whole-wheat-bread.webp?b=1&s=170667a&w=0&k=20&c=9teWkqZ8j2yCXtgnIbuiwyATSmnuea8ZXaomhcSmXxA=",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      name: "pastry",
      imgSrc:
        "https://images.unsplash.com/photo-1583915374628-de7430eae056?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
  ];
  return (
    <div className="homepage">
      <h1 className="homepage-heading">
        <span>Friends Bakery</span>
      </h1>
      <div className="homepage-slider-container">
        <Carousel>
          <img
            className="car-img"
            src="https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <img
            className="car-img"
            src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <img
            className="car-img"
            src="https://images.unsplash.com/photo-1504400739660-22ebeb14f00a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </Carousel>
      </div>
      <div className="we-have-container">
        <div className="we-have">
          <h2>We have</h2>
          <p>"In our bakery, delight in the diverse flavors."</p>
        </div>
      </div>
      <div className="homepage-category">
        {arrOfCategory.map((category, index) => (
          <CategoryCard key={index} category={category} />
        ))}
      </div>
    </div>
  );
}

export default Home;
