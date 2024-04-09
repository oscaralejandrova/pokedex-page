import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import ListPokemons from "../components/PokedexPage/ListPokemons"
import SelectType from "../components/PokedexPage/SelectType"
import '../components/PokedexPage/Style/PokedexPage.css'

const PokedexPage = () => {

    const [pokeSearch, setPokeSearch] = useState('')
    const [typeSelected, setTypeSelected] = useState('allPokemons')

    const inputSearch = useRef()

    const trainer = useSelector(states => states.trainer)

    const url = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'

    const [pokemons, getPokemons, getPokeByType] = useFetch(url)

    useEffect(() => {
        if(typeSelected === 'allPokemons'){
            getPokemons()
        }else{
            getPokeByType(typeSelected)
        }
        
    },[typeSelected]) 

    const handleSubmit = e => {

        e.preventDefault()
        setPokeSearch(inputSearch.current.value.trim().toLowerCase())

    }
    
    const pokemonsFiltered = pokemons?.results.filter(poke => {
        return poke.name.includes(pokeSearch)
    } )

    return(
     <div>
        <div>
            <div className="color__red"></div>
            <div className="color__black"></div>
            <h1 className="pokedex-title-1">Pokedex</h1>

            
        </div>
        <br />
        <p className="welcome-text"><span className="red-text">Welcome</span> <span className="red-text">{trainer},</span> here you can find your favorite pokemon</p>

       <form className="" onSubmit={handleSubmit}>
        <input className="btn__Search" ref={inputSearch} placeholder="Buscar un pokemon" type="text"/>
        <button className="btn">Search</button>
       </form>
       <SelectType 
       setTypeSelected={setTypeSelected}
       />
       <ListPokemons 
       pokemons={pokemonsFiltered} />
     </div>
    )
}

export default PokedexPage