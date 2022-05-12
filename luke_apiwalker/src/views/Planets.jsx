import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Planets = () =>{
    
    const [planet, setPlanet] = useState()
    const {searchID} = useParams()

    useEffect(() => {
        axios.get("https://swapi.dev/api/planets/"+searchID)
            .then(res => {
                console.log(res.data)
                setPlanet(res.data)
            })
            .catch(err => console.log("ERROR:   ",err))
    }, [searchID])

    return (
        <div>
            {
                planet &&
                <>
                    <h1>{planet.name}</h1>
                    <p><strong>Climate: </strong>{planet.climate}</p>
                    <p><strong>Terrain: </strong>{planet.terrain}</p>
                    <p><strong>Surface Water: </strong>{planet.surface_water}</p>
                    <p><strong>Population: </strong>{planet.population}</p>
                </> 
            }
            
        </div>
    )
}

export default Planets;