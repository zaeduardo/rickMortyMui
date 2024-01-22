import React, { Fragment } from 'react';
import './App.css';
import ImagemFundo from './img/fundo.jpg'
import { ThemeProvider } from '@emotion/react';
import { LightTheme } from './theme';
import { Button, ButtonGroup, Card } from '@mui/material';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Pagina1 from './Paginas/pg1_Card';
import Pagina2 from './Paginas/pg2_Table';
import Home from './Paginas/home';
import CharactersProvider from './context/characterContext'
import ButtonAppBar from './navBar/navBar';

function App() {
  return (
    <div className="App">
          
        <CharactersProvider> 
          
      <ThemeProvider theme={LightTheme}>
        <Router>
          <div style={{
              backgroundImage: `url(${ImagemFundo})`,
              backgroundSize: "cover",
             
          }}>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/home" element={<Home/>} />

              <Route path="/pg1" element={<Pagina1 />} />
              <Route path="/pg2" element={<Pagina2 />} />
            </Routes>
          </div>
        </Router>


      </ThemeProvider>
      
          </CharactersProvider> 

    </div>
  );
}

export default App;
