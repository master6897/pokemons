import Button from "../Button/Buttons";
import styled, {css} from "styled-components";

const StyledPokemonCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid ${({ theme }) => theme.secondText};
    border-radius: 10px;
    ${props => props.details ? 'width: 70%; padding: 2rem;' : 'width: 30%;'};
    margin-bottom: 2rem;
    background: ${({ theme }) => theme.backgroundSecond};
    transition: 0.3s;
    @media (max-width: 480px){
        ${props => props.details ? 'width: 70%;' : 'width: 90%'}
    }
    @media (min-width: 481px){
        ${props => props.details ? 'width: 40%;' : 'width: 30%;'};
    }
    & img{
        ${props => props.details ? 'width: 20rem; height: 20rem;' : 'width: 10rem; height: 10rem;'};
        transition: 0.3s;
    }
    &:hover{
        ${props => props.details ? null : css`
            cursor: pointer;
            -webkit-box-shadow: 0px 3px 24px 0px rgba(66, 68, 90, 1);
            -moz-box-shadow: 0px 3px 24px 0px rgba(66, 68, 90, 1);
            box-shadow: 0px 3px 24px 0px rgba(66, 68, 90, 1);
            & img{
                transform: scale(1.1);
            }
        `}
    }
    ${props => props.details && css`
        & div{
            width: 90%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
        }
    `}
`;

const Card = (props) => {
    return(
        <StyledPokemonCard key={props.pokemon.id} onClick={props.details ? null : props.onClick} details={props.details}>
             <img src={props.pokemon.sprites.front_default} alt={props.pokemon.name} />
            <div>
                <h2>Name: {props.pokemon.name}</h2>
                <h3>Type: {props.pokemon.types[0].type.name}</h3>
                {props.details && (
                    <>
                        <h3>Weight: {props.pokemon.weight}</h3>
                        <h3>Height: {props.pokemon.height}</h3>
                        <Button onClick={props.onClick} value={'Close'}/>
                    </>
                )}
            </div>
        </StyledPokemonCard>
    )
}
export default Card;