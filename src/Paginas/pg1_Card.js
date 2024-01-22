import React, { Fragment, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardContent, CardMedia, CircularProgress, Typography, Box } from "@mui/material";
import Ima from '../img/fundo.jpg';
import { CharactersContext } from "../context/characterContext";
import ButtonAppBar from "../navBar/navBar";
import BasicTextFields from "../search/search";

export default function Pagina1() {
  const { data, getData, isLoading } = useContext(CharactersContext);

  useEffect(() => {
    getData();
  }, []);

  return (
  
    <Fragment >
      <ButtonAppBar/>
      <BasicTextFields/>

      {isLoading ? ( 
        

       
        <Box
        sx={{
            width: "100%",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
            display: 'flex',
          }}
          >
          <CircularProgress color="success" />
        </Box>
      ) : (
       
        
        <Box
        sx={{
          backgroundColor:'rgba(0,0,0,50%)',
          width: '90%',
          padding: '25px',
          marginLeft:'3%',
          marginTop:'100px',
          height: '60vh',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          overflowY: 'scroll',
          }}
        >
          {data?.map((character, index) => (
            <Card key={index} sx={{
              width: '20%',
              minWidth: 345,
              margin: '20px',
            }}>
              <div className='spans'>
                <CardMedia sx={{ height: 240 }} image={character.image} title=" titulo test" />
                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'start',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignContent: 'center',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '100%',
                    }}
                  >
                    <Typography gutterBottom variant="h5" component="div">
                      {character.name}
                    </Typography>
                  </Box>
                  <Typography variant="body2" ><b>Status:</b>{character.status !== 'Alive' ? 'Morto' : "Vivo"}</Typography>
                  <Typography variant="body2" ><b>Espécie: </b> {character.species}</Typography>
                  <Typography variant="body2" ><b>Tipo:</b> {character.type === "" ? 'Não Definido' : character.type}</Typography>
                  <Typography variant="body2" ><b>Genero:</b> {character.gender}</Typography>
                </CardContent>
              </div>
            </Card>
          ))}
        </Box>
        

      )}
     
    </Fragment>
    
  );
}
