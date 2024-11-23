import React from 'react';
import Flower from './svg/flower';

function Field({ value, onChange }) {
  return (
    <div className="field container">
      <Flower className="flower-right" fill="rgb(110, 146, 119)" />
      <Flower className="flower-left" fill="rgb(249, 148, 59)" />
      <h1>Langify</h1>
      <label htmlFor="input">Enter English</label>
      <input
        id="input"
        className="input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default Field;