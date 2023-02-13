import { GET_POKEMONS, GET_POKEMON_ID, GET_POKEMON_NAME, GET_POKEMON_TYPES } from "./actions";


const initialState = {
    pokemons: [],
    tipos: [],
    detalle:[],
    busqueda: [],
}


const rootReducer = (state = initialState, action)=>{
    switch(action.type){
        case GET_POKEMONS:
            return{
                ...state,
                pokemons: action.payload
            }
        

        case GET_POKEMON_ID:
            return{
                ...state,
                detalle: action.payload
            }
        

        case GET_POKEMON_NAME:
            return {
                ...state,
                busqueda: action.payload
            }
      
        

        case GET_POKEMON_TYPES:
            return {
                ...state,
                tipos: action.payload
            }
       

        default: 
            return {...state};
       
    }
}

export default rootReducer;