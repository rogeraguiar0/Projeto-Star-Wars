import styled from "styled-components";

const Container = styled.nav`
  margin: 0 auto;
  padding-top: 30px;
  width: 100%;
  max-width: 800px;
  display: flex;
  justify-content: space-between;

  button {
    padding: 5px;
    border: 1px solid var(--color-brand);
    border-radius: 4px;
    background-color: transparent;
    color: var(--color-brand);
    font-family: var(--font-family-text);
    transition: 0.4s;
  }

  button:active {
    background-color: var(--color-brand);
    color: var(--color-background);
    transition: 0.4s;
  }

  @media (min-width: 768px) {
    button:hover {
      background-color: var(--color-brand);
      color: var(--color-background);
      transition: 0.4s;
    }
  }
`;

export default Container;
