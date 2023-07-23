
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/homepage/Homepage';
import VideoDetail from './pages/videoDetail/VideoDetail';

function App() {

  const [toggleAside, setToggleAside] = useState(false)

  return (
    <div className="App">
    
     {/* <Navbar toggleAside={toggleAside} setToggleAside={setToggleAside}/>
      <Homepage toggleAside={toggleAside} />  */}
    <VideoDetail/> 
    </div>
  );
}

export default App;
