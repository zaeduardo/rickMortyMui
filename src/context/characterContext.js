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
 
        let urlSearch = ''
        switch (typeSelect.value) {
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