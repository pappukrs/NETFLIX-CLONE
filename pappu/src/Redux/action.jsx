import { GET_ERROR, GET_LOADING,GET_SUCCESS } from "./actionType"

export const getLoading=()=>{
   return {
    type:GET_LOADING,
    
   }
}

export const getSuccess=(payload)=>{
    return {
     type:GET_SUCCESS,
     payload
    }
 }

 export const getError=()=>{
    return{
        type:GET_ERROR,
    }
 }