import React from 'react'
import "./reserves.css"

export const Reserves = ({country1, country2, country3, country4, country5, country6}) => {
  return (
    <div className='reserves'>
      <div className='reserves-container'>
        <h1>Country list</h1>
        <p>{country1}</p>
        <p>{country2}</p> 
        <p>{country3}</p>
        <p>{country4}</p>
        <p>{country5}</p>  
        <p>{country6}</p> 
      </div>   
    </div>
  )
}
