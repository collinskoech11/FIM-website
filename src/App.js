import 'sideNav';
import './App.css';
import Navbar from './Navigators/Navbar';

function App() {
  return (
    <Router>
      <div className="app">
      <Navbar/>
      </div>
    </Router>
  );
}

export default App;
