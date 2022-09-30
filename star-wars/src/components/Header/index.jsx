import { Container } from "./style.js";
import { BsLink45Deg } from "react-icons/bs";

function Header() {
  return (
    <Container>
      <div>
        <a target="blank" href="https://swapi.dev/">
          <BsLink45Deg />
        </a>
        <h1>Star Wars</h1>
      </div>
    </Container>
  );
}

export default Header;
