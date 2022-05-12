import React, {useState} from 'react'
import {useParams} from 'react-router-dom'

const Repeat = () => {
    const {repeatMe} = useParams()

    return (
        <div>
            {
                isNaN({repeatMe}) ?
                    <h1>{repeatMe}</h1>
                    :
                    <h1>The number is: {repeatMe}</h1>
            }
            
        </div>
    )
}

export default Repeat;