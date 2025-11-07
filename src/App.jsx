import './App.css'
import Home from './pages/home/Home';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='about' element={<About />}/>
          <Route path='projects' element={<Projects />}/>
          <Route path='contact' element={<Contact />}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App
