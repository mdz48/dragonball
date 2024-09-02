import React from 'react'
import { useEffect, useState } from 'react'
import Card from '../components/molecules/Card';

export default function Home() {
  const[characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://dragonball-api.com/api/characters')
    .then(response => {
      if(response.ok)
        return response.json()
      else 
      alert('No fue posible establecer comunicación con el servidor')
    })
    .then(data => {
      setCharacters(data.items);
      console.log(data.items);
    })
    .catch(error => {
      console.log(error);
    })
  },[])

  return (
    <div>
      {
        characters.map((item, index) => <Card key={index} image={item.image} name={item.name} ki={item.ki} maxKi={item.maxKi} race={item.race} gender={item.gender} />)
      }
    </div>
  )
}
