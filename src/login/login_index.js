import React, { useContext, useState } from "react";
import { Box, Button, FormControl, TextField } from "@mui/material";
import { LoginContext } from "../context/LoginContext";
import { Form, Link } from "react-router-dom";
import { parseCookies } from 'nookies'
import newLogo from "../img/newLogoHome.png";
import Home from "../Paginas/home";
import { RegisterContext } from "../context/registerContext";


function Login() {
    const { userLogin, setUserLogin, passLogin, setPassLogin, login_api, autenticacao } = useContext(LoginContext);
    const { name, setName } = useContext(RegisterContext)
    return (
        <Box sx={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
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

                <Box sx={{ height: '30%', width: '100%', display: 'block', marginTop: 'auto' }}>
                    <Box>
                        <img src={newLogo} style={{ width: '20vw', marginTop: "50px" }} />
                    </Box>
                </Box>

                <Box sx={{ height: '50%', width: '90%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', }}>

                    <FormControl sx={{ width: '100%', display: 'flex', justifyContent: "center", alignItems: 'center' }}>
                        <TextField id="outlined-basico"
                            value={userLogin}
                            onChange={(e) =>
                                setUserLogin(e.target.value)}
                            label="Email"
                            type="text"
                            variant="outlined"
                            sx={{ width: '90%', marginBottom: '5%', color: 'white', }}
                        />

                        <TextField id="outlined-basic"
                            value={passLogin}
                            onChange={(e) => setPassLogin(e.target.value)}
                            label="Senha"
                            type="password"
                            variant="outlined"
                            sx={{ width: '90%' }} />

                    </FormControl>
                </Box>

                <Box sx={{ height: '20%', marginLeft: '60%' }}>


                    <div style={{ display: 'flex', marginRight:'100px',  }}>
                        <Button sx={{ backgroundColor: '#92C87C', color: 'black', marginTop: '30px', width: '70%', marginRight: '10px' }}
                            onClick={login_api} variant="contained" >  Login </Button>
                        <Link to="/register" style={{ height: '1px', width: '150px' }} >
                            <Button sx={{ backgroundColor: '#92C87C', color: 'black', marginTop: '30px', width: '90%' }} variant="contained" > Registrar</Button>
                        </Link>
                    </div>
                </Box>

            </Box>
        </Box>
    );

}

export default Login;
