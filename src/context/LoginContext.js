import { createContext, useState } from "react";
import { api, api_users } from "../api/api";
import { setCookie } from 'nookies'


export const LoginContext = createContext();

function LoginProvider({ children }) {
    const [userLogin, setUserLogin] = useState('');
    const [passLogin, setPassLogin] = useState('');


    // cookies
    async function login_api() {


        const config = {
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': 'd001b32cbdmshfd0590bd375a310p1ab2e0jsn2b012bf48ad3',
                'X-RapidAPI-Host': 'jwt-bearer-auth1.p.rapidapi.com'
            }
        }

        const body = {
            email: 'your_email@gdomain.com',
            password: 'Your_password123.'
        }

        await api_users.post('/login', body, config)

            .then((response) => {

                const tokenPuro = response.data.token
                console.log('Token 🟠',tokenPuro);

                setCookie(null, 'token', tokenPuro, {
                    maxAge: 60,
                    path: '/',
                })


            })
            .catch((error) => {
                console.log('Erro 👎 ', error);
            })
            .finally(() => { })

//     await api_users.post('/login', body, config);
        //     const token_a = response.data.token;
        //     setToken(token_a);
        //     console.log('Token 👍', token_a);

        // } catch (error) {
        //     console.error(error);
        // }

    }

    return (
        <LoginContext.Provider
            value={{
                userLogin,
                setUserLogin,
                passLogin,
                setPassLogin,
                login_api,

            }}>
            {children}
        </LoginContext.Provider>
    );
}

export default LoginProvider;
