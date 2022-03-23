import styled from "styled-components";

const StyledButton = styled.button`
    padding: 1rem;
    box-sizing: border-box;
    outline: none;
    border: 1px solid black;
    border-radius: 10px;
    font-size: 1.2rem;
    transition: 0.3s;
    &:hover{
        cursor: pointer;
        background-color: ${({ theme }) => theme.secondText};
        color: white;
        transform: scale(1.1);
    }
`
const Button = (props) => {
    return(
        <StyledButton onClick={props.onClick}>
            {props.value}
        </StyledButton>
    )
}
export default Button;