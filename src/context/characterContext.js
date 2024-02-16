import { createContext, useEffect, useState } from "react";
import { api } from "../api/api";
export const CharactersContext = createContext()


/////////////////////
function CharactersProvider({ children }) {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [input, setInput] = useState('');
    const [inputEp, setInputEp] = useState('');
    const [inputLo, setInputLo] = useState('');
    const [typeSelect, setTypeSelect] = useState({ value: 'character', label: 'Personagens' })

    //// Guardar o tipo de busca no typeSearch
    async function getData() {
        await api.get(`/${typeSelect.value}`)
            .then((response) => {
                setData(response.data.results)
            }).catch((err) => {
                console.log(err);
            }).finally(() => {
                setIsLoading(false)
            })
    }

    async function getDataSearch() {
        // console.log({typeSelect: typeSelect.value});
        // console.log({typeSearch: typeSearch});
        let urlSearch = ''
        switch (typeSelect.value) {
            /// se typeSelect.value for === character 
            case 'character':
                urlSearch = `?name=${input}`;  // caso for character vai concatena o final da url com o valor do input 
                break  // aki para de rodar e vai para o proximo caso 

            case 'location':
            case 'episode':
                urlSearch = `${input}`
                break
        }

        await api.get(`/${typeSelect.value}/${urlSearch}`)
            .then((response) => {
                console.log({ "🪲": response.data.length ? true : false });
                typeSelect.value === "character" ? setData(response.data.results) : setData(response.data.length ? response.data : [response.data])

            }
            ).catch((error) => {
                console.log(error);
            })
    }
    // const config = {
    //     headers: {
    //         'content-type': 'application/json',
    //         'X-RapidAPI-Key': 'd001b32cbdmshfd0590bd375a310p1ab2e0jsn2b012bf48ad3',
    //         'X-RapidAPI-Host': 'jwt-bearer-auth1.p.rapidapi.com'
    //     }
    // }

    // async function  login_api( ) {
    //     const body = {
    //         email: 'your_email@gdomain.com',
    //         password: 'Your_password123.'
    //     }
    //     await api_users.post('/login', body, config)
    //     .then((response)=>{
    //        console.log('teste', response.data); 
    //     })   
    //     .catch((err)=>{
    //        console.error(err) 
    //     })   
    //     .finally(()=>{
    //        console.log(' asa'); 
    //     })   
    //     }
    useEffect(() => {
        getData()
    }, [typeSelect])
    // usado para recuperar valores 
    return (
        < CharactersContext.Provider
            value={{
                data, setData, getData,
                getDataSearch, isLoading, setIsLoading,
                input, setInput, getDataSearch, typeSelect,
                setTypeSelect
            }}>

            {children}
        </CharactersContext.Provider>
    )



}


export default CharactersProvider