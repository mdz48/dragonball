import React from 'react'
import './Card.css'

export default function Card(props) {
  return (
    <div className='character-card'>
        <img src={props.image} alt=""/>
        <p>{props.name}</p>
        <p>{props.race} - {props.gender}</p>
        <p>Base KI:</p>
        <p className='values-character'>{props.ki}</p>
        <p>Max KI:</p>
        <p className='values-character'>{props.maxKi}</p>
    </div>
  )
}
