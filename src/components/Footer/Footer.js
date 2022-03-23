import styled from "styled-components";

const StyledFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    box-sizing: border-box;
    border-top: 1px solid ${({ theme }) => theme.toggleBorder};
    color: ${({ theme }) => theme.secondText};
    & a{
        text-decoration: none;
        color: ${({ theme }) => theme.text};
    }
`;
const Footer = () => {
    return(
        <StyledFooter>
            <h3>
                Icons created by <a href='https://www.flaticon.com/free-icons' target='blank'>flaticon.com</a>
            </h3>
        </StyledFooter>
    )
}
export default Footer;