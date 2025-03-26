import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import Principale from './pages/Principale.jsx';
import NavBar from './composants/NavBar.jsx';
import Connexion from './pages/Connexion.jsx';
import Inscription from './pages/Inscription.jsx';
import Historique from './pages/Historique.jsx';

function App() {

  return (

    <Router>
      <NavBar />
      <ToastContainer position="top-right" />
      <Routes>
        <Route path="/" element={<Principale />} />
        <Route path="/Principale" element={<Principale />} />
        <Route path="/Inscription" element={<Inscription />} />
        <Route path="/Connexion" element={<Connexion />} />
        <Route path="/Historique" element={<Historique />} />
      </Routes>
    </Router>

  );

}

export default App;
