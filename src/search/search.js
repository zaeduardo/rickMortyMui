import React, {useContext} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { CharactersContext } from "../context/characterContext";
import { Button, Input } from '@mui/material';
import { ChangeCircle, SearchOutlined } from '@mui/icons-material';
import { FaSearch } from "react-icons/fa";



export default function BasicTextFields() {
       const {input, setInput, getDataSearch, } = useContext(CharactersContext)
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        width:'100%',
        height:'auto',

        backgroundColor:'wheat',
        display:'flex',
        justifyContent:'center',
        alignContent:'center'
      }}
      noValidate
      autoComplete="off"
    >
  
    <div style={{display:'flex'}}>
      <TextField
        label='Busque por Personagem'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type='text'
        placeholder='Pesquisa'
      />
    <Button onClick={(e)=> getDataSearch()}><FaSearch /></Button>
    </div>

    <div style={{
      display:'flex',
      }}>
      <Button  onClick={(e)=> console.log("ESSE BOTÃO DEVE MUDAR O VALOR DO STATE typeSearch, para seu respectivo tipo de busca")
    }><ChangeCircle size={20} /></Button>
    </div> 

     {/*<div style={{
      display:'flex',
      }}>
      <TextField
        label='Busque por Episodio'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type='text'
        placeholder='Pesquisa'
      />
    <Button onClick={(e)=> getDataSearch()}><FaSearch /></Button>
    </div> 



    <div style={{
    display:'flex',

}}>

      <TextField
        label='Busque por Localização'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type='text'
        placeholder='Pesquisa'
      />
    <Button onClick={(e)=> getDataSearch()}><FaSearch /></Button>
    </div> 
 */}

    </Box>
   
   
        
  );
}