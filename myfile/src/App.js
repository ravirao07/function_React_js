import logo from './logo.svg';
import './App.css';
import User from './Home';
import About from './About';
import Contact from './Contact';
import Blog from './Blog';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <User/>
        <About/>
        <Blog/>
        <Contact/>
      </header>
    </div>
  );
}

export default App;
