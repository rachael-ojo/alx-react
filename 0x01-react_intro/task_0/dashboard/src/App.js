import logo from './Image/holberton-logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
	  <img src={logo} alt="Holberton Logo" width="200px" height="200px" />
        <h1 style={{ color: 'red' }}>School dashboard</h1>
      </header>
      <h2 style={{ backgroundColor: 'red', height: '4px', width: '100%', display: 'block', marginBottom: '10px' }}></h2>
      <div className="App-body">
        <p style={{ textAlign: 'left', marginBottom: '500px' }}>Login to access the full dashboard</p>
        <h2 style={{ backgroundColor: 'red', height: '4px', width: '100%', display: 'block', marginBottom: '10px' }}></h2>
      </div>
      <footer className="App-footer">
        <p>Copyright 2023 - holberton School</p>
      </footer>
    </div>
  );
}

export default App;
