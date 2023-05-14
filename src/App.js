import Logo from './Logo.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} className="App-logo" alt="logo" />
        <p>
          PHILIPPINES AIR FORCE 
        </p>
        <a
          className="App-link"
          href="https://www.paf.mil.ph/"
          rel="Philippines Air Force"
        >
          Learn more about PAF
        </a>
      </header>
    </div>
  );
}

export default App;
