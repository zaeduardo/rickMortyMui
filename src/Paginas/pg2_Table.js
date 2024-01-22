import { Box, Button, TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useDataGridProps } from "@mui/x-data-grid/DataGrid/useDataGridProps";
import React, { useContext } from "react";
import { CharactersContext } from "../context/characterContext";
import ButtonAppBar from "../navBar/navBar";
import BasicTextFields from "../search/search";




const Pagina2  = () => {
    
     
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
        { field: 'type', headerName: 'Tipo', width: 200, valueGetter: (params) => (params.value === '' ? 'Não Definido' : params.value), },
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
        </div>

        
        </Box>
        </>
    );
} ;


export default Pagina2