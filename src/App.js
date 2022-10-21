import './App.scss';
import AppTile from './Components/AppTile';
import CenterCard from './Components/CenterCard.jsx';

function App() {
  return (
    <div className="App">
    <input className='search' placeholder='Search Apps'/>
    <CenterCard/>
    <AppTile/>
    </div>
  );
}

export default App;
