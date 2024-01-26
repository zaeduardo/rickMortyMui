import { createContext, useEffect, useState } from "react";
import api from "../api/api";

export const CharactersContext  = createContext()



    



/////////////////////
function CharactersProvider ({children}){
    const [data, setData ] = useState([])
    const [ isLoading, setIsLoading ] = useState(true)
    const [input, setInput] = useState('');
    const [inputEp, setInputEp] = useState('');
    const [inputLo, setInputLo] = useState('');
    const [typeSearch, setTypeSearch] = useState("character");  
        //// Guardar o tipo de busca no typeSearch
    async function getData  () {
        await api.get (`/${typeSearch}`)
            .then  ((response) => {
                setData(response.data.results) 
                console.log(response.data.results);
            }).catch((err) => { 
                console.log(err);
            }).finally(() => { 
                 setIsLoading(false)
            })
    }

    async function getDataSearch () {
       let urlSearch =''
       switch (typeSearch) {
        case 'character':
            urlSearch = `?name=${input}`;
        break
        case 'location':
        case 'episode':
            urlSearch= `${input}`
            break
       } 
        await api.get(`/${typeSearch}/${urlSearch}`)
            .then((response) => {
                setData(response.data.results)
                console.log(response.data.results);
            }
            ).catch((error)=> {
                console.log(error);
            })
    } 

    useEffect(()=>{
        getData()
    },[])
  
    return(
        < CharactersContext.Provider value={{typeSearch, setTypeSearch,data, setData, getData,getDataSearch, isLoading, setIsLoading,input, setInput, getDataSearch}}>

        {children}
        </CharactersContext.Provider>
    )
}
 

export default CharactersProvider