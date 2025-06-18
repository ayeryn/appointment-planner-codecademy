import React from "react";

export const Tile = ({ name, description }) => {
  return (
    <div className="tile-container">
      <p className="title-title">{name}</p>
      {description &&
        description.map((item) => (
          <p key={item} className="tile">
            {item}
          </p>
        ))}
    </div>
  );
};
