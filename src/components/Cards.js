import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import Image_9 from "../images/img-9.jpg";
import Image_2 from "../images/img-2.jpg";
import Image_3 from "../images/img-3.jpg";
import Image_4 from "../images/img-4.jpg";
import Image_8 from "../images/img-8.jpg";
function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={Image_9}
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={Image_2}
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={Image_3}
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src={Image_4}
              text="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
              path="/products"
            />
            <CardItem
              src={Image_8}
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
