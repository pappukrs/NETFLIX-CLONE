import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

const Card = ({imgLink,releaseMonth,releaseDate,releaseYear,id}) => {

  const Nav=useNavigate();
  const handleClick=(id)=>{
    Nav(`/MediaDetail/${id}`)
   }
  useEffect(()=>{
    
  },[id])
   
  
  return (
    <div onClick={()=>handleClick(id)} >
        <img src={imgLink} alt="img" style={{width:"100%",height:"400px"}}/>
        <p style={{color:"white"}}>{releaseMonth}{" "}{releaseDate},{releaseYear}</p>
    </div>
  )
}

export default Card