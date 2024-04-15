import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import FeedBack from './pages/FeedBack';

function App() {
  return (
    <div className="App">
      <h1> Hello World</h1>
      < Home/>
      <About />
      <Contact/>
      <FeedBack/>
    </div>
    
  );
}

export default App;
