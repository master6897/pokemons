import {createSlice} from '@reduxjs/toolkit';
let initialState ={
    pokemons: [],
    fetchedPokemons: [],
    filtered: [],
    isFiltered: false
}
const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState: initialState,
    reducers: {
        addPokemonsToStore(state, action){
            state.fetchedPokemons.push(action.payload);
        },
        addPokemonsToDisplay(state){
            state.pokemons = state.fetchedPokemons;
        },
        filterPokemons(state, action){
            state.isFiltered = true;
            if(action.payload.selectValue === 'name'){
                state.filtered =  action.payload.copiedPokemons.filter((pokemons) => pokemons.name.includes(action.payload.inputValue));
            }else if(action.payload.selectValue === 'type'){
                state.filtered =  action.payload.copiedPokemons.filter((pokemons) => pokemons.types[0].type.name.includes(action.payload.inputValue));
            }
        },
        isFiltered(state){
            state.isFiltered = false;
        }
    }
});

export const pokemonsAction = pokemonsSlice.actions;
export default pokemonsSlice;