import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CodeQR from './pages/CodeQR.jsx';
import NavBar from './composants/NavBar.jsx';
import Accueil from './pages/Accueil.jsx';


function App() {

  return (

    <Router>
      <Principale />
      <Routes>
        <Route path="/" element={<Accueil />} />
        
      </Routes>
    </Router>

  );

}

export default App;
