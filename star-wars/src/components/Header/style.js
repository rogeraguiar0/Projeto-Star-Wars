import styled from "styled-components";

export const Container = styled.header`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-background);
  box-shadow: 0px 0px 30px 0px var(--color-brand);
  position: relative;
  transition: 0.4s;

  :hover svg {
    font-size: calc(var(--title-size) + 4px);
    transition: 0.4s;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    font-size: var(--title-size);
    fill: var(--color-brand);
    position: absolute;
    top: 25px;
    right: 10%;
    transition: 0.4s;
  }

  h1 {
    color: var(--color-brand);
    font-size: var(--title-size);
    font-family: var(--font-family-title);
  }
`;
