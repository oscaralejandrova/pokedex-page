import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"


const SelectType = ({setTypeSelected}) => {

    const url = 'https://pokeapi.co/api/v2/type'

    const [types, getTypes] = useFetch(url)

    useEffect(() => {
        getTypes()
    },[] ) 

    const habdleChange = e => {

        setTypeSelected(e.target.value)

    }

    return(

        <select className="hola" onChange={habdleChange} >
            <option className="" value='allPokemons' >All pokemons</option>
            {
                types?.results.map(typeInfo => (
                 <option className="" key={typeInfo.url} value={typeInfo.url} > {typeInfo.name} </option>
                ))
            }

        </select>

    )

}

export default SelectType