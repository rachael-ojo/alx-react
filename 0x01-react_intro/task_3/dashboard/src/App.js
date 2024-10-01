import holbertonLogo from './Image/holberton-logo.jpg';
import './App.css';

function App() {
  return (
    <div>
      <header className="App-header">
        <img src={holbertonLogo} alt="Holberton Logo" width="200px" height="200px" />
        <h1>School dashboard</h1>
      </header>
      <h2 style={{ backgroundColor: 'red', height: '4px', width: '80%', display: 'block', marginBottom: '10px' }}></h2>
      <div className="App-body">
        <p style={{ textAlign: 'left', marginBottom: '500px' }}>
          Login to access the full dashboard:
        </p>
        <input type="email" id="email" placeholder="Email" style={{ marginRight: '20px' }} />
        <input type="password" id="password" placeholder="Password" style={{ marginRight: '20px' }} />
        <button>OK</button>
        <h2 style={{ backgroundColor: 'red', height: '4px', width: '80%', display: 'block', marginBottom: '10px' }}></h2>
      </div>
      <footer className="App-footer">
        <p>Copyright 2019 - holberton School</p>
      </footer>
    </div>
  );
}

export default App;
