import React from "react"
import NavBar from "./NavBar/NavBar"
import Intro from "./Intro/Intro"
import Skills from './Skills/Skills'
import Works from './Works/Works'
import Contact from "./Contact/Contact"
import Footer from "./Footer/Footer"

const App = () => {
   return ( 
      <div > 
         <NavBar/> 
         <Intro/>
         <Skills/> 
         <Works/> 
         <Contact/>  
         <Footer/>
   
      </div> 
 )
} 

export default App