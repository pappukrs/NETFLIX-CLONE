import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
const MediaDetail = () => {
    const {id}=useParams();
    console.log("id",id)

    const prod=useSelector((state)=>state.red.data);

   const ele= prod?.filter((e)=>(+e.id)===(+id))
   let t=ele[0];
   console.log("elet",ele);

    // const fetchDetails=()=>{
    //     axios({
    //         method:"get",
    //         url:`http://localhost:8080/media/`
    //     }).then((res)=>console.log("rest",res))
    //    .catch((err)=>console.log((err)));
    // }
    // useEffect(()=>{
    //     fetchDetails();
    // },[id])



  return (
    <>
   
   <div style={{display:"flex",flexDirection:"row",marginLeft:"20%",marginRight:"20%",marginTop:"5%",gap:"10px"}}>

    <div style={{display:"flex",flexDirection:"column",gap:"5px",flex:"1"}}>
    <h1>{ele[0].title}</h1>
    <h2>Releasing in India on {t.releaseMonth}{" "}{t.releaseDate}{" "}{t.releaseYear}</h2>

    <p>{t.desc}</p>

    </div>
    <div><img src={ele[0].imgLink} style={{width:"100%",height:"500px"}}/></div>
    
    

   </div>
   
  
   </>
  )
}

export default MediaDetail