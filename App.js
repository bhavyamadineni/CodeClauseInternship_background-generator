// src/App.js
import React, { useState, useRef } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import GradientPicker from './components/GradientPicker';

function App() {
  const [linearColor1, setLinearColor1] = useState('#ff0000');
  const [linearColor2, setLinearColor2] = useState('#0000ff');
  const [radialColor1, setRadialColor1] = useState('#ff0000');
  const [radialColor2, setRadialColor2] = useState('#0000ff');

  const [gradient, setGradient] = useState('linear');

  const linearPreviewRef = useRef(null);
  const radialPreviewRef = useRef(null);

  const generateLinearBackground = () => {
    const ctx = linearPreviewRef.current.getContext('2d');
    ctx.clearRect(0, 0, 400, 300);
    const gradient = ctx.createLinearGradient(0, 0, 400, 300);
    gradient.addColorStop(0, linearColor1);
    gradient.addColorStop(1, linearColor2);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 400, 300);
  };
  
  const generateRadialBackground = () => {
    const ctx = radialPreviewRef.current.getContext('2d');
    ctx.clearRect(0, 0, 400, 300);
    const gradient = ctx.createRadialGradient(200, 150, 0, 200, 150, 200);
    gradient.addColorStop(0, radialColor1);
    gradient.addColorStop(1, radialColor2);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 400, 300);
  };
  
  const linearBackgroundStyle = {
    background: `linear-gradient(to right, ${linearColor1}, ${linearColor2})`
  };

  const radialBackgroundStyle = {
    background: `radial-gradient(circle, ${radialColor1}, ${radialColor2})`
  };

  const downloadBackground = (canvasRef, filename) => {
    const link = document.createElement('a');
    link.download = filename;
    link.href = canvasRef.current.toDataURL('image/png');
    link.click();
  };

  return (
    <div className="App">
      <h1>𝑩𝒂𝒄𝒌𝒈𝒓𝒐𝒖𝒏𝒅 𝑮𝒆𝒏𝒆𝒓𝒂𝒕𝒐𝒓</h1>
      <div className="controls-container">
        <div className="controls">
          <div className="linear-controls">
            <h2>Linear Gradient</h2>
            <ColorPicker color={linearColor1} setColor={setLinearColor1} />
            <ColorPicker color={linearColor2} setColor={setLinearColor2} />
          </div>
          <canvas
            className="preview"
            ref={linearPreviewRef}
            width={400}
            height={300}
            onClick={generateLinearBackground}
          ></canvas>
          <div className="download-button">
            <button onClick={() => downloadBackground(linearPreviewRef, 'linear-background.png')}>
              Download Linear Gradient
            </button>
          </div>
        </div>
        <div className="controls">
          <div className="radial-controls">
            <h2>Radial Gradient</h2>
            <ColorPicker color={radialColor1} setColor={setRadialColor1} />
            <ColorPicker color={radialColor2} setColor={setRadialColor2} />
          </div>
          <canvas
            className="preview"
            ref={radialPreviewRef}
            width={400}
            height={300}
            onClick={generateRadialBackground}
          ></canvas>
          <div className="download-button">
            <button onClick={() => downloadBackground(radialPreviewRef, 'radial-background.png')}>
              Download Radial Gradient
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;