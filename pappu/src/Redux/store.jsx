import { reducer  } from "./reducer";


import {createStore,applyMiddleware,combineReducers,compose} from "redux"
import thunk from 'redux-thunk';




const rootReducer=combineReducers({
      red:reducer      
});

export const store=createStore(rootReducer,compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));