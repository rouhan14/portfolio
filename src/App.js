import './App.css';
import Navbar from './NavBar/Navbar';
import Home from './Home/Home';
import About from './About/About'
import Education from './Education/Education';
import Project from './Project/Project';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  offset: 220
});
function App() {
  return (
    
    
    <div className='mainDiv'>

      <Navbar />

      <Home />

      <About />

      <Education />

      <Project />

    </div>
  );
}

export default App;
