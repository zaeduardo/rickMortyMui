import { Box, Button, TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useDataGridProps } from "@mui/x-data-grid/DataGrid/useDataGridProps";
import ButtonAppBar from "../navBar/navBar";
import BasicTextFields from "../search/search";
import React, { useContext } from "react";
import { CharactersContext } from "../context/characterContext";
import { TableCharacter, TableEp, TableLocation } from "../paginasSelect/pagina";



const Pagina2  = () => {

    const {typeSelect} = useContext(CharactersContext)
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