import { useSelector } from "react-redux";
import React, { useState } from "react";
import styled from "styled-components";
import PokemonDetails from "./PokemonDetails";
import Card from "../Helpers/Card/Card";


const StyledContainer = styled.article`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    padding: 2rem;
`;

const PokemonsList = () => {
    const [details, setDetails] = useState(false);
    const [pokemonWithDetails, setPokemonWithDetails] = useState();
    const isFiltered = useSelector(state => state.pokemons.isFiltered);
    const pokemons = useSelector(state => state.pokemons.pokemons);
    const filteredPokemons = useSelector(state => state.pokemons.filtered);
    let pokemonsList = [];
    if(isFiltered){
        pokemonsList = filteredPokemons;
    }else{
        pokemonsList = pokemons;
    }

    const pokemonDetailsHandler = (pokemon = null) =>{
        setDetails((prevState) => !prevState);
        setPokemonWithDetails(pokemon);
    }
    return(
        <StyledContainer>
            {pokemonsList.map((pokemon) => (
                <Card pokemon={pokemon} key={pokemon.id} onClick={() => pokemonDetailsHandler(pokemon)}/>
            ))}
            {pokemonsList.length === 0 && isFiltered && <h1>Not found</h1>}
            {details && <PokemonDetails pokemon={pokemonWithDetails} handleModal={pokemonDetailsHandler}/>}
        </StyledContainer>
    )
}
export default PokemonsList;