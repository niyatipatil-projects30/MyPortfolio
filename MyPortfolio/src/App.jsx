import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import {Navbar} from'./components/Navbar';
import {Home}from'./components/Home';
import About from'./components/About';
import {Contact}from'./components/Contact';
function App() {
  return (
    <>
      <Navbar/> 
      <Home />
      <About/>
      <Contact/>
   </>
  );
}
export default App;
