import { createContext, us, useState } from "react";
import { api_users } from "../api/api";

export const LoginContext  = createContext()

function LoginProvider ({children}) { 
    const [userLogin, setUserLogin] = useState ('')
    const [passLogin, setPassLogin] =  useState('') 
    
    const config = {
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': 'd001b32cbdmshfd0590bd375a310p1ab2e0jsn2b012bf48ad3',
                'X-RapidAPI-Host': 'jwt-bearer-auth1.p.rapidapi.com'
            }
        }
        
        async function  login_api( ) {
            const body = {
                email: 'your_email@gdomain.com',
                password: 'Your_password123.'
            }
            await api_users.post('/login', body, config)
           
           
            .then((response)=>{
               console.log('Token 👍', response.data ); 
            })   
            .catch((err)=>{
               console.error(err) 
            })   
            .finally(()=>{
               console.log(' asa'); 
            })   
            }

    return (
        <LoginContext.Provider
                    value={{userLogin , setUserLogin, 
                passLogin, setPassLogin,
                 login_api  }}>


            {children}
        </LoginContext.Provider>
    )
}


export default LoginProvider