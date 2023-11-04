import React, { useState } from 'react';

const EntryScreen = () => {
  return (
    <div className="entry-screen">
      <h1>Make an Entry</h1>
      <form onSubmit={null}>
        <div className="form-group">
          <input
            type="text"
            placeholder="I just ate some Tim Hortons!"
            id="reasoning"
            className="reasoning-field"
            required
          />
          <input
            type="range" 
            min="1" 
            max="4" 
            defaultValue="4" 
            className="feeling-slider"
          />
        </div>
        <button type="submit">Submit</button>

      </form>
    </div>
  );
};

export default EntryScreen;