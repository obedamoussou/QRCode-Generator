import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Principale from './pages/Principale.jsx';
import NavBar from './composants/NavBar.jsx';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Principale />} />
      </Routes>
    </Router>
  );
}

export default App;
