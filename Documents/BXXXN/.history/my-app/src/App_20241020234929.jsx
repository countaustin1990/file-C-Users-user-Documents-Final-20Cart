import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Folder from './components/folder/Folder';
import Navbar from './components/navbar/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/*<Route path="/" element={<div>Home Page</div>} />  Default route */}
        <Route path="/folder" element={<Folder />} />
        {/* Add more routes as needed */}
      </Routes>
      <Folder/>
    </Router>
  );
};

export default App;
