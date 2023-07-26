

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/homepage/Homepage';
import VideoDetail from './pages/videoDetail/VideoDetail';

function App() {

 

  return (
    <div className="App">
    <Router>
     <Navbar />
      <Routes>
        <Route path="/" element={<Homepage  />} />
        <Route path="/video/:videoId" element={<VideoDetail  />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
