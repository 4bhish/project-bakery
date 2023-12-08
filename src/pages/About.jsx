import React from "react";

import "./styles/AboutStyles.css";
import AboutHeader from "../assets/AboutHeader.jpg";
import TeamCard from "../components/teamcard/TeamCard";

function About() {
  const arrOfMembers = [
    {
      imgSrc:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png",
      name: "John Doe",
      role: "Baker",
    },
    {
      imgSrc:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png",
      name: "John Doe",
      role: "Baker",
    },
    {
      imgSrc:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png",
      name: "John Doe",
      role: "Baker",
    },
  ];
  return (
    <div className="about">
      <h1>
        <span>About</span>
      </h1>

      <div className="about-info">
        <div className="about-leftSide">
          <div className="about-heading">
            <h2>
              The Heart and Hands Behind
              <br /> <span>Friends Bakery.</span>
            </h2>
          </div>

          <p>
            Welcome to our sweet haven! Our adept bakers blend passion into
            every pastry. With skill and love, our team crafts delightful
            treats, ensuring each bite is a perfect indulgence.
          </p>
          <p>
            Explore this vast canvas to unveil our company's essence. This space
            invites you to delve deeper into the intricacies that define our
            unique identity.
          </p>
        </div>
        <img src={AboutHeader} alt="About header" />
      </div>
      <div className="teams-description">
        <div className="desc-container">
          <h2>The Team</h2>
          <p>
            "In our bustling bakery, a skilled team of artisans collaborates
            seamlessly."
          </p>
        </div>
      </div>
      <div className="about-team">
        {arrOfMembers.map((member, index) => (
          <TeamCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
}

export default About;
