import React, { useContext, useEffect } from "react";
import { AppBar, Box, Button, CardMedia } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import { StyledPage } from "../style";
import Logo from "../../src/img/newLogoHome.png"
import { LoginContext } from "../context/LoginContext";
import ButtonAppBar from "../navBar/navBar";
import { CharactersContext } from "../context/characterContext";


const Home = () => {
  const { autenticacao } = useContext(LoginContext)
  const{isLoading} =useContext(CharactersContext)
  const navegacao = useNavigate('');

  useEffect(() => {

    if (!autenticacao()) {

      navegacao('/Login');
    }
  }, []);

  return (
    <>
      {/* <ButtonAppBar /> */}

      
      <StyledPage>
        <Box sx={{
          height: '40vh',
          width: '70vw',
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
          <img src={Logo} />
          <Box sx={{
            width: '70vw',
            display: 'flex',
            justifyContent: 'space-around',
          }}>


            <Button
              component={Link}
              to="/pg1"
              sx={{
                width: 500,
                height: 100,
                color: "#000000",
                fontWeight: "bold",
                fontSize: "16px",
                borderRadius: "15px",
                backgroundColor: 'primary.dark'
              }}
            >
              CARD
            </Button>

            {/* Pagina 2 é referente a a pagina  das tabelas */}
            <Button
              component={Link}
              to="/pg2"
              sx={{
                width: 500,
                height: 100,
                color: "#000000",
                fontWeight: "bold",
                fontSize: "16px",
                borderRadius: "15px",
                backgroundColor: 'primary.dark'
              }}
            >
              LISTA
            </Button>
          </Box>
        </Box>
      </StyledPage>
    </>
  );
}



export default Home;
