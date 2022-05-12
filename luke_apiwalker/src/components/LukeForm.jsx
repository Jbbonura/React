import React, {useState} from 'react'
import {Outlet, useNavigate} from 'react-router-dom'

const LukeForm = () => {

    const [searchType, setSearchType] = useState("people")
    const [searchID, setSearchID] = useState()

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        {
            searchType ==="people" ?
            navigate("/people/" + searchID) :
            navigate("/planets/" + searchID)
        }
    }
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <p>Search for: 
                    <select name="type" onChange={(e) => setSearchType(e.target.value)}>
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                    </select>
                    ID:
                    <input type="text" name="id" onChange={(e) => setSearchID(e.target.value)}/>            
                    <button>Search</button>
                </p>

            </form>
            <Outlet />
        </div>
    )
}

export default LukeForm;