import React from 'react';
//import logo from '../../phenix.png';
import '../../App.css';
import Footer from '../Footer';
import Main from '../Main';
import Slide from '../Slide';
import Menu from '../Menu';
import { IconContext } from 'react-icons'

function App() {
  return (
    <IconContext.Provider value={{  }}>
      <div>
          <Menu />
        <div className="App">
            <Slide infos="mon image" />
            <Main />
            <Footer />
        </div>
      </div>
    </IconContext.Provider>    

  );
}

export default App;
