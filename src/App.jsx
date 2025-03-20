import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Principale from './pages/Principale.jsx';
import NavBar from './composants/NavBar.jsx';
function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        
        <Route path="/" component={Principale} />
        
      </Switch>
    </Router>
  );
}
export default App; 