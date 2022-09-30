import styled from "styled-components";

const Container = styled.li`
  padding: 2px;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 4px;
  background-color: var(--color-brand);
  font-family: var(--font-family-text);
  text-align: center;

  p {
    font-size: var(--text-size-2);
    font-weight: bold;
  }

  span {
    font-size: var(--text-size-3);
  }

  @media (min-width: 768px) {
    width: 150px;
    height: 180px;
  }
`;

export default Container;
