import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import About from './page/About';
// import Blog from './page/Blog';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './page/HomePage';
import Newsletter from './page/Newsletter';
import Projects from './page/Projects';
import Blog from './page/Blog'
function App() {
  return (
    <>
   
    
     <Router>
      <Routes>
      <Route path="/" element={<Homepage/>}>  </Route>
      <Route path="/project" element={<Projects/>}></Route>
      <Route path="/newsletter" element={<Newsletter/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/blog" element={<Blog/>}></Route>
      </Routes>
      
    </Router>
      {/* <Homepage/>
      <Projects/>
      <Newsletter/>
      <About/>
      <Blog/> */}
    </>
  );
}

export default App;
