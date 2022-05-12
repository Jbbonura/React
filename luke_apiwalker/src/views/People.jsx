import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const People = () => {
    const [person, setPerson] = useState()
    const {searchID} = useParams()

    useEffect(() => {
        axios.get("https://swapi.dev/api/people/"+searchID)
            .then(res => {
                console.log(res.data)
                setPerson(res.data)
            })
            .catch(err => console.log(err))
    }, [searchID])
    return (
        <div>
            {
                person &&
                <>
                    <h1>{person.name}</h1>
                    <p><strong>Height: </strong>{person.height} cm</p>
                    <p><strong>Mass: </strong>{person.mass} kg</p>
                    <p><strong>Hair Color: </strong>{person.hair_color}</p>
                    <p><strong>Skin Color: </strong>{person.skin_color}</p>
                </>
            }
            
        </div>
    )
}

export default People;