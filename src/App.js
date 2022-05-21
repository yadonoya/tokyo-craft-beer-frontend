import logo from './logo.svg';
import axios from 'axios';
import Header from './components/Header';

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
      <Header />
        <button onClick={handleClickTest}>TEST</button>
    </div>
  );
}

export default App;
