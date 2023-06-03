import './App.css';
import SearchBar from './components/SearchBar'
import Sliders from './components/Sliders'
import {Data} from './components/Data'
import Profiles from './Search.json'

function App() {
  return (
    <div className="App">
      <SearchBar placeholder="Enter Name" data={Profiles} />
      <Sliders slides={Data}/>
    </div>
  );
}

export default App;
