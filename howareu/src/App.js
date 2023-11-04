import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Icon } from '@iconify/react';
import EntryScreen from './screens/entry'
import OverviewScreen from './screens/overview';


const App = () => {
  const [currentContent, setCurrentContent] = useState(EntryScreen);

  const showEntryContent = () => {
    setCurrentContent(EntryScreen);
  };

  const showOverviewContent = () => {
    setCurrentContent(OverviewScreen);
  };

  return (
    <div className="App">
      <header>
        <img src=""/>
      </header>
      <div className="content">
        {currentContent}
      </div>
      <div className="navigation-bar center-center">
        <button className="fill button" onClick={showEntryContent}>
          <p>entry</p>
        </button>
        <button className="fill button" onClick={showOverviewContent}>
          <p>overview</p>
        </button>
      </div>
    </div>
  )
};

export default App;