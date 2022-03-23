import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pokemonsAction } from "../../store/pokemons-slice";
import styled from "styled-components";
import useHttp from "../Hooks/useHttp";
import PokemonsList from "./PokemonsList";
import Button from "../Helpers/Button/Buttons";
import Filter from "../Filter/Filter";
import Loading from "../Helpers/Loading/Loading";


const StyledContainer = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 2rem 0;
`
const Pokemons = () => {
    const dispatch = useDispatch();
    const [isDone, setIsDone] = useState(false);
    const [moreDataRequest, setMoreDataRequest] = useState(false);
    const [offset, setOffset] = useState(20);
    const isFiltered = useSelector(state => state.pokemons.isFiltered);
    let promises;
    
    const applyData = async (allPokemons) => {
        allPokemons.results.forEach(async (pokemon) => {
            promises = new Promise(async (resolve) => {
                let url = pokemon.url;
                await fetch(url)
                .then(response => response.json())
                .then(pokemon => {
                    resolve(dispatch(pokemonsAction.addPokemonsToStore(pokemon)));
                });
            })  
        });
        Promise.all([promises]).then(() => {
            setIsDone(true);
            setMoreDataRequest(false);
            dispatch(pokemonsAction.addPokemonsToDisplay());
        })
    };

    const {isLoading, error, sendRequest: fetchPokemons} = useHttp(applyData);
    useEffect(() => {
        fetchPokemons({url:`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`});
        setMoreDataRequest(true);
    },[offset]);
    const loadMoreDataHandler = () => {
        setOffset((prevState) => {return prevState+20});
    }
    return(
        <StyledContainer>
            {!error && <Filter />}
            {!isLoading && isDone && !error && <PokemonsList />}
            {!isFiltered && isDone && !moreDataRequest && !error &&<Button value={'Load more...'} onClick={loadMoreDataHandler}/>}
            {(isLoading || !isDone || moreDataRequest) && !error && (
                <>
                    <Loading />
                    <h1>Loading...</h1>
                </>)}
            {!isLoading && error && <h1>Something went wrong!</h1>}
        </StyledContainer>
    )
}
export default Pokemons;