import React, { useState } from 'react';

const OverviewScreen = () => {
  return (
    <div className="entry-screen">
      <h1>Entry Screen</h1>
      <form onSubmit={null}>
        <div className="form-group">
          <input
            type="text"
            id="username"
            name="username"
            required
          />
        </div>
      </form>
    </div>
  );
};

export default OverviewScreen;