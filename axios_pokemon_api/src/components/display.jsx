import React, {useState} from 'react';
import axios from 'axios';

const Display = (props) => {
    const [apiState, setAPIState] = useState()

    const eventHandler = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=807") // make request to api
            .then(successResponse => {
                console.log("SUCCESS: ", successResponse.data)
                setAPIState(successResponse.data) // taking response data and storing it in state
            })
            .catch(errorResponse => console.log("ERROR: ", errorResponse))
        }

    return (
        <div>
        <button onClick = {eventHandler}>Fetch Pokemon</button>

        {
            (apiState)?
            <ul>
               { 
                    apiState.results.map((pokemon, key) => {
                        const {name} = pokemon;
                        return (
                            <li>{name}</li>
                        )
                    })
                }
            </ul> : <h1>Loading.....</h1>
        }
        </div>
    )
}

export default Display;