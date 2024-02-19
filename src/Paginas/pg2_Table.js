import { Box, Button, TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useDataGridProps } from "@mui/x-data-grid/DataGrid/useDataGridProps";
import ButtonAppBar from "../navBar/navBar";
import BasicTextFields from "../search/search";
import React, { useContext, useEffect } from "react";
import { CharactersContext } from "../context/characterContext";
import { TableCharacter, TableEp, TableLocation } from "../paginasSelect/pagina";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";

const Pagina2  = () => {

    const {typeSelect} = useContext(CharactersContext)
    const{autenticacao}=useContext(LoginContext)
    const navegacao = useNavigate('');

  useEffect(()=> {
    if(!autenticacao()){

    } 
  }, [] )

    switch (typeSelect.value) {
  
        case 'character':
          return <TableCharacter/>
          break;
          case 'location':
            return <TableLocation/>
            break;
          case 'episode':
            return <TableEp/>
            default:  
            return <TableCharacter/>   
      }
      }

export default Pagina2