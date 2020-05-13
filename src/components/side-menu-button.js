import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const ButtonContainer = styled.button`
  width: 35px;
  height: 35px;
  background: var(--color-primary);
  color: white;
  border: 0.5px solid black;
  border-radius: 2px;
  cursor: pointer;
  position: relative;

  &:hover {
    background: var(--color-secondary);
  }

  &:active,
  &:focus {
    outline: none;
  }
`

const Hamburger = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &,
  &::before,
  &::after {
    background-color: white;
    border-radius: 2px;
    position: absolute;
    width: 17px;
    height: 2px;
  }

  &::before {
    content: "";
    top: -6px;
    left: 0;
  }

  &::after {
    content: "";
    top: 6px;
    left: 0;
  }
`

const SideMenuButton = ({ onClick }) => (
  <ButtonContainer onClick={onClick}>
    <Hamburger></Hamburger>
  </ButtonContainer>
)

SideMenuButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default SideMenuButton
