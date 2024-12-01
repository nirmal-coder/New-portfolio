import React ,{ useState } from 'react';
import ThemeContext from './ThemeContext';
import './App.css';
import Header from './components/header/index.js';
import Hero from './components/Hero/index.js';
import Education from './components/Education/index.js';
import Skills from './components/Skills/index.js';
import Projects from './components/Projects/index.js';
import Certificate from './components/Certificate/index.js';
import Footer from './components/Footer/index.js';


const App = () => {
  const [isDark , setTheme] = useState(true)
  const changeTheme = ()=>{
    setTheme((prev)=> !prev)
  }
  return (
    <ThemeContext.Provider value={{isDark : isDark , changeTheme : changeTheme}}>
      <div className="main-container">
      <Header />
      <Hero />
      <Education />
      <Skills />
      <Projects />
      <Certificate />
      <Footer />
    </div>
    </ThemeContext.Provider>
  )
}


export default App;
