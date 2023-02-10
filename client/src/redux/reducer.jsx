import { GET_POKEMONS } from "./actions";


const initialState = {
    pokemons: [],
    tipos: [],
    detalle: [],
    form: [],
}

const rootReducer = (state = initialState, action)=>{
    switch(action.type){
        case GET_POKEMONS:
            return{
                ...state,
                pokemons: action.payload
            }

        default: 
            return {...state};
    }
}

export default rootReducer;