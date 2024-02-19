import { Box, Button, TextField } from "@mui/material";
import React, { useContext } from "react";
import { RegisterContext } from "../context/registerContext";
import newLogo from "../img/newLogoHome.png";
export default function Registro() {
    const { emailRegister, setEmailRegister, pasRegister, setPassRegister, name, setName, register_api } = useContext(RegisterContext);
    return (

        <div>
            <Box sx={{
                width: '100vw',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',

            }}>

                <Box sx={{
                    backgroundColor: "#7E54F1",
                    border: 'black',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '600px',
                    height: '800px',
                    borderRadius: '20px'
                }}>
                    <Box sx={{ height: '30%', width: '100%', display: 'block' }}>
                        <Box>
                             <img src={newLogo} style={{ width: '20vw', marginTop: "10px" }} /> 
                        </Box>
                    </Box>

                    <TextField id="outlined-basico"
                        value={emailRegister}
                        onChange={(e) =>  setEmailRegister(e.target.value)}
                        label="Email"
                        type="text"
                        variant="outlined"
                        sx={{ width: '90%', color: 'white', }}
                    />

                    <TextField id="outlined-basic"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        label="Nome"
                        type="text"
                        variant="outlined"
                        sx={{ width: '90%', marginBottom: '20px', marginTop: '20px' }} />

                    <TextField id="outlined-basic"
                        value={pasRegister}
                        onChange={(e) => setPassRegister(e.target.value)}
                        label="Senha"
                        type="password"
                        variant="outlined"
                        sx={{ width: '90%', }} />

                    <Button sx={{ backgroundColor: 'green', marginTop: '20px' }} onClick={register_api}>Registrar </Button>

                </Box>
            </Box>
        </div>
    )

}

