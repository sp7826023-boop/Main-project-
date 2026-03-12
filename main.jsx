import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Jobs from './Jobs';
import Contact from './Contact';
import About from './About';
import Login from './Login';
import Register from './Register';




createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter basename={"/"}>
      <Routes>
        
          <Route path="/" element={<Home/>}/>
          <Route path="job" element={<Jobs/>}></Route>
          <Route path="contact" element={<Contact/>}></Route>
          <Route path="about" element={<About/>}></Route>
          <Route path="Login" element={<Login/>}></Route>
           <Route path="register" element={<Register/>}></Route>

              
            

            
        
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
