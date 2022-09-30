import styled from "styled-components";

const Container = styled.li`
  padding: 2px;
  width: 100%;
  height: 250px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 4px;
  background-color: var(--color-brand);
  font-family: var(--font-family-text);

  & h4 {
    font-size: var(--text-size-2);
    text-align: center;
  }

  & p {
    font-size: var(--text-size-2);
    font-weight: bold;
  }

  & > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
  }

  & > div > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  svg {
    align-self: center;
    font-size: var(--text-size-2);
  }

  span {
    font-size: var(--text-size-3);
  }

  @media (min-width: 768px) {
    width: 250px;
    height: 280px;
  }
`;

export default Container;
