// src/components/ColorPicker.js
import React from 'react';

function ColorPicker({ color, setColor }) {
  return (
    <input
      type="color"
      value={color}
      onChange={(e) => setColor(e.target.value)}
    />
  );
}

export default ColorPicker;
