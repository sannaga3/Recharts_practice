import styled from "styled-components"

export const BaseButton = styled.button`
  width: 100px;
  height: 40px;
  color: #fff;
  font-weight: bold;
  padding: 6px 24px;
  border: none;
  border-radius: 20px;
  outline: none;
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`