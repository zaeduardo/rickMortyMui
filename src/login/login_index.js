import React, { useContext, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { LoginContext } from "../context/LoginContext";


function Login() {

    const { userLogin , setUserLogin, passLogin, setPassLogin, login_api } = useContext(LoginContext)



    return (
                <Box sx={{backgroundColor:"white",
                display:'flex',
                flexDirection:'column'
                }}>
                        <TextField id="outlined-basic" value={userLogin} onChange={setUserLogin}label="User" variant="outlined" sx={{width:'30%'}} />
                        <TextField id="outlined-basic" value={passLogin} onChange={setPassLogin} label="Pass" variant="outlined" sx={{width:'30%'}} />



                </Box>
    );
}




    

export default Login;
