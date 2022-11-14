import React from "react";

const Rank = ({ ame, entries }) => {
  return (
    <div>
      <div className="green f3">
        {"${name}, your current rank is: ${entries}"}
      </div>
      <div className="green f1">{entries}</div>
    </div>
  );
};

export default Rank;
