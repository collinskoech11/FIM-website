import 'sideNav';
import './App.css';
import Navbar from './Navigators/Navbar';

function App() {
  return (
    <Router>
      <div className="app">
      <Navbar/>
      <Route exact path="/" component={Home}/>
      </div>
    </Router>
  );
}

export default App;