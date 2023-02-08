import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const LibSlide = ({ imgArr = [] }) => {
  return (
    <Carousel infiniteLoop={true}>
      {imgArr.map((item) => {
        return (
          <div>
            <img src={item} />
            <p className="legend">IMAGE</p>
          </div>
        );
      })}
    </Carousel>
  );
};

export default LibSlide;
