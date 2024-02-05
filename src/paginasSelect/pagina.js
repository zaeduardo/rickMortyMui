import React, { Fragment, useContext, useEffect, useState } from "react";
import ButtonAppBar from "../navBar/navBar";
import BasicTextFields from "../search/search";
import { Box, Card, CardContent, CardMedia, CircularProgress, Typography } from "@mui/material";
import { CharactersContext } from "../context/characterContext";
import { DataGrid } from "@mui/x-data-grid";


export function CardCharacter () {
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

export function CardLoc () {
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
              backgroundColor: 'red'
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
            {data?.map((location, index) => (
              <Card key={index} sx={{
                width: '20%',
                minWidth: 345,
                backgroundColor: 'black',
                color:'white',
                margin: '20px',
              }}>
               { console.log(location)}
                <div className='spans'>
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
                        {location.name}
                      </Typography>
                    </Box>

                    <Typography variant="body2" ><b>ID </b> {location?.id}</Typography>
                    <Typography variant="body2" ><b>Nome </b> {location?.name}</Typography>
                    <Typography variant="body2" ><b>Tipo </b> {location?.type}</Typography>
                    <Typography variant="body2" ><b>Dimensão </b> {location?.dimension}</Typography> 





                    
                  </CardContent>
                </div>
              </Card>
            ))}
          </Box>
          
  
        )}
       
      </Fragment>
      
    );
} 

export function CardEp () {
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
          backgroundColor: 'red'
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
        {data?.map((episode, index) => (
          <Card key={index} sx={{
            width: '20%',
            minWidth: 345,
            backgroundColor: 'black',
            fontSize:'40px',
            color:'white',
            margin: '20px',
          }}>
           { console.log(episode)}
            <div className='spans'>
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
                    {episode.name}
                  </Typography>
                </Box>

                <Typography variant="body2" ><b>ID </b> {episode?.id}</Typography>
                <Typography variant="body2" ><b>Nome </b> {episode?.name}</Typography>
                <Typography variant="body2" ><b>Personagem </b> {episode?.characters?.length}</Typography>
                <Typography variant="body2" ><b>Episodio </b> {episode?.episode}</Typography> 
                <Typography variant="body2" ><b>Data de Lançamento </b> {episode?.air_date}</Typography> 





                
              </CardContent>
            </div>
          </Card>
        ))}
      </Box>
      

    )}
   
  </Fragment>
    
  );
} 


// TABELAS ▬ 


export function TableCharacter () {
     
  const {data, setData, getData, isLoading, setIsLoading} = useContext(CharactersContext);



  const columns = [
      {field: 'id', headerName: 'ID', width: 30, backgroundColor:'#66ED7A'},
      {field: 'image', headerName: 'Imagem', width: 300, 
       renderCell: (params) => (
          <figure style={{width: '100%', height: '100%'}}>
             <img src={params.value}  style={{ width: 'auto', height: '100%' }} />
          </figure>
        ),
      },
      { field: 'name', headerName: 'Nome', width: 200},
      { field: 'status', headerName: 'Status', width: 100 },
      { field: 'species', headerName: 'Especie', width: 100 },
      { field: 'type', headerName: 'Tipo', width: 200, valueGetter: (params) => (params.value === '' ? 'Não Definido' : params?.value), },
      { field: 'gender', headerName: 'Genero', width: 100 },


  ];
  
  
return (
      <>
       <ButtonAppBar/>
       <BasicTextFields/>
      <Box
      sx={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      height:"100vh" 
  }}>
      <div style={{ height: 500, width: '60%', }}>
          <DataGrid 
           rows={data} 
           columns={columns} 
           hederCell
           pageSize={5} 
           rowsPerPageOptions={[5,10,25]}                  
           rowHeight={100}
                  style={{
                      backgroundColor:'#292C34',
                      color:'#8EC97A',
                      fontSize:'18px'
                  }}
          />
          <>
          
          </>
      </div>

      
      </Box>
      </>
  );
} ;

export function TableLocation  () {

  const {data, setData, getData, isLoading, setIsLoading} = useContext(CharactersContext);
  const columns = [
      {field: 'id', headerName: 'ID', width: 30, backgroundColor:'#66ED7A'},
      { field: 'name', headerName: 'Nome', width: 200},
      { field: 'type', headerName: 'Tipo', width: 200 },
      { field: 'dimension', headerName: 'Dimensão', width: 200 },
    

  ];
  
  
return (
      <>
       <ButtonAppBar/>
       <BasicTextFields/>
      <Box
      sx={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      height:"100vh" 
  }}>
    {/* AKI É SÓ PARTE DE ESTILIZAÇÃO */}
      <div style={{ height: 500, width: '35%', }}>
     
          <DataGrid 
           rows={data} 
           columns={columns} 
           hederCell
           pageSize={5} 
           rowsPerPageOptions={[5,10,25]}
           rowHeight={100}
                  style={{
                      backgroundColor:'#292C34',
                      color:'#8EC97A',
                      fontSize:'18px'
                  }}
          />
         

      </div>

      
      </Box>
      </>
  );
} ;

export function TableEp  () {

  const {data, setData, getData, isLoading, setIsLoading} = useContext(CharactersContext);
  const columns = [
      {field: 'id', headerName: 'ID', width: 30, backgroundColor:'#66ED7A'},
      { field: 'name', headerName: 'Nome', width: 200},
      { field: 'air_date', headerName: 'Data de Lançamento', width: 200 },
      { field: 'episode', headerName: 'Dimensão', width: 100 },


  ];
  
  
return (
      <>
       <ButtonAppBar/>
       <BasicTextFields/>
      <Box
      sx={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      height:"100vh" 
  }}>
    {/* AKI É SÓ PARTE DE ESTILIZAÇÃO */}
      <div style={{ height: 500, width: '35%', }}>
       
          <DataGrid 
           rows={data} 
           columns={columns} 
           hederCell
           pageSize={5} 
           rowsPerPageOptions={[5,10,25]}
           rowHeight={100}
                  style={{
                      backgroundColor:'#292C34',
                      color:'#8EC97A',
                      fontSize:'18px'
                  }}
          />
     
      </div>

      
      </Box>
      </>
  );
} ;


