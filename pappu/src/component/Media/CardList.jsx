import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'
import './CardList.css'
const CardList = () => {
       
  const prod=useSelector((state)=>state.red.data);
  console.log("prod",prod);
  return (
    <div className='cardlist'>
        {prod.map((ele)=>(<Card {...ele}/>))}
        
    </div>
  )
}

export default CardList