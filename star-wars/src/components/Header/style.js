import styled from "styled-components";

export const Container = styled.header`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-background);
  box-shadow: 0px 5px 20px var(--color-brand);

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  svg {
    font-size: var(--title-size);
    fill: var(--color-brand);
  }

  h1 {
    color: var(--color-brand);
    font-size: var(--title-size);
    font-family: var(--font-family-title);
  }
`;
