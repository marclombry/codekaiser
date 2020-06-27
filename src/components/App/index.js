import React from 'react';
//import logo from '../../phenix.png';
import '../../App.css';
import Footer from '../Footer';
import Main from '../Main';
import Slide from '../Slide';
import Menu from '../Menu';

function App() {
  return (
    <div>
        <Menu />
      <div className="App">
          <Slide infos="mon image" />
          <Main />
          <Footer />
      </div>
    </div>

  );
}

export default App;
