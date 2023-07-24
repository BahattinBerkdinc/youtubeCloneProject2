
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/homepage/Homepage';
import VideoDetail from './pages/videoDetail/VideoDetail';

function App() {

  const [toggleAside, setToggleAside] = useState(false)

  return (
    <div className="App">
    
      {/* <Homepage toggleAside={toggleAside} />  */}
    {/* <VideoDetail/>  */}
    <Router>
     <Navbar toggleAside={toggleAside} setToggleAside={setToggleAside}/>
      <Routes>
        <Route path="/" element={<Homepage toggleAside={toggleAside} />} />
        <Route path="/video/:videoId" element={<VideoDetail />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
