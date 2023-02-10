import axios from 'axios';

export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMON_ID = "GET_POKEMON_ID";
export const GET_POKEMON_NAME = "GET_POKEMON_NAME";
export const GET_POKEMON_TYPES = "GET_POKEMON_TYPES";

export const getAllPokemon = ()=>{
    return async (dispatch)=>{
        const pokemons = await axios.get("http://localhost:3001/pokemons").data
        dispatch({type: GET_POKEMONS, payload: pokemons})
    }
}

