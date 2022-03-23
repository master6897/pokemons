import React from 'react'
import { func, string } from 'prop-types';
import styled from "styled-components"

  const StyledLabel = styled.div`
    position: absolute;
    right: 2rem;
    display: inline-block;
    width: 66px;
    height: 38px;
    & label{
      display: block;
      width: 0;
      height: 0;
    }
    & input{
      opacity: 0;
      width: 0;
      height: 0;
    }
    & span.slider{
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: ${({ theme }) => theme.backgroundSecond};
      -webkit-transition: .4s;
      transition: .4s;
      &:before{
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        border: 2px solid white;
        background-color: white;
        background-image: url(${({ theme }) => theme.backgroundToggler});
        background-size: cover;
        background-position: center;
        -webkit-transition: .4s;
        transition: .4s;
      }
      &.round{
        border-radius: 34px;
        &:before{
          border-radius: 50%;
        }
      }
    }
    & input:checked + .slider{
      background: ${({ theme }) => theme.backgroundSecond};
    }
    & input:checked + .slider:before{
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }
  `;
const Toggle = ({theme,  toggleTheme }) => {
    let dark = localStorage.getItem('theme');
    const changeThemeHandler = () => {
        toggleTheme();
    }
    return (
      <StyledLabel isDark={dark}>
        <label>
          {dark === 'dark' ? <input type="checkbox" onChange={changeThemeHandler} checked/> : <input type="checkbox" onChange={changeThemeHandler}/>}
          <span className="slider round"></span>
        </label>
      </StyledLabel>
    );
};
Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}
export default Toggle;
