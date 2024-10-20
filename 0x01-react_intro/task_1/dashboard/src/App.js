import React from 'react';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <>
      <div className="App">
        <div className="App-footer">
          <p>Copyright {getFullYear()} - {getFooterCopy(false)}</p>
        </div>
      </div>
    </>
  );
}

export default App;
