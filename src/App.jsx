import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About-us';
import Service from './components/Service';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Wave from './images/wave.svg'
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
function App() {
  return (
    <> 
      <Header/>
      <Banner/>
      <div className="wave">
        <img src={Wave} alt="wave.svg"/>
      </div>
      <About/>
      <Service/>
      <Contact/>
      <Footer/>
    </>
    
  );
}

export default App;
