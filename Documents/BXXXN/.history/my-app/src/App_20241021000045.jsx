import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/folder/HeroSection';
import Navbar from './components/navbar/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />  {/*Default route */}
        
        {/* Add more routes as needed */}
      </Routes>
      
    </Router>
  );
};

export default App;
