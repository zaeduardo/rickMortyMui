// Provaider, fazer toda  a aparencia do bagulho na register_index

import React, { createContext, useState } from "react";
import { api_users } from "../api/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const RegisterContext = createContext();

function RegisterProvider({ children }) {

    const [emailRegister, setEmailRegister] = useState('');
    const [pasRegister, setPassRegister] = useState('');
    const [name, setName] = useState('')
    const redirect = useNavigate('')

    async function register_api() {

        const config = {
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': 'd001b32cbdmshfd0590bd375a310p1ab2e0jsn2b012bf48ad3',
                'X-RapidAPI-Host': 'jwt-bearer-auth1.p.rapidapi.com'
            }

        }

        const body = { 
            email: `${emailRegister}`,
            password: `${pasRegister}`,
            role: `${name}`
        }
    
        await api_users.post('/register', body, config) .then((response)=> {
            toast.success('Registrado✅')
            redirect('/Login')
        }).catch((error)=> {
            console.log('Erro de cadastro', error);
        })
    }
        return (
            <RegisterContext.Provider
                value={{
                    emailRegister,
                    setEmailRegister,
                    pasRegister,
                    setPassRegister,
                    name,
                    setName,
                    register_api

                }}>
                {children}
            </RegisterContext.Provider>
        )

   
}
    export default RegisterProvider