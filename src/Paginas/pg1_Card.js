import React, { Fragment, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardContent, CardMedia, CircularProgress, Typography, Box } from "@mui/material";
import Ima from '../img/fundo.jpg';
import { CharactersContext } from "../context/characterContext";
import ButtonAppBar from "../navBar/navBar";
import BasicTextFields from "../search/search";
import { CardCharacter, CardEp, CardLoc } from "../paginasSelect/pagina";

export default function Pagina1() {
  const {typeSelect} = useContext(CharactersContext)
   switch (typeSelect.value) {
  
  case 'character':
    return <CardCharacter/>
    break;
    case 'location':
      return <CardLoc/>
      break;
    case 'episode':
      return <CardEp/>
      default:  
      return <CardCharacter/>   
}
}