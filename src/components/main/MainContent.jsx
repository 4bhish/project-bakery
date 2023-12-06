import React from "react";
import "../main/MainContent.css";

const MainContent = () => {
  return (
    <>
      <div className="main">
        <div className="titleAndImg">
          <h1 className="title">friend's bakery</h1>
          <img
            src="../public/bakery/mainImg.jpg"
            alt="main-photo"
            className="main-img"
          />
          <p className="about-mainimg">here some text will be put later</p>
        </div>
      </div>
      <div className="products">
        <div className="p">
          <img
            src="../public/bakery/sub1.jpg"
            alt="p-photo"
            className="p-img"
          />
          <p className="p-text">about img</p>
        </div>
        <div className="p">
          <img
            src="../public/bakery/sub2.jpg"
            alt="p-photo"
            className="p-img"
          />
          <p className="p-text">about img</p>
        </div>
        <div className="p">
          <img
            src="../public/bakery/sub3.jpg"
            alt="p-photo"
            className="p-img"
          />
          <p className="p-text">about img</p>
        </div>
      </div>
    </>
  );
};

export default MainContent;
