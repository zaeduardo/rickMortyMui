import React, {useContext} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { CharactersContext } from "../context/characterContext";
import { Button, Input, backdropClasses } from '@mui/material';
import { ChangeCircle, SearchOutlined } from '@mui/icons-material';
import { FaSearch } from "react-icons/fa";
import Select from 'react-select';
import CardLocation from '../paginasSelect/pagina';


export default function BasicTextFields() {
       const {input, setInput, getDataSearch,typeSelect, setTypeSelect, } = useContext(CharactersContext)
       const options = [
        { value: 'character', label: 'Personagens' },
        { value: 'location', label: 'Localização' },
        { value: 'episode', label: 'Episódios' }
        ]

       return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        width:'100%',
        height:'auto',
        backgroundColor:'#8EC97A',
        display:'flex',
        justifyContent:'center',
        alignContent:'center'
      }}
      noValidate
      autoComplete="off"
    >
  
    <div style={{display:'flex', width:'400px', }}>
      <TextField
     label={`Busque por ${typeSelect.label}`}
        value={input}
        onChange={(e) => setInput(e?.target?.value)}
        type='text'
        placeholder='Pesquisa'
      
      />
    <Button  onClick={(e)=> getDataSearch()} ><FaSearch /></Button>
    </div>

    <div style={{
      display:'flex',

      }}>
         <Select styles={{ 
        control: (provided ) => ({
          ...provided,
          width:'400px',
          height:'50px',

        })
        }} options={options} value={typeSelect} onChange={(e)=> {setTypeSelect(e)
          }}/> 
    </div> 

    </Box>
   
   
        
  );
}