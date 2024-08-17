import React from "react";
import "../styles/ColorImageSelect.css";

const ColorImageSelect = ({ selectedColor, onColorSelect }) => {
  const colors = [
    { value: "blue", name: "Midnight" },
    { value: "gold", name: "Starlight" },
    { value: "silver", name: "Silver" },
    { value: "spaceGray", name: "Space Gray" },
  ];

  const selectedColorName =
    colors.find((color) => color.value === selectedColor)?.name ||
    "Select a color";

  return (
    <div className="color-options">
      <span>{selectedColorName}</span>
      <div className="color-circles">
        {colors.map(({ value, name }) => (
          <div
            key={value}
            className={`color-circle ${value} ${
              selectedColor === value ? "selected" : ""
            }`}
            onClick={() => onColorSelect(value)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ColorImageSelect;
