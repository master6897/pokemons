import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { pokemonsAction } from "../../store/pokemons-slice";

const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    @media (max-width: 480px){
        flex-direction: column;
        width: 90%;
    }
    & input{
        width:60%;
        outline: none;
        padding: .5rem;
        border-radius: 10px;
        font-size: 1.2rem;
        border: 1px solid black;
    }
    & select{
        width: 30%;
        padding: .5rem;
        border-radius: 10px;
        font-size: 1.2rem;
        border: 1px solid black;
        @media (max-width: 480px){
            width: 40%;
            margin-top: 1rem;
        }
    }
`

const Filter = () => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');
    const [selectValue, setSelectValue] = useState('name');
    const pokemons = useSelector(state => state.pokemons.pokemons);

    const inputValueHandler = (evt) => {
        /*setTimout to let user type some string until searching begins
            Prevents from lagging when user load more pokemons
        */
        setTimeout(() => {
            setInputValue(evt.target.value);
        },600)
    }
    const selectValueHandler = (evt) => {
        setSelectValue(evt.target.value);
    }

    useEffect(() => {
        if(inputValue && selectValue){
            let copiedPokemons = [...pokemons];
            const data ={
                inputValue,
                selectValue,
                copiedPokemons
            }
            dispatch(pokemonsAction.filterPokemons(data));
        }else if(inputValue === '' || inputValue === undefined || inputValue.trim().length < 1){
            dispatch(pokemonsAction.isFiltered());
        }
    },[inputValue, selectValue, dispatch, pokemons])
    return(
        <StyledContainer>
            <input 
                type='text' 
                placeholder="Search by name or type..."
                onChange={inputValueHandler}
                />
            <select onChange={selectValueHandler}>
                <option value='name'>Name</option>
                <option value='type'>Type</option>
            </select>
        </StyledContainer>
    )
}
export default Filter;