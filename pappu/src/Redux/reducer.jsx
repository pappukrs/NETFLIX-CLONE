import { GET_ERROR, GET_LOADING, GET_SUCCESS } from "./actionType"

const initState={
    loading:false,
    error:false,
    data:[]
}

export const reducer=(state=initState,{type,payload})=>{

   switch (type) {
    case GET_LOADING:
        
        return {
            ...state,
            loading:true,
        };

        case GET_SUCCESS:
        
            return {
                ...state,
                data:payload
            };

            case GET_ERROR:
        
                return {
                    ...state,
                    error:true,
                };
   
    default:
       return {...state}
   }

}