import logo from './logo.svg';
import axios from 'axios';
import './App.css';

function App() {

  const handleClickTest = () => {
    console.log("inside click: ");
    axios.get('https://tokyo-craft-beer-locations.herokuapp.com/api/bars/all_bars')
    .then((res) => {
      console.log("AXIOS GET", res.data);
    })
  }

  // console.log("API TEST: ", )

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={handleClickTest}>TEST</button>
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
      </header>
    </div>
  );
}

export default App;
