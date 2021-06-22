import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SearchName } from 'actions/api/SearchNameActions';

function App() {
  const a = React.useCallback(async () => {
    const asd = await SearchName('batman');
    console.log(asd);
  }, []);

  React.useEffect(() => {
    a();
  }, [a]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
