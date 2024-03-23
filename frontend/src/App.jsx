import { Routes, Route} from 'react-router-dom';
import Home from './screens/Home';
import Monitor from './screens/Monitor';
import Reporting from './screens/Reporting';
import NavBar from './components/NavBar';
import "./App.css";

const App = () => {
  return (
    <div className='approot'>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/monitor" element={<Monitor />} />
        <Route path="/reporting" element={<Reporting />} />
      </Routes>
    </div>
  );
}

export default App;