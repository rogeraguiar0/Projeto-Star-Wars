import styled from "styled-components";

const Container = styled.ul`
  margin: 0 auto;
  padding-top: 40px;
  height: 100%;
  width: 100%;
  max-width: 800px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;

  h3 {
    color: var(--color-brand);
    font-size: var(--font-size-text-1);
  }

  @media (min-width: 768px) {
    h3 {
      display: none;
    }
  }
`;

export default Container;
