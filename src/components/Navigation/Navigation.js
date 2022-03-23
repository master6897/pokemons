import styled from "styled-components";

const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid ${({ theme }) => theme.toggleBorder};
    color: ${({ theme }) => theme.secondText};
    height: 5rem;
    & button{
       position: relative;
       right: -2rem;
    }
`
const Navigation = (props) => {
    return(
        <StyledNav>
            <h1>Pokemons</h1>
            {props.children}
        </StyledNav>
    )
}
export default Navigation;