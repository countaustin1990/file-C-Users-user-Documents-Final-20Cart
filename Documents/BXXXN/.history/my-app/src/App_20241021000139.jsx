import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />  {/*Default route */}
        
        {/* Add more routes as needed */}
      </Routes>
      
    </Router>
  );
};

export default App;
