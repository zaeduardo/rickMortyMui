import { createContext, useEffect, useState } from "react";
import api from "../api/api";

export const CharactersContext  = createContext()



    



/////////////////////
function CharactersProvider ({children}){
    const [data, setData ] = useState([])
    const [ isLoading, setIsLoading ] = useState(true)
    const [input, setInput] = useState('');

    async function getData  () {
        await api.get ('/character')
            .then  ((response) => {
                setData(response.data.results)
                console.log(response.data.results);
            }).catch((err) => { 
                console.log(err);
            }).finally(() => { 
                 setIsLoading(false)
            })
    }

    async function search () {
       
        await api.get(`/character/?name=${input}`)
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
        < CharactersContext.Provider value={{data, setData, getData, isLoading, setIsLoading,input, setInput, search}}>

        {children}
        </CharactersContext.Provider>
    )
}
 

export default CharactersProvider