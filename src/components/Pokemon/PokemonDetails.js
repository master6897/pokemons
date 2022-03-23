import Modal from "../Modals/Modal";
import Card from "../Helpers/Card/Card";
import styled from "styled-components";

const StyledContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.7);
`
const PokemonDetails = (props) => {
    console.log(props.pokemon);
    return(
        <Modal>
            <StyledContainer>
                <Card pokemon={props.pokemon} details onClick={props.handleModal}/>
            </StyledContainer>
        </Modal>
    )
}
export default PokemonDetails;