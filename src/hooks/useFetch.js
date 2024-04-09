import { useState } from "react"
import axios from 'axios'

const useFetch = url => {

    const [response, setResponse] = useState()

    const getApi = () => {
        axios.get(url)
            .then(res => setResponse(res.data))
            .catch(err => console.log(err))
    }

    const getApiTypes = (urlType) => {

        axios.get(urlType)
            .then(res => {
                const obj = {
                    results: res.data.pokemon.map(poke => poke.pokemon)
                }
                setResponse(obj)
            })
            .catch(err => console.log(err))
    }

    return [response, getApi, getApiTypes]

}

export default useFetch