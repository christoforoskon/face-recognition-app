import React from "react";

const FaceRecognition = ({ imageUrl }) => {
  return (
    <div className="center">
      <br />
      <img src={imageUrl} alt="faces photo" />
    </div>
  );
};

export default FaceRecognition;
