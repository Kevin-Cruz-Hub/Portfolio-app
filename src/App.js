import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import {AnimatePresence} from 'framer-motion'
import './App.css';
function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Navbar/>
      <Sidebar/>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
