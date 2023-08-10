import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


function App() {
  return (
    <div>
    <div className="App">
      <Home/>
      <About/>
      <Contact/>
      {/* <Footer/> */}
      
    </div>
    <div className="FooterSytle">
      <Footer/>
    </div>
  </div>
    
  );
}

export default App;
