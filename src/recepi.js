import React from 'react'

const Recipe =({title,img})=>{
    return (
        <div className="recipe">
            <img src={img} alt=""/>
            <h3>{title}</h3>
        </div>
    )

}

export default Recipe