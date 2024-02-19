import { createContext, useState } from "react";
import { api, api_users } from "../api/api";
import { destroyCookie, parseCookies, setCookie } from 'nookies'
import { Route, Router, useNavigate, useHistory, Routes } from "react-router-dom";
import { toast } from "react-toastify";
import { Home, Login } from "@mui/icons-material";
import Pagina1 from "../Paginas/pg1_Card";

export const LoginContext = createContext();

function LoginProvider({ children }) {

    const [userLogin, setUserLogin] = useState('');
    const [passLogin, setPassLogin] = useState('');
    const navigate = useNavigate('')
    // cookies, FUNÇÃO CHAMADA NO BTN LOGIN, OU SEJA TUDO Q ESTIVER AKI DENTRO VAI SER CHAMDO QUANDO CLICAR NO BTN 
    async function login_api() {

        const config = {
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': 'd001b32cbdmshfd0590bd375a310p1ab2e0jsn2b012bf48ad3',
                'X-RapidAPI-Host': 'jwt-bearer-auth1.p.rapidapi.com'
            }
        }

        const body = {
            email: `${userLogin}`,
            password: `${passLogin}`
        }

        await api_users.post('/login', body, config)

            .then((response) => {

                toast.success('Logado')
                navigate('/home')

                setCookie(null, 'token', response.data.token, {
                    maxAge: 30 * 24 * 60 * 60,
                    path: '/',

                })

            })
            .catch((error) => {
                console.log('Erro 👎 ', error);
                toast.error('Senha ou usuario invalido')
            })
            .finally(() => {

            })

    }
    function autenticacao() {

        const parse = parseCookies()
        const arr = Object.keys(parse)
        return arr.includes('token')

    }

    function destroy() {
        destroyCookie(null, 'token')
    }

    return (
        <LoginContext.Provider
            value={{
                userLogin,
                setUserLogin,
                passLogin,
                setPassLogin,
                login_api,
                setCookie,
                destroy,
                autenticacao
            }}>
            {children}
        </LoginContext.Provider>
    );
}

export default LoginProvider;
