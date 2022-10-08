import { useState } from "react";
import Star from "./Star";

const RatingStars = ({ value }) => {
  const num = Math.ceil(value / 2);

  const GRADES = ["1", "2", "3", "4", "5"];
  const activeStar = {
    fill: "yellow",
  };

  return (
    <span className="stars">
      {GRADES.map((grade, index) => (
        <Star index={index} key={grade} style={index < num ? activeStar : {}} />
      ))}
    </span>
  );
};

export default RatingStars;
