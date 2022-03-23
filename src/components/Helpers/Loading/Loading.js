import styled, { keyframes } from "styled-components";

const animation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 10rem;
    & div{
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 5rem;
        height: 5rem;
        border: 8px solid red;
        border-radius: 50%;
        animation: ${animation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: ${({ theme }) => theme.secondText} transparent transparent transparent;
        &:nth-child(1){
            animation-delay: -0.45s;
        }
        &:nth-child(2){
            animation-delay: -0.3s;
        }
        &:nth-child(3){
            animation-delay: -0.15s;
        }
    }
`;
const LoadingModal = () => {
    return(
        <StyledDiv>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </StyledDiv>
    )
}
export default LoadingModal;