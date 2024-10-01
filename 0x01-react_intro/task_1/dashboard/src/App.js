import React from 'react';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Login to access the full dashboard:</p>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" />
      <br />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" />
      <br />
      <button>OK</button>
      <footer>
        <p>&copy; {getFullYear()} {getFooterCopy(false)}</p>
      </footer>
    </div>
  );
}

export default App;
