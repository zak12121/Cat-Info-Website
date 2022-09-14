import Nav from './components/Nav';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Footer from './components/Footer';


function App() {
  return (
  <div data-testid="app" className="App">
    <Router>
      <Nav/>
      <div className="page__wrap">
        <Routes>
        
          <Route path="/" element={<Home/>}/>       
          
        </Routes>
      </div>
      <Footer/>
    </Router>
    </div> 
  );
}

export default App;
