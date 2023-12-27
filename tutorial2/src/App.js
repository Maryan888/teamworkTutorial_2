import logo from './logo.svg';
import './App.css';
import MessageComponents from './components/MessageComponents';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h2>Task 4 is there</h2>
        <Card />
        <MessageComponents />
        <h2>From task 3 changes</h2>
      </header>
      <MessageComponents />
      <Card />
    </div>
  );
}

export default App;
