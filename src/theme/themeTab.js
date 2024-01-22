import { createTheme } from "@mui/material";
import { cyan,  } from "@mui/material/colors"; 


export const LightTheme = createTheme ({
    palette: { 
        primary: {
             main: '##3B71E6',
            dark:'#7556F5' ,
            light: '#FAEF43',
            contrastText: '#49B5FC'
        },
        secondary:{
            main: cyan[500],
            dark: cyan[400],
            light: cyan[300],
            contrastText: '#ffffff'
        },
        
        background:  {
            paper:'#ffffff', 
            default: '#f7f6f3' ,
        }
    }
})