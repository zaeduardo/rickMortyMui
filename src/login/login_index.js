import React, { useContext, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { LoginContext } from "../context/LoginContext";
import newLogo from "../img/newLogoHome.png"
import Home from "../Paginas/home";
 
function Login() {

    const { userLogin, setUserLogin, passLogin, setPassLogin, login_api } = useContext(LoginContext)


    return (
        <Box sx={{
            width: '100vw',
            height: '100vh',
            backgroundColor: 'grey',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',

        }}>
            <Box sx={{
                backgroundColor: "#7A55F3",
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '600px',
                height: '800px',
                borderRadius: '20px'
            }}>


                <Box sx={{  height: '30%', width:'100%', display: 'block', marginTop: 'auto' }}>

                        <Box>
                            <a href="Home">

                        <img src={newLogo} style={{ width: '20vw', marginTop:"50px" }} />
                            </a>
                        </Box>

                </Box>





                <Box sx={{ height: '50%', width: '90%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', }}>



                    <TextField id="outlined-basic"

                        value={userLogin} onChange={(e) => setUserLogin(e.target.value)}
                        label="User"
                        type="text"
                        variant="outlined"
                        sx={{ width: '90%', marginBottom: '5%' }}
                    />

                    <TextField id="outlined-basic"
                        value={passLogin}
                        onChange={(e) => setPassLogin(e.target.value)}
                        label="Pass"
                        type="password"
                        variant="outlined"
                        sx={{ width: '90%' }} />

                </Box>




                <Box sx={{  height: '20%', marginLeft:'60%' }}>

                    <div style={{ display: 'flex', width: 'px' }}>
                        <Button sx={{ backgroundColor: '#92C87C', color: 'black', marginTop: '30px', width: '70%', marginRight:'10px' }} onClick={(e) => login_api()} variant="contained" > Login  </Button>
                        <Button sx={{ backgroundColor: '#92C87C', color: 'black', marginTop: '30px', width: '70%' }} variant="contained" > Register </Button>

                    </div>

                </Box>








            </Box>
        </Box>
    );

}






export default Login;
