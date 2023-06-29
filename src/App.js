import './App.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import Projects from './pages/Projects'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import Header from './components/Header';

function App() {
  return (
    <Container>
      <Router>

        <Header/>

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/services' element={<Services />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
