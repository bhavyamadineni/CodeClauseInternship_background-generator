// src/components/GradientPicker.js
import React from 'react';

function GradientPicker({ gradient, setGradient }) {
  return (
    <select value={gradient} onChange={(e) => setGradient(e.target.value)}>
      <option value="linear">Linear Gradient</option>
      <option value="radial">Radial Gradient</option>
    </select>
  );
}

export default GradientPicker;
