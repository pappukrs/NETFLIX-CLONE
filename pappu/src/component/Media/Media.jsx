import axios from 'axios'
import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getError, getLoading, getSuccess } from '../../Redux/action';
import CardList from './CardList';
import Mediafooter from './Mediafooter';

const Media = () => {


  const dispatch=useDispatch();


 const fetchData=()=>{
  dispatch(getLoading());
  axios({
    method:"get",
    url:`http://localhost:8080/media`,

  }).then((res)=>dispatch(getSuccess(res.data)))
  .catch((err)=>dispatch(getError()));
 }
 
 useEffect(()=>{
  fetchData();
 },[])

  return (
    <div style={{backgroundColor:"black"}} >
     <CardList/>
    <Mediafooter/>
    </div>
  )
}

export default Media