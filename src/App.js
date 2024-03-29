import React, { Fragment } from 'react';
import './App.css';
import ImagemFundo from './img/fundo.jpg'
import { ThemeProvider } from '@emotion/react';
import { LightTheme } from './theme';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Pagina1 from './Paginas/pg1_Card';
import Pagina2 from './Paginas/pg2_Table';
import Home from './Paginas/home';
import CharactersProvider from './context/characterContext'
import Login from './login/login_index';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginProvider from './context/LoginContext';
import Registro from './register/register_index';
import RegisterProvider, { RegisterContext } from './context/registerContext';


function App() {
  return (
    <div className="App" style={{ backgroundColor: 'orange' }}>
      <Router>
        <LoginProvider>
          <RegisterProvider>

            <CharactersProvider>

              <ThemeProvider theme={LightTheme}>
                <ToastContainer />
                <div style={{
                  backgroundImage: `url(${ImagemFundo})`,
                  backgroundSize: "cover",

                }}>
                  <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/register" element={<Registro />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/pg1" element={<Pagina1 />} />
                    <Route path="/pg2" element={<Pagina2 />} />



                  </Routes>
                </div>


              </ThemeProvider>

            </CharactersProvider>
          </RegisterProvider>
        </LoginProvider>
      </Router>
    </div>
  );
}

export default App;
