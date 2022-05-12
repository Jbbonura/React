import React from 'react'
import { useParams } from 'react-router-dom'

const Colors = () => {
    const {repeatMe, textColor, backColor} = useParams()

    return (
        <div style={{backgroundColor : backColor}}>
            <h1 style={{color : textColor}}>{repeatMe}</h1>
        </div>
    )
}

export default Colors;